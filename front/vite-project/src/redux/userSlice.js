/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { login: false },
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    setUserDataReduce: (initialState, action) => {
      initialState.userData = action.payload;
    },
    setUserAppointmentsReduce: (initialState, action) => {
      initialState.userAppointments = action.payload;
    },
    setAppointmentsCancelReduce: (initialState, action) => {
      initialState.userAppointments = initialState.userAppointments.map(
        (appointment) =>
          appointment.id === action.payload
            ? { ...appointment, status: "cancelled" }
            : appointment
      );
    },
  },
});

export const {
  setUserDataReduce,
  setUserAppointmentsReduce,
  setAppointmentsCancelReduce,
} = userSlice.actions;

export default userSlice.reducer;
