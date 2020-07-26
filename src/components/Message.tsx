import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getMessage } from 'store/messages/messageSelectors';
import { getUserFullName } from 'store/users/userSelectors';

export interface MessageProps {
  id: string;
}

export const Message: React.FC<MessageProps> = ({ id }) => {
  const { sender: senderId, text, createdAt } = useSelector((state: RootState) => getMessage(state, id));
  const sender = useSelector((state: RootState) => getUserFullName(state, senderId));

  return (
    <Box marginTop={2}>
      <Typography variant="caption">
        {sender}
      </Typography>
      <Typography>
        {text}
      </Typography>
    </Box>
  );
};
