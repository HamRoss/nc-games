import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://northcoders-backend-project-games-api.onrender.com/api",
});

export const fetchReviews = async () => {
  const response = await gamesApi.get("/reviews");
  return response.data.reviews;
};
