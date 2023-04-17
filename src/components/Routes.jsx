import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}

export default AppRoutes;
