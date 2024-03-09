import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ChatSecUrl } from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";

//for creating a chat room with the user
export const createNewChatRoom = createAsyncThunk( "chat/createChatRoom", async (chatRoomData : any , { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${ChatSecUrl}/room/creat-chat-room`,
        chatRoomData,
        config
      );
      return data;
    } catch (err: any) {
      const axiosError = err as AxiosError<ApiError>;
      return handleError(axiosError, rejectWithValue);
    }
  }
);
