import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { Message } from 'components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesRequest, sendMessage } from 'store/messages/messageActions';
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

  useEffect(() => {
    dispatch(getMessagesRequest(id));
  }, [dispatch, id]);

  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);

  const [message, setMessage] = useState("");

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message) {
      dispatch(sendMessage(message, id));
      setMessage("");
    }
  };

  return (
    <Box flexGrow={1} display="flex" flexDirection="column" height="100%" paddingX={2}>
      <Box paddingY={2}>
        <Typography variant="h5">
          {name}
        </Typography>

        <Typography variant="subtitle2">
          Members: {memberNames.join(", ")}
        </Typography>
      </Box>

      <Box {...{ ref: messagesListRef }} flexGrow={1} overflow="auto" paddingX={2} marginX={-2}>
        {
          !loading &&
          messages.map((messageId: string) => (
            <Message
              key={messageId}
              id={messageId}
            />
          ))
        }
      </Box>

      <form onSubmit={onSendMessage}>
        <Box display="flex" padding={1}>
          <Input style={{ flexGrow: 1 }} placeholder="Send a message" value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          />
          <IconButton
            type="submit"
            disabled={!message}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};
