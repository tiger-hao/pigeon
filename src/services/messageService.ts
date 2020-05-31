import { normalize, NormalizedSchema } from 'normalizr';
import { dataRequestor } from './dataRequestor';
import { ApiResponse } from './ApiResponse';
import { User } from './userService';
import { messageSchema, NormalizedMessages } from './schema';

export interface Message {
  id: string;
  sender: User;
  createdAt: string;
  text: string;
}

export interface SendMessageResponse {
  message: Message;
}

export type GetMessagesResponse = NormalizedSchema<NormalizedMessages, string[]>;

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

export async function getMessages(conversationId: string): Promise<GetMessagesResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<{ messages: Message[] }>>(
    `/users/me/conversations/${conversationId}/messages`
  );

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return normalize(data.messages, [messageSchema]);
}
