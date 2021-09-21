import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import { NavLink } from 'react-router-dom';
const defaultImage =
  'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg';

const baseURL = 'https://indapi.kumba.io/webdev/assignment';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [like, setLike] = useState([]);
  const [disLike, setDisLike] = useState([]);

  // fetch data from the api
  const fetchProfile = async () => {
    setLoading(true);

    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      // assign the data to the state
      const person = data.user;
      // assign the likes to the state
      setLike(person.likes);
      // assign the dislikes to the state
      setDisLike(person.dislikes);

      setLoading(false);
      setProfile(person);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <h1 className='capitalize text-center font-bold text-2xl mt-10'>
        customer profile
      </h1>
      <main className='container mx-auto mt-4'>
        <section className='md:flex no-wrap md:-mx-2'>
          {/* left side  */}
          <div className='w-full md:w-3/12 md:mx-2'>
            {/* profile card */}
            <aside className='bg-white p-3 border-t-4 border-green-400'>
              <div className='image overflow-hidden'>
                <img
                  src={(profile && profile.image) || defaultImage}
                  alt='profile'
                  className='w-full mx-auto h-auto'
                />
              </div>
            </aside>
            <h1 className='text-gray-900 font-bold text-xl leading-8 my-1'>
              {profile.name}
            </h1>
            <p className='text-2xl text-gray-500 hover:text-gray-600 leading-6'>
              {profile.about}
            </p>
            {/* right side  */}
          </div>
          <aside className='w-full md:w-9/12 mx-2 h-64'>
            {/* profile table */}
            {/* about section */}
            <div className='bg-white p-3 shadow-sm rounded-sm'>
              <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
                <span className='text-green-500'>
                  <svg
                    className='h-5 '
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    {' '}
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </span>
                <span className='tracking-wide'>About</span>
              </div>
              {/* name */}
              <article className='text-gray-700'>
                <div className='grid md:grid-cols-2 text-sm'>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Name</div>
                    <div className='px-4 py-2'>{profile.name}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Id</div>
                    <div className='px-4 py-2'>{profile.id}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Address</div>
                    <div className='px-4 py-2'>{profile.address}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Contact No.</div>
                    <div className='px-4 py-2'>{profile.phone}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Likes</div>
                    <div className='px-4 py-2'>{like[0]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Likes</div>
                    <div className='px-4 py-2'>{like[1]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold'>Likes</div>
                    <div className='px-4 py-2'>{like[2]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold capitalize'>
                      Dislikes
                    </div>
                    <div className='px-4 py-2'>{disLike[0]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold capitalize'>
                      Dislikes
                    </div>
                    <div className='px-4 py-2'>{disLike[1]}</div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 py-2 font-semibold capitalize'>
                      Dislikes
                    </div>
                    <div className='px-4 py-2'>{disLike[2]}</div>
                  </div>
                </div>
              </article>
              <NavLink
                to='/order'
                className='      block
              w-full
                  text-blue-800 text-sm
                  font-semibold
                  rounded-lg
                  hover:bg-gray-100
                  focus:outline-none focus:shadow-outline focus:bg-gray-100
                  hover:shadow-xs
                  p-3
                  my-4 text-center'>
                Order
              </NavLink>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Profile;
