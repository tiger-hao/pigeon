import { AxiosError } from "axios";

interface IErrorResponse {
  status: "fail" | "error";
  data: { [key: string]: string };
  message: string;
}

export function parseError(error: AxiosError<IErrorResponse>): string {
  let errorMessage: string = error.message || "Something went wrong.";

  // get the actual API response if there's an API error
  if (error.response) {
    const { status, data, message } = error.response.data;

    errorMessage = status === "fail" ? JSON.stringify(data) : message;
  }

  return errorMessage;
}
