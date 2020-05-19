import { dataRequestor } from './dataRequestor';
import { ApiResponse } from './ApiResponse';
import { Message, User } from './messageService';

export interface Conversation {
  id: string;
  name: string;
  members: User[];
  lastMessage: Message;
}

export interface NewConversation {
  name: string;
  members: string[];
}

export interface CreateConversationResponse {
  conversation: Conversation;
}

export interface GetConversationsResponse {
  conversations: Conversation[]
}

export async function createConversation(conversation: NewConversation): Promise<CreateConversationResponse> {
  const { data: { data } } = await dataRequestor.post<ApiResponse<CreateConversationResponse>>('/users/me/conversations/', conversation);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getConversations(): Promise<GetConversationsResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<GetConversationsResponse>>('/users/me/conversations');

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}
