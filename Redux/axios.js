import { createAsyncThunk } from "@reduxjs/toolkit";

import {axiosInstance} from "./AxiosInstance";




export const FetchData = createAsyncThunk(
    'GET/DATA',
    async ()=>{
        const res = await axiosInstance.get("/65b3a22c01d900e96c4219ae")
        return res.data
    }
)


