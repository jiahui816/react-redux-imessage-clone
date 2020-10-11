import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/userSlice';
import ChatReducer from '../features/chatSlice';
export default configureStore({
  reducer: {
    user: UserReducer,
    chat: ChatReducer,
  },
});
