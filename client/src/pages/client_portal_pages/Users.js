import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/API';

const Users = () => {
  const [userData, setUserData] = useState({ users: {} });
  const [userNumber, setUserNumber] = useState(-1);
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

  const view = (rowNum) => {
    console.log(userData.users[rowNum]);
    setUserNumber(rowNum);
  }

  const review = () => {
    if (userNumber != -1) {
      return (
        <>
          <p>{userData.users[userNumber].userFirstName} {userData.users[userNumber].userLastName}</p>
          <p>{userData.users[userNumber].userType}</p>
        </>
      );
    }
    return ("data");
  }

  const tableBuilder = () => {
    let rows = new Array();
    for (let i = 0; i < userData.users.length; i++) {
      if (i+1 < userData.users.length) {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{userData.users[i].userType}</td>
            <td className='ticketTableField'>{userData.users[i].userFirstName}</td>
            <td className='ticketTableField'>{userData.users[i].userLastName}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{userData.users[i].userEmail}</td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' id='ticketLastRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{userData.users[i].userType}</td>
            <td className='ticketTableField'>{userData.users[i].userFirstName}</td>
            <td className='ticketTableField'>{userData.users[i].userLastName}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{userData.users[i].userEmail}</td>
          </tr>
        );
      }
    }

    return rows;
  }

  /* Things to add for the Manage User as options
    * Date Added
    * Latest Date that the contact was Updated
    *   Options to be toggled on/off
    * Office Phone Number w/ Extension
    * Title (position at company)
    * Company (company that the user belongs)
  */
  return (
    <>
      <div id='ticketUsersHolder'>
        <table className='ticketTable'>
          <thead className='ticketTableHead'>
            <tr key="tableHeadRow" className='ticketTableHeadRow'>
              <td className='ticketTableField'>Role</td>
              <td className='ticketTableField'>First Name</td>
              <td className='ticketTableField'>Last Name</td>
              <td className='ticketTableField' id="ticketTableFieldEnd">Email</td>
            </tr>
          </thead>
          <tbody>
            {tableBuilder()}
          </tbody>
        </table>
      </div>
      <div id='ticketUsersDataView'>
        {review()}
      </div>
    </>
  )
}

export default Users;