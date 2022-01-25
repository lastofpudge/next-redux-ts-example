import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user.types";

const userState: User = {
  name: "John Doe",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
