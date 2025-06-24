import axios from "axios";

// Ganti dengan nilai dari Supabase milikmu
const SUPABASE_URL = "https://cltctbqsqxfdtntmmpeh.supabase.co/rest/v1/bookings";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdGN0YnFzcXhmZHRudG1tcGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MTAwMzQsImV4cCI6MjA2NDQ4NjAzNH0.AyssSfEh0o7oUQa7bPIBM8f-gYi3q_ia7QLSXNHtF20"; // Ganti dengan API Key Supabase kamu

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const bookingAPI = {
  createBooking: async (bookingData) => {
    const response = await axios.post(
      `${SUPABASE_URL}/rest/v1/bookings`,
      bookingData,
      { headers }
    );
    return response.data;
  },
};
