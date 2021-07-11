import React, { useState } from 'react';
import UserList from './UserList';

function App() {
  const [page, setPage] = useState(1);

  const [title, setTitle] = useState('favourite');
  return (
    <div className="max-w-xl p-5 mx-auto bg-red-100 lg:max-w-4xl md:max-w-2xl space-y-9">
      <div className="flex items-start justify-around ">
        <button
          className="px-2 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-500 transform hover:-translate-y-0.5 focus:translate-y-0"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>

        <button
          className="px-2 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-500 transform hover:-translate-y-0.5 focus:translate-y-0"
          onClick={() => setTitle('next title 2')}
        >
          Change Title
        </button>
      </div>
      <UserList page={page} title={title} />
    </div>
  );
}

export default App;
