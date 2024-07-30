import React from 'react';
import ProfileInfo from '../../components/Cards/ProfileInfo';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow-sm'>
      <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

      <ProfileInfo />
      </div>
    
  )
}

export default Home
