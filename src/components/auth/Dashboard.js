import React from 'react'
import { getUser, removeUserSession } from './Common';

const Dashboard = (props) => {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  return (
    <>
      <section className="auth">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <h1>Welcome {user.name}!</h1>
            <input
              type="button"
              value="Logout"
              onClick={handleLogout} 
            />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
