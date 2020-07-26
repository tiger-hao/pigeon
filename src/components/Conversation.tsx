import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Message } from 'components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesRequest } from 'store/messages/messageActions';
import { RootState } from 'store/rootReducer';
import { getConversation } from 'store/conversations/conversationSelectors';
import { getMessagesLoading } from 'store/messages/messageSelectors';
import { getUserFullNames } from 'store/users/userSelectors';

export interface ConversationProps {
  id: string;
}

export const Conversation: React.FC<ConversationProps> = ({ id }) => {
  const { name, members, messages } = useSelector((state: RootState) => getConversation(state, id));
  const memberNames = useSelector((state: RootState) => getUserFullNames(state, members));
  const loading = useSelector(getMessagesLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMessagesRequest(id));
  }, [dispatch, id]);

  const messagesListRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, []);

  return (
    <Box flexGrow={1} display="flex" flexDirection="column" height="100%">
      <Typography variant="h5">
        {name}
      </Typography>

      <Typography variant="subtitle2">
        Members: {memberNames.join(", ")}
      </Typography>

      <div ref={messagesListRef} style={{ flexGrow: 1, overflow: "auto" }}>
        {
          !loading &&
          messages.map((messageId: string) => (
            <Message
              key={messageId}
              id={messageId}
            />
          ))
        }
      </div>

      <Box>
        Type your message here.
      </Box>
    </Box>
  );
};
