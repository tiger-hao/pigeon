import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { createConversationRequest } from 'store/conversations/conversationActions';
import { RootState } from 'store/rootReducer';
import { User } from 'store/users/userTypes';
import { getUsersRequest } from 'store/users/userActions';
import { getUsers, getUsersLoading } from 'store/users/userSelectors';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';

export const CreateConversation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onShowModal = () => setIsOpen(true);
  const onHideModal = () => setIsOpen(false);
  const [name, setName] = useState("");
  const [members, setMembers] = useState<User[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) {
      setMembers([]);
    }
  }, [isOpen]);

  const onCreateConversation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (members.length) {
      dispatch(createConversationRequest(
        members.map(member => member.id),
        name || undefined
      ));
    }

    onHideModal();
  };

  const [filter, setFilter] = useState("");
  const users = useSelector((state: RootState) => getUsers(state, filter));
  const usersLoading = useSelector(getUsersLoading);

  useDebouncedEffect(() => {
    if (filter) {
      dispatch(getUsersRequest({ name: filter }));
    }
  }, 200, [filter]);

  return (
    <>
      <IconButton onClick={onShowModal}>
        <CreateIcon />
      </IconButton>

      <Dialog
        open={isOpen}
        onClose={onHideModal}
        fullWidth
      >
        <form onSubmit={onCreateConversation}>
          <DialogTitle>Create a conversation</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={users}
                  getOptionLabel={user => `${user.name.first} ${user.name.last}`}
                  loading={usersLoading}
                  value={members}
                  onChange={(_, newValue) => setMembers(newValue)}
                  inputValue={filter}
                  onInputChange={(_, newInputValue) => setFilter(newInputValue)}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Members"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Name" placeholder="Conversation name" helperText="Optional"
                  value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onHideModal}>
              Cancel
            </Button>
            <Button type="submit" disabled={!members.length}>
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
