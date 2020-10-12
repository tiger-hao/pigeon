import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { normalize } from 'normalizr';
import { messageSchema, NormalizedMessage, NormalizedMessages } from 'services/schema';
import { Message } from 'services/messageService';

interface MessageEvent {
  message: Message;
  conversationId: string;
}

export interface NewMessage {
  message: NormalizedMessage;
  conversationId: string;
}

export function connectSocket() {
  return io(process.env.REACT_APP_API_BASE_URL as string);
}

export function createSocketChannel(socket: SocketIOClient.Socket, event: string) {
  return eventChannel<NewMessage>(emit => {
    socket.on(event, ({ message, conversationId }: MessageEvent) => {
      const {
        entities: {
          messages
        },
        result: messageId
      } = normalize<typeof messageSchema, NormalizedMessages, string>(message, messageSchema);

      emit({
        message: messages[messageId],
        conversationId
      });
    });

    return () => {
      socket.off(event);
    };
  });
}
