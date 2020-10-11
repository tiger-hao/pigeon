import { schema } from 'normalizr';
import { Conversation } from './conversationService';
import { Message } from './messageService';
import { User } from './userService';

export interface NormalizedMessage {
  id: Message['id'];
  sender: string;
  createdAt: Date;
  text: Message['text'];
}

export interface NormalizedMessages {
  messages: {
    [key: string]: NormalizedMessage;
  };
  users: {
    [key: string]: User
  };
}

export interface NormalizedConversation {
  id: Conversation['id'];
  name: Conversation['name'];
  members: string[];
  lastMessage: string;
}

export interface NormalizedConversations {
  conversations: {
    [key: string]: NormalizedConversation;
  };
  messages: {
    [key: string]: NormalizedMessage;
  };
  users: {
    [key: string]: User;
  };
}

export const userSchema = new schema.Entity<User>('users');

export const messageSchema = new schema.Entity<Message>('messages',
  {
    sender: userSchema
  },
  {
    processStrategy: (entity) => ({
      ...entity,
      createdAt: new Date(entity.createdAt)
    })
  }
);

export const conversationSchema = new schema.Entity<Conversation>('conversations', {
  members: [userSchema],
  lastMessage: messageSchema
});
