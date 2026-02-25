import React from 'react'
import useUser  from './useUser'
import { Link } from 'react-router-dom';

export default function NewNav({onLoginBtnClick}) {
    const {user, setUser} = useUser();
  return (
    <div className='flex justify-between min-w-5xl'>
        <span>HotelBooker</span>
       {user ? (
  <div className=''>
    {user.role === 'user' && <Link to="/bookings">My Bookings</Link>}
    {user.role === 'owner' && <Link to="/manage">Manage Hotel</Link>}
    <button onClick={() => setUser(null)}>Logout</button>
  </div>
) : (
  <div>
    <button>List Your Property</button>
    <button onClick={onLoginBtnClick}>Login</button>
  </div>
)}
</div>
  )
}
