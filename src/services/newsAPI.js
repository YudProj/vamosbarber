import axios from "axios";

const SUPABASE_URL = "https://your-project.supabase.co/rest/v1/news";
const API_KEY = "your-api-key";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const newsAPI = {
  createNews: async (newsData) => {
    try {
      const response = await axios.post(SUPABASE_URL, newsData, { headers });
      return response.data;
    } catch (error) {
      console.error("Error create news:", error.response?.data || error.message);
      throw error;
    }
  },
};
