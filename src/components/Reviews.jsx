import ReviewContainer from "./ReviewContainer";
import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import { useParams, useSearchParams } from "react-router-dom";
import Sorter from "./Sorter";
import Error from "./Error";

function Reviews({ error, setError }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);

  const { slug } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({});

  useEffect(() => {
    setError(null);

    fetchReviews(slug, sortBy, order)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
        setSearchParams(params);
      })
      .catch((err) => {
        setError({ status: err.response.status, msg: err.response.data.msg });
      });
  }, [isLoading, slug, sortBy, order, params, setSearchParams, setError]);

  return (
    <section>
      {error ? (
        <div>
          <Error error={error} />
        </div>
      ) : (
        <div>
          {slug ? <h2>Latest {slug} reviews</h2> : <h2>Latest reviews</h2>}
          <Sorter
            setSortBy={setSortBy}
            setOrder={setOrder}
            setSearchParams={setSearchParams}
            setParams={setParams}
            params={params}
          />
          <ReviewContainer
            className="review-container"
            reviews={reviews}
            setReviews={setReviews}
            isLoading={isLoading}
            setError={setError}
          />
        </div>
      )}
    </section>
  );
}

export default Reviews;
