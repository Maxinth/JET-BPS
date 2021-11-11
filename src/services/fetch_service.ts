import axios from "axios";
import { authHeader } from "./auth_service";
import { User } from '../interfaces';


const API_URL = "http://localhost:3001";

export const getUser = () => {
  axios
    .get(API_URL + "/users", {
      headers: authHeader(),
    })
    .then((res) => {
      return res.data;
    });
};
export const fetchSubsidyData = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/subsidy?userId=${id}`, {
    headers: authHeader(),
  })
  return data
}
export const fetchVoucherData = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/vouchers?userId=${id}`, {
    headers: authHeader(),
  })
  return data
}
export const fetchDashboardData = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/transactions?userId=${id}`, {
    headers: authHeader(),
  })
  return data
}
export const fetchWalletData = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/wallets?userId=${id}`, {
    headers: authHeader(),
  })
  return data
}