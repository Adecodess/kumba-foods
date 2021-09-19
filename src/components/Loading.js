import React from 'react';

const Loading = () => {
  return (
    <div>
      <div className=' flex justify-center items-center mt-40'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    </div>
  );
};

export default Loading;
