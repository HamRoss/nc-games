import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";
import SingleReview from "./SingleReview";
import PageNotFound from "./PageNotFound";
import Home from "./Home";
import { useState } from "react";

function AppRoutes({ user }) {
  const [error, setError] = useState(null);

  console.log(error);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/reviews"
        element={<Reviews error={error} setError={setError} />}
      />
      <Route
        path="/reviews/:review_id"
        element={<SingleReview user={user} error={error} setError={setError} />}
      />
      <Route
        path="/categories/:slug/reviews"
        element={<Reviews error={error} setError={setError} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
