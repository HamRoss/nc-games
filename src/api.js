import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://northcoders-backend-project-games-api.onrender.com/api",
});

export const fetchReviews = async () => {
  const response = await gamesApi.get("/reviews");
  return response.data.reviews;
};

export const fetchReview = async (review_id) => {
  const response = await gamesApi.get(`/reviews/${review_id}`);
  return response.data.review;
};

export const fetchComments = async (review_id) => {
  const response = await gamesApi.get(`/reviews/${review_id}/comments`);
  return response.data.comments;
};
