import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getConversation } from 'store/conversations/conversationSelectors';
import { getMessage } from 'store/messages/messageSelectors';
import { getUserFullName } from 'store/users/userSelectors';

export interface ConversationPreviewProps {
  id: string;
}

export const ConversationPreview: React.FC<ConversationPreviewProps> = ({ id }) => {
  const { name, messages } = useSelector((state: RootState) => getConversation(state, id));
  const lastMessageId = messages[messages.length - 1];
  const lastMessage = useSelector((state: RootState) => getMessage(state, lastMessageId));
  const senderId = lastMessage && lastMessage.sender;
  const sender = useSelector((state: RootState) => getUserFullName(state, senderId));

  return (
    <ListItem button component={Link} to={`${Routes.MESSAGES}/${id}`}>
      <ListItemText
        primary={name}
        secondary={lastMessage ? `${sender}: ${lastMessage.text}` : ''}
      />
    </ListItem>
  );
};
