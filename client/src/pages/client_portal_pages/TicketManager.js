import React, { useState, useEffect } from 'react';
import { getTickets } from '../../utils/API';

const TicketManager = () => {
  const [ticketData, setTicketData] = useState({ tickets: {} });
  const [ticketNumber, setTicketNumber] = useState(-1);
  const ticketDataLength = Object.keys(ticketData.tickets).length;

  useEffect(() => {
    const getTicketData = async () => {
      try {
        const response = await getTickets();

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        let data = await response.json();
        setTicketData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getTicketData();
  }, [ticketDataLength]);

  if (!ticketDataLength) {
    return <h1>LOADING...</h1>
  }

  const view = (rowNum) => {
    console.log(ticketData.tickets[rowNum]);
    setTicketNumber(rowNum);
  }

  const review = () => {
    if (ticketNumber != -1) {
      return (
        <>
          <p>{ticketData.tickets[ticketNumber].title}</p>
          <p>{ticketData.tickets[ticketNumber].body}</p>
        </>
      );
    }
    return ("data");
  }

  const tableBuilder = () => {
    let rows = new Array();
    for (let i = 0; i < ticketData.tickets.length; i++) {
      if (i + 1 < ticketData.tickets.length) {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{ticketData.tickets[i].title}</td>
            <td className='ticketTableField'>{ticketData.tickets[i].from}</td>
            <td className='ticketTableField'>{ticketData.tickets[i].urgency}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{ticketData.tickets[i].body}</td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={`Row${i}`} className='ticketTableRow' id='ticketLastRow' onClick={() => view(i)}>
            <td className='ticketTableField'>{ticketData.tickets[i].title}</td>
            <td className='ticketTableField'>{ticketData.tickets[i].from}</td>
            <td className='ticketTableField'>{ticketData.tickets[i].urgency}</td>
            <td className='ticketTableField' id="ticketTableFieldEnd">{ticketData.tickets[i].body}</td>
          </tr>
        );
      }
    }

    return rows;
  }

  /* Things to add to the tickets
    * Date Added
    * Latest Date that the contact was Updated
    * Ticket Status
    *   Options to be toggled on/off
    * 
  */
  return (
    <>
      <div id='ticketTicketHolder'>
        <table className='ticketTable'>
          <thead className='ticketTableHead'>
            <tr key="tableHeadRow" className='ticketRow'>
              <td className='ticketTableField'>Title</td>
              <td className='ticketTableField'>From</td>
              <td className='ticketTableField'>Urgency</td>
              <td className='ticketTableField' id="ticketTableFieldEnd">Body</td>
            </tr>
          </thead>
          <tbody>
            {tableBuilder()}
          </tbody>
        </table>
      </div>
      <div id='ticketTicketDataView'>
        {review()}
      </div>
    </>
  )
}

export default TicketManager;