import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Rolodex from './Rolodex';
import TicketManager from './TicketManager';
import Users from './Users';
import logo from '../../assets/img/AnSerLogo-480w.png';

const Index = (data) => {
  return (
    <>
      <div className="ticketHolder">
        <div className="ticketNavbarHolder">
          <nav className="ticketNavbar">
            <ul className="ticketMenuHolder">
              <li className="ticketMenuItems" onClick={() => { window.location.href = '/Dashboard' }}>Dashboard</li>
              <li className="ticketMenuItems" onClick={() => { window.location.href = '/Tickets' }}>Tickets</li>
              <li className="ticketMenuItems" onClick={() => { window.location.href = '/Rolodex' }}>Rolodex</li>
              <li className="ticketMenuItems" onClick={() => { window.location.href = '/Calendar' }}>Calendar</li>
              <li className="ticketMenuItems" onClick={() => { window.location.href = '/ManageUsers' }}>Manage Users</li>
              <li className="ticketMenuItems" id="ticketingLogOut" onClick={() => { window.location.href = '/' }}>Log Out</li>
            </ul>
          </nav>
        </div>
        <div className="ticketContentHolder">
          <div className="ticketHeader">
            <img src={logo} className="ticketHeaderContentImage" />
            <p>Where ticketing software meets answering solutions</p>
          </div>
          <div className="ticketContent">
            {
              {
                'Calendar': <Calendar />,
                'Index': <Dashboard />,
                'TicketManager': <TicketManager />,
                'Rolodex': <Rolodex />,
                'Users': <Users />
              }[data.page]
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Index;