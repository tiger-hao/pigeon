import { dataRequestor } from './dataRequestor';
import { Name } from 'types';
import { ApiResponse } from './ApiResponse';

export interface User {
  id: string;
  name: Name;
}

export interface Message {
  id: string;
  sender: User;
  createdAt: string;
  text: string;
}

export interface SendMessageResponse {
  message: Message;
}

export interface GetMessagesInConversationResponse {
  messages: Message[];
}

export async function sendMessage(message: string, conversationId: string): Promise<SendMessageResponse> {
  const { data: { data } } = await dataRequestor.post<ApiResponse<SendMessageResponse>>(
    `/users/me/conversations/${conversationId}/messages`,
    {
      text: message
    }
  );

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getMessagesInConversation(conversationId: string): Promise<GetMessagesInConversationResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<GetMessagesInConversationResponse>>(
    `/users/me/conversations/${conversationId}/messages`
  );

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}
