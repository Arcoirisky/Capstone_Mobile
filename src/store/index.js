import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';

import profileReducer from '@/store/profileSlice';
import storeReducer from '@/store/storeSlice';
import eventReducer from '@/store/eventSlice';
import kpiReducer from '@/store/kpiSlice';
import sessionReducer from '@/store/session';

export default configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    store: storeReducer,
    event: eventReducer,
    session: sessionReducer,
    kpi: kpiReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
