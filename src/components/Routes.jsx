import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";
import SingleReview from "./SingleReview";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/reviews/:review_id" element={<SingleReview />} />
    </Routes>
  );
}

export default AppRoutes;
