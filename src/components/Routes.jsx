import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";
import SingleReview from "./SingleReview";
import SingleCategory from "./SingleCategory";

function AppRoutes({ user }) {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/reviews" element={<Reviews />} />
      <Route
        path="/reviews/:review_id"
        element={<SingleReview user={user} />}
      />
      <Route path="/categories/:slug/reviews" element={<SingleCategory />} />
    </Routes>
  );
}

export default AppRoutes;
