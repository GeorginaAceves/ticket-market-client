import React, { useEffect } from "react";
import axios from "axios";
import "./auth.css";
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'

const ProfilePage = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      
      {props?.user?.username}
      <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="fotoPerfil">
            <img id="foto" src="./images/user-image.png" width={171}
              height={180}
              alt="171x180"
            />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">
              <strong>{props?.user?.username}</strong>
            </div>
            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
                <ButtonGroup vertical>
                  <Button href="/favorites">Favorites</Button>
                  <Button href="/tickets">My tickets</Button>
                  <Button href="/shoppinghistory">Shopping History</Button>
                  <DropdownButton as={ButtonGroup} title="More Options" id="bg-vertical-dropdown-1">
                    <Dropdown.Item eventKey="/messages">My messages</Dropdown.Item>
                    <Dropdown.Item eventKey="/edit">Edit profile</Dropdown.Item>
                    <Dropdown.Item eventKey="/options">My account</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
