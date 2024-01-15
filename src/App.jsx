import { useState, useEffect } from 'react'
import './App.css'
import data from './data.json'
import Card from '../src/Components/Card'

function App() {

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    doFilter();
  }, [filters]);



  const doFilter = () => {
    setFilteredJobs(
      jobs.filter((job) =>
        filters.every((filter) =>
          [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
        )
      )
    );
  };

  const clear = () => {
    setFilters([]);
    setFilteredJobs(jobs);
    setAppliedFilters([]);
  }
  const handleRemoveFilter = (filterToRemove) => {
    setAppliedFilters((prevAppliedFilters) =>
      prevAppliedFilters.filter((filter) => filter !== filterToRemove)
    );
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterToRemove)
    );
    setFilteredJobs((prevFilteredJobs) => doFilter(prevFilteredJobs)); // Re-filter once
  };


  const addFilter = (filter) => {
    //here we are just saving filters inside the array
    setFilters((prevFilters) => {
      if (!prevFilters.includes(filter)) {
        return [...prevFilters, filter]; // Add filter only if it's not already present
      } else {
        return prevFilters; // Keep previous filters if it's a duplicate
      }

    });


    setAppliedFilters((prevAppliedFilters) => {
      if (!prevAppliedFilters.includes(filter)) {
        return [...prevAppliedFilters, filter]; // Add filter to appliedFilters only if it's not a duplicate
      } else {
        return prevAppliedFilters; // Keep previous appliedFilters
      }
    });
    setFilteredJobs((prevFilteredJobs) => doFilter(prevFilteredJobs));

    //doFilter(); // Trigger filtering
  };

  return (
    <main className=' font-Spartan text-bodycopy flex flex-col justify-center items-center w-[100%] '>
      <nav className='w-screen h-[100px] bg-phonebg lg:bg-desktopbg bg-cover bg-center bg-DesaturatedDarkCyan '></nav>

      {appliedFilters.length > 0 ? (
        //grid justify-self-end
        <div className='w-[100%] flex flex-start justify-between items-center'>
          <div className=' p-5 grid grid-cols-2 gap-x-[50px] gap-y-5 w-[70%] lg:w-[50%] lg:grid-cols-5 '>
            {appliedFilters.map((filter, index) => (
              <div className=' flex flex-row justify-between items-center bg-lightblue rounded-md w-[100px] lg:w-[125px]' key={index}>
                <span className='rounded-md p-1 pl-2 text-cyanbluecolor'> {filter}</span>
                <span onClick={() => handleRemoveFilter(filter)} className='rounded-tr-md rounded-br-md text-white w-[50%] bg-cyanbluecolor hover:bg-black transition-all duration-300 px-4 py-1 text-center text-lg'>X</span>
              </div>
            ))}
           
          </div>
          <div className=' p-0 m-0'>
              <button onClick={clear} className='text-gray-500 text-right min-w-0 mr-10 hover:text-cyanbluecolor hover:border-b-[1px] hover:border-cyanbluecolor transition-all duration-300 '>Clear</button>
            </div>


        </div>

      ) : null}

      {filteredJobs ? (

        // Render the map if filteredJobs is an array
        <div className='w-screen bg-lightbg flex flex-col border-4 p-5'>
          {filteredJobs.map((card) => (
            <Card key={card.id} card={card} addFilter={addFilter} />
          ))}
        </div>
      ) : (
        // Render a loading indicator or placeholder message
        <div>Loading jobs...</div>

      )}

    </main>
  )
}

export default App;
