import { store } from "./store";

const TOKEN_KEY = "token";

export function getPersistedToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (err) {
    return null;
  }
}

export function persistToken(): void {
  const token = store.getState().auth.token;

  try {
    const prevToken = getPersistedToken();

    if (token && token !== prevToken) {
      localStorage.setItem(TOKEN_KEY, token);
    } else if (!token && prevToken !== null) {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch (err) {
    console.log("Could not persist auth token");
  }
}
