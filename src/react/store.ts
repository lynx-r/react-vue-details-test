import { configureStore } from "@reduxjs/toolkit";
import { adminSliceReducer } from "./modules/admin/store/createReduxStore";

export default configureStore({
  reducer: {
    admin: adminSliceReducer,
  },
});
