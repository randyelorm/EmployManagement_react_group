import React from 'react';
import "./userlist.css"
import EachUser from '../EACHUSER/EachUser';

const UserList = ({users, deleteUser, editUser}) => {
    
    const userList = users.map(user => {
            return <EachUser user={user} deleteUser={deleteUser} editUser={editUser}/>
    })
   
    return (
        <>
            <div className="user-container">{userList}</div>
        </>
    );
}

export default UserList;
