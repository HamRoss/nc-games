import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to ReviewBG!</h2>
      <h3>
        Find your next favourite game with our community reviews and ratings
      </h3>
      <p>
        Read all latest reviews from the wonderful world of tabletop gaming, and
        vote and comment on the reviews you find most helpful.
      </p>
      <h3>Join the community</h3>
      <p>
        Share your thoughts with other tabletop gamers. ReviewBG doesn't have
        password-protected user profiles just yet, but you can choose your
        favourite character from the profile selector up top.
      </p>
      <h3>Get started</h3>
      <p>What are you waiting for?</p>
      <Link to="/reviews">
        <button>Browse latest reviews</button>
      </Link>
    </div>
  );
}

export default Home;
