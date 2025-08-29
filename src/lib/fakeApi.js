// src/api/fakeApi.js
import fakeData from "../Data/fakeData.json";

export const fetchAdminData = (adminId) =>
  Promise.resolve(fakeData.adminData[adminId]);

export const fetchMerchantData = (merchantId) =>
  Promise.resolve(fakeData.merchantData[merchantId]);

export const fetchMemberData = (memberId) =>
  Promise.resolve(fakeData.memberData[memberId]);
