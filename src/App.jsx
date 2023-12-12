import React , { useState } from 'react';
import './App.css';
import List from './components/List';
import Data from './components/Data';

function App() {

  const [people, setPeople] = useState(Data);

  return (
      <div className="App bg-[#3b6879] w-screen h-screen">
        <div className='container mx-auto'>
        <h1 className="text-5xl font-bold underline text-[#8cc5bb] h-40 flex items-center justify-center">Birthday Reminder</h1>

        <div className="w-[800px] h-[400px] p-4 bg-gray-300 border border-gray-700 rounded-lg shadow sm:p-8 absolute left-[20%] top-[27%]">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 underline decoration-double">{people.length} Recent Birthdays</h5>
        </div>

        <List people={people}/>

          <button onClick={() => setPeople([])} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 flex items-center justify-center">Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
