import React, { useState, useEffect } from 'react';
import Profile from './Profile';

import Loading from './Loading';
import { NavLink } from 'react-router-dom';
import Item from './Item';

const baseURL = 'https://indapi.kumba.io/webdev/assignment';

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [details, setDetails] = useState([]);
  const [items, setItems] = useState([]);

  // fetch data from the api
  const fetchOrders = async () => {
    setLoading(true);

    try {
      const response = await fetch(baseURL);
      // assign the response to the data variable
      const data = await response.json();

      // assign the data to person variable
      const person = data;

      setLoading(false);
      // assign the person variable to a state to get the restaurant information
      setDetails(person.restaurant);
      // assign the person variable to a state to get the items information
      setItems(person.items);
      // assign the person variable to a state to get the order ID
      setOrder(person);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
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
        restaurant details
      </h1>
      <section className='container mx-auto my-5 p-5 '>
        <aside className='w-full md:w-9/12 mx-2 h-64 mx-auto '>
          <div className='bg-white m-10 shadow-sm rounded-sm mx-auto'>
            <div className='text-gray-700'>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>
                  order id
                </div>
                <div className='px-4 py-2'>{order.order_id}</div>
              </article>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>
                  restaurant name
                </div>
                <div className='px-4 py-2'>{details.name}</div>
              </article>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>street</div>
                <div className='px-4 py-2'>{details.street}</div>
              </article>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>city</div>
                <div className='px-4 py-2'>{details.city}</div>
              </article>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>state</div>
                <div className='px-4 py-2'>{details.state}</div>
              </article>
              <article className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold capitalize'>
                  zipcode
                </div>
                <div className='px-4 py-2'>{details.zipcode}</div>
              </article>
            </div>
          </div>
        </aside>
      </section>
      <Profile />
      <main>
        {/* pass the state variable as a prop */}
        <Item items={items} />
      </main>
      <NavLink
        to='/'
        className='block
                  w-full
                  text-blue-800 text-sm
                  font-semibold
                  rounded-lg
                  hover:bg-gray-100
                  focus:outline-none focus:shadow-outline focus:bg-gray-100
                  hover:shadow-xs
                  p-3
                  my-4 text-center capitalize'>
        back to profile
      </NavLink>
      s
    </div>
  );
};

export default Order;
