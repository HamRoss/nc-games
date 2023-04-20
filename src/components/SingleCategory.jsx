import { useParams } from "react-router-dom";
import ReviewContainer from "./ReviewContainer";
import { useState, useEffect } from "react";
import { fetchReviewsByCategory } from "../utils/api";

function SingleCategory() {
  const { slug } = useParams();
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [singleCategoryLoading, setSingleCategoryLoading] = useState(true);

  useEffect(() => {
    fetchReviewsByCategory(slug).then((reviews) => {
      setCategoryReviews(reviews);
      setSingleCategoryLoading(false);
    });
  }, [slug]);

  return (
    <section>
      <h2>Latest {slug} reviews</h2>
      <ReviewContainer
        reviews={categoryReviews}
        setReviews={setCategoryReviews}
        isLoading={singleCategoryLoading}
      />
    </section>
  );
}

export default SingleCategory;
