import { Link } from "react-router-dom";

function Nav() {
  // https://reactrouter.com/en/main/components/nav-link

  return (
    <nav className="nav-bar">
      <ul>
        <Link to="/reviews">
          <li className="nav-bar-box">Reviews</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
