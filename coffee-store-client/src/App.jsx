
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Component/CoffeeCard';
import { useState } from 'react';

function App() {
  const Loadcoffes = useLoaderData()
  const [coffes, setCoffees] = useState(Loadcoffes);

  return (
    <div className="p-10">
      <Link to={"addCoffee"} className="btn m-2">
        {" "}
        <button>GO to Add coffee</button>
      </Link>
      <h1 className="text-3xl text-center text-blue-500 mb-4">
        Total coffee Item: {coffes.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto">
        {coffes.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffes={coffes}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App
