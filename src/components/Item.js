import React from 'react';

const Item = ({ items }) => {
  return (
    <>
      <main className='h-screen flex items-center justify-center mt-10   '>
        <div className='container '>
          <table className='text-left w-full  mt-60'>
            <thead className='bg-black flex text-white w-full'>
              <tr className='flex w-full mb-4'>
                <th className='p-4 w-1/4 capitalize'>name</th>
                <th className='p-4 w-1/4 capitalize'>category</th>
                <th className='p-4 w-1/4 capitalize'>price</th>
                <th className='p-4 w-1/4 capitalize'>currency</th>
                <th className='p-4 w-1/4 capitalize'>tax_pct</th>
                <th className='p-4 w-1/4 capitalize'>quantity</th>
              </tr>
            </thead>

            <tbody
              className='bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full'
              style={{ height: '50vh' }}>
              {/* iterate over the data from the api and destructure them*/}
              {items.map((item, index) => {
                const { name, category, price, currency, tax_pct, quantity } =
                  item;
                return (
                  <tr key={index} className='flex w-full mb-4'>
                    <td className='p-4 w-1/4'>{name}</td>
                    <td className='p-4 w-1/4'>{category}</td>
                    <td className='p-4 w-1/4'>{price}</td>
                    <td className='p-4 w-1/4'>{currency}</td>
                    <td className='p-4 w-1/4'>{tax_pct}</td>
                    <td className='p-4 w-1/4'>{quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Item;
