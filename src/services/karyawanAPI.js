import axios from 'axios';

const API_URL = "https://txhxqrwzwgivxvvnwpnk.supabase.co/rest/v1/karyawan";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4aHhxcnd6d2dpdnh2dm53cG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODQ5NDIsImV4cCI6MjA2NDg2MDk0Mn0.QgAyKR-P6khZsSWtG5Su1UOMPqS5piCqZ7WT5mAh4TY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const karyawanAPI = {
  async fetchAll() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },
};
