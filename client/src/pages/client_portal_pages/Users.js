import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/API';

const Users = () => {
  const [userData, setUserData] = useState({ users: {} });
  const userDataLength = Object.keys(userData.users).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUsers();

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        let data = await response.json();
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getUserData();
  }, [userDataLength]);

  if (!userDataLength) {
    return <h1>LOADING...</h1>
  }

  const tableBuilder = () => {
    let rows = new Array();
    for (let i = 0; i < userData.users.length; i++) {
      rows.push(
        <tr>
          <td>{userData.users[i].userType}</td>
          <td>{userData.users[i].userFirstName}</td>
          <td>{userData.users[i].userLastName}</td>
          <td>{userData.users[i].userEmail}</td>
        </tr>
      );
    }

    return rows;
  }

  return (
    <>
      <div id='ticketUsersHolder'>
        <table>
          <thead>
            <tr>
              <td>Role</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {tableBuilder()}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users;