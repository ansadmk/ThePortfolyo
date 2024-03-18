"use client";
import { createSlice } from "@reduxjs/toolkit";
import { FetchData } from "./axios";
import { youtube } from "./selectors";


const slice = createSlice({
  name: "user",
  initialState: {
  userAbout:{},
  services:[],
  Projects:[],
  skills:[],
  timeline:[],
  testimonials:[],
  email:'',
  youtube:[],
social_handles:[]

  },
  extraReducers: (builder) => {
    builder
      
      .addCase(FetchData.fulfilled, (state, action) => {
        console.log(action.payload.user.about)
        state.userAbout = action.payload.user.about
        state.services = action.payload.user.services
        state.Projects = action.payload.user.projects
        state.skills = action.payload.user.skills
        state.timeline = action.payload.user.timeline
        state.testimonials = action.payload.user.testimonials
        state.email = action.payload.user.email
        state.youtube = action.payload.user.youtube
        state.social_handles= action.payload.user.social_handles







      })
     
      
      
  },
});

export default slice.reducer;
