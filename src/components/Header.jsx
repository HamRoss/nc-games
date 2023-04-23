import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/api";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {
  const { username, name, avatar_url } = user;
  const [allUsers, setAllUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsersLoading(false);
      setAllUsers(users);
    });
  }, []);

  function handleUserChange(event) {
    const userArray = event.target.value.split(",");
    const userObject = {};
    userObject.username = userArray[0];
    userObject.name = userArray[1];
    userObject.avatar_url = userArray[2];
    setUser(userObject);
  }

  const bothNames = name.split(" ");
  const firstName = bothNames[0];

  return (
    <div>
      <div className="home-button">
        <Link to="/">
          <div>
            <h2>ReviewBG</h2>
          </div>
        </Link>
      </div>
      <div>
        Welcome {firstName}
        Signed in as: {username}
        <img className="avatar" src={avatar_url} alt={`${username}'s avatar`} />
      </div>
      <div>
        {usersLoading ? (
          <p>loading...</p>
        ) : (
          <div>
            <label htmlFor="user-chooser">Choose user:</label>

            <select
              onChange={handleUserChange}
              name="user-chooser"
              id="user-chooser"
            >
              {allUsers.map((newUser) => {
                return (
                  <option
                    key={newUser.username}
                    value={`${newUser.username},${newUser.name},${newUser.avatar_url}`}
                  >
                    {newUser.username}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
