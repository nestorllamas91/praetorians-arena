import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/slices/users';

export default configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState: {
    user: {
      data: null,
      isAuthenticated: false
    }
  }
});
