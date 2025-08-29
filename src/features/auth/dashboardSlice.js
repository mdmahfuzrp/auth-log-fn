// src/features/dashboard/dashboardSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAdminData,
  fetchMemberData,
  fetchMerchantData,
} from "../../lib/fakeApi";

export const loadAdminData = createAsyncThunk(
  "dashboard/loadAdminData",
  async (adminId) => {
    const data = await fetchAdminData(adminId);
    return data;
  }
);

export const loadMerchantData = createAsyncThunk(
  "dashboard/loadMerchantData",
  async (merchantId) => {
    const data = await fetchMerchantData(merchantId);
    return data;
  }
);

export const loadMemberData = createAsyncThunk(
  "dashboard/loadMemberData",
  async (memberId) => {
    const data = await fetchMemberData(memberId);
    return data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    admin: null,
    merchant: null,
    member: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Admin
      .addCase(loadAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(loadAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Merchant
      .addCase(loadMerchantData.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMerchantData.fulfilled, (state, action) => {
        state.loading = false;
        state.merchant = action.payload;
      })
      .addCase(loadMerchantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Member
      .addCase(loadMemberData.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMemberData.fulfilled, (state, action) => {
        state.loading = false;
        state.member = action.payload;
      })
      .addCase(loadMemberData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
