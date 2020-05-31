import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getConversationsRequest } from 'store/conversations/conversationActions';

export const MessagesPage: React.FC = () => {
  const conversations = useSelector((state: RootState) => state.conversations.byId);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getConversationsRequest());
  }, [dispatch]);

  return (
    <>
      <h1>Conversations</h1>
      {
        Object.keys(conversations).map((conversationId: string) => {
          const { name, members, messages } = conversations[conversationId];
          return (
            <div style={{ marginBottom: 50 }}>
              <p>
                Id: {conversationId}
              </p>
              <p>
                Name: {name}
              </p>
              <p>
                Members: {members}
              </p>
              <p>
                Messages: {messages}
              </p>
            </div>
          );
        })
      }
    </>
  );
};
