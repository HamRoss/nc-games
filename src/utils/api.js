import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://northcoders-backend-project-games-api.onrender.com/api",
});

export const fetchReviews = async () => {
  const response = await gamesApi.get("/reviews");
  return response.data.reviews;
};

export const fetchCategories = async () => {
  const response = await gamesApi.get("/categories");
  return response.data.categories;
};

export const fetchReviewsByCategory = async (slug) => {
  const response = await gamesApi.get(`/reviews?category=${slug}`);
  return response.data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const response = await gamesApi.get(`/reviews/${review_id}`);
  return response.data.review;
};

export const fetchCommentsById = async (review_id) => {
  const response = await gamesApi.get(`/reviews/${review_id}/comments`);
  return response.data.comments;
};

export const patchReviewById = async (review_id, number) => {
  const response = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: number,
  });

  return response.data.review;
};

export const postCommentById = async (review_id, commentBody, username) => {
  const response = await gamesApi.post(`/reviews/${review_id}/comments`, {
    username: username,
    body: commentBody,
  });
  return response.data.comment;
};
