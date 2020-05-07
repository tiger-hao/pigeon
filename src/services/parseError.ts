import { AxiosError } from 'axios';
import { ApiResponse } from './ApiResponse';

type ErrorResponse = ApiResponse<{ [key: string]: string }>;

export function parseError(error: AxiosError<ErrorResponse>): string {
  let errorMessage: string = error.message || "Something went wrong.";

  // get the actual API response if there's an API error
  if (error.response) {
    const { data, message } = error.response.data;

    if (data) {
      errorMessage = JSON.stringify(data);
    } else if (message) {
      errorMessage = message;
    }
  }

  return errorMessage;
}
