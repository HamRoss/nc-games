import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";

function Nav() {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
      setCategoriesLoading(false);
    });
  }, []);

  console.log(categories);

  // https://reactrouter.com/en/main/components/nav-link

  return (
    <nav>
      <div className="nav-bar">
        <Link to="/reviews">
          <div className="nav-bar-box">Reviews</div>
        </Link>
        <div className="dropdown">
          <div className="dropbtn">
            Categories
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="dropdown-content">
            {categoriesLoading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category) => {
                return (
                  <Link
                    key={`link-to-${category.slug}`}
                    to={`/categories/${category.slug}/reviews`}
                  >
                    <p>{category.slug}</p>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
