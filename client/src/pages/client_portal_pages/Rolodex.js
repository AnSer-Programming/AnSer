import React, { useState, useEffect } from 'react';
import { getRolodex } from '../../utils/API';

const Rolodex = () => {
  const [rolodexData, setRolodexData] = useState({ contacts: {} });
  const [contactNumber, setContactNumber] = useState(-1);
  const rolodexDataLength = Object.keys(rolodexData.contacts).length;

  useEffect(() => {
    const getRolodexData = async () => {
      try {
        const response = await getRolodex();

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        let data = await response.json();
        setRolodexData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getRolodexData();
  }, [rolodexDataLength]);

  if (!rolodexDataLength) {
    return <h1>LOADING...</h1>
  }

  const view = (rowNum) => {
    console.log(rolodexData.contacts[rowNum]);
    setContactNumber(rowNum);
  }

  const review = () => {
    if (contactNumber != -1) {
      return (
        <>
          <p>{rolodexData.contacts[contactNumber].firstName} {rolodexData.contacts[contactNumber].lastName}</p>
          <p>{rolodexData.contacts[contactNumber].email} {rolodexData.contacts[contactNumber].phone}</p>
        </>
      );
    }
    return ("data");
  }

  const tableBuilder = () => {
    let rows = new Array();
    for (let i = 0; i < rolodexData.contacts.length; i++) {
      if (i + 1 < rolodexData.contacts.length) {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{rolodexData.contacts[i].firstName}</td>
            <td className='ticketTableField'>{rolodexData.contacts[i].lastName}</td>
            <td className='ticketTableField'>{rolodexData.contacts[i].email}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{rolodexData.contacts[i].phone}</td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' id='ticketLastRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{rolodexData.contacts[i].firstName}</td>
            <td className='ticketTableField'>{rolodexData.contacts[i].lastName}</td>
            <td className='ticketTableField'>{rolodexData.contacts[i].email}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{rolodexData.contacts[i].phone}</td>
          </tr>
        );

      }
    }

    return rows;
  }

  /* Things to add for the rolodex as options
    * Date Added
    * Latest Date that the contact was Updated
    *   Options to be toggled on/off
    * Contacts Address
    * Title (position at company)
    * Company (company that the contact belongs to)
    * Company Addess
  */
  return (
    <>
      <div id='ticketRolodexHolder'>
        <table className='ticketTable'>
          <thead className='ticketTableHead'>
            <tr key="tableHeadRow">
              <td className='ticketTableField'>First Name</td>
              <td className='ticketTableField'>Last Name</td>
              <td className='ticketTableField'>Email</td>
              <td className='ticketTableField' id="ticketTableFieldEnd">Phone Number</td>
            </tr>
          </thead>
          <tbody>
            {tableBuilder()}
          </tbody>
        </table>
      </div>
      <div id='ticketRolodexDataView'>
        {review()}
      </div>
    </>
  )
}

export default Rolodex;