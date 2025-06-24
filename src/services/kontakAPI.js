import axios from "axios";

const SUPABASE_URL = "https://cltctbqsqxfdtntmmpeh.supabase.co/rest/v1/kontak";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdGN0YnFzcXhmZHRudG1tcGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MTAwMzQsImV4cCI6MjA2NDQ4NjAzNH0.AyssSfEh0o7oUQa7bPIBM8f-gYi3q_ia7QLSXNHtF20";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const kontakAPI = {
  createKontak: async (kontakData) => {
    try {
      const response = await axios.post(SUPABASE_URL, kontakData, { headers });
      return response.data;
    } catch (error) {
      console.error("Error creating kontak:", error.response?.data || error.message);
      throw error;
    }
  },
};
