import { normalize, NormalizedSchema } from 'normalizr';
import { dataRequestor } from './dataRequestor';
import { ApiResponse } from './ApiResponse';
import { Message } from './messageService';
import { User } from './userService';
import { conversationSchema, NormalizedConversations } from './schema';

export interface Conversation {
  id: string;
  name: string;
  members: User[];
  lastMessage: Message;
}

export interface NewConversation {
  members: string[];
  name?: string;
}

export type CreateConversationResponse = NormalizedSchema<NormalizedConversations, string>;
export type GetConversationsResponse = NormalizedSchema<NormalizedConversations, string[]>;

export async function createConversation(conversation: NewConversation): Promise<CreateConversationResponse> {
  const { data: { data } } = await dataRequestor.post<ApiResponse<{ conversation: Conversation; }>>('/users/me/conversations/', conversation);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return normalize(data.conversation, conversationSchema);
}

export async function getConversations(): Promise<GetConversationsResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<{ conversations: Conversation[] }>>('/users/me/conversations');

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return normalize(data.conversations, [conversationSchema]);
}
