import React from 'react';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationsRequest } from 'store/conversations/conversationActions';
import { getAllConversationIds, getConversationsLoading } from 'store/conversations/conversationSelectors';
import { ConversationPreview } from 'components/ConversationPreview';

export const MessagesPage: React.FC = () => {
  const loading = useSelector(getConversationsLoading);
  const conversationIds = useSelector(getAllConversationIds);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getConversationsRequest());
  }, [dispatch]);

  return (
    <>
      <h1>Conversations</h1>
      {
        !loading &&
        <List>
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
    </>
  );
};
