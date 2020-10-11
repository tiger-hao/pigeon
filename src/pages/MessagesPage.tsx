import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationsRequest } from 'store/conversations/conversationActions';
import { getAllConversationIds, getConversationsById, getConversationsLoading } from 'store/conversations/conversationSelectors';
import { ConversationPreview } from 'components/ConversationPreview';
import { Conversation } from 'components/Conversation';

interface ParamTypes {
  conversationId: string;
}

export const MessagesPage: React.FC = () => {
  const { conversationId } = useParams<ParamTypes>();
  const loading = useSelector(getConversationsLoading);
  const conversationIds = useSelector(getAllConversationIds);
  const conversationsById = useSelector(getConversationsById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversationsRequest());
  }, [dispatch]);

  return (
    <Box display="flex" height="100%" overflow="hidden">
      <Box width={300} bgcolor="#ebf2f2">
        {
          !loading &&
          <List subheader={<ListSubheader>Conversations</ListSubheader>}>
            {
              conversationIds.map((conversationId: string) => (
                <ConversationPreview
                  key={conversationId}
                  id={conversationId}
                />
              ))
            }
          </List>
        }
      </Box>
      {
        conversationId && conversationsById.hasOwnProperty(conversationId) &&
        <Conversation id={conversationId} />
      }
    </Box>
  );
};
