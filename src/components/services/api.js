import axios from "axios";
// const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "U2sUQWLDlbRAPe2hqY8Qdh-SHwRVNbdwy2ZZXuE7Ktg";
export const fetchImages = async (query, page, options = {}) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: 12,
      },
      signal: options.signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// const response = await axios.get(`https://api.unsplash.com/search/photos`);
