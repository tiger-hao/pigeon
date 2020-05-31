import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { profileReducer } from './profile/profileReducer';
import { conversationReducer } from './conversations/conversationReducer';
import { messageReducer } from './messages/messageReducer';
import { userReducer } from './users/userReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  conversations: conversationReducer,
  messages: messageReducer,
  users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
