import React from "react";
import './UsersList.css';
import UserItem from "./UserItem";
import Card from "../../shared/components/uicomponents/Card";
const UsersList = props =>{

    if(props.items.length === 0)
    {
        return(
            <div>
                <Card>
                <h2 className="center">No Users Found.</h2>
                </Card>
            </div>
        )
    }
    return (
        <ul className="users-list">
            {props.items.map(user =>(
                <UserItem
                  key={user.id}
                  id = {user.id}
                  image = {user.image}
                  name = {user.name}
                  placeCount = {user.places}
                />  
            ))}
        </ul>
    )
}

export default UsersList;