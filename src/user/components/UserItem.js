import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Card from "../../shared/components/uicomponents/Card";
import Avatar from "../../shared/components/uicomponents/Avatar";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image"></div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.placeDescription}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
