import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getMessage } from 'store/messages/messageSelectors';
import { getUserFullName } from 'store/users/userSelectors';
import { getCurrentUser } from 'store/auth/authSelectors';

export interface MessageProps {
  id: string;
}

export const Message: React.FC<MessageProps> = ({ id }) => {
  const userId = useSelector(getCurrentUser);
  const { sender: senderId, text, createdAt } = useSelector((state: RootState) => getMessage(state, id));
  const sender = useSelector((state: RootState) => getUserFullName(state, senderId));

  return (
    <Box display="flex" flexDirection="column" alignItems={userId === senderId ? "flex-end" : "flex-start"} marginTop={2}>
      <Typography variant="caption">
        {`${sender} at ${createdAt.toLocaleString(undefined, { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "2-digit" })}`}
      </Typography>
      <Typography>
        {text}
      </Typography>
    </Box>
  );
};
