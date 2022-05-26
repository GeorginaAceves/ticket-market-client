import React, { useEffect } from "react";
import axios from "axios";

const ProfilePage = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      Profile Page
      {props?.user?.username}
      <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src="./images/user-image.png" alt="profile card" />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">
              <strong >{props?.user?.username}</strong>
            </div>

            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
          <ul className="list-unstyled">

              <li>
              <a href="/favorites">Favorites</a>
              </li>

              <li>
              <a href="/tickets">My tickets</a>
              </li>

              <li>
              <a href="/shoppinghistory">Shopping History</a>
              </li>

            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
