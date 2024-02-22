import image1 from '../public/bg-header-desktop.svg'
import faceit from '../public/faceit.svg'
import { Joblist } from './components/Joblist';
import jobListData from './data/data.json'
import {useState} from "react";
import Pagination from './components/Pagination';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman
  const totalItems = jobListData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total halaman yang tersedia

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobListData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <header className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop" style={{background: image1}}></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          <div className="w-full max-w-5xl min-h-[4rem] mb-10">
            <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
              <ul className="flex flex-wrap gap-4">
                <li className="flex">
                  <label style={{alignSelf: 'center'}}>
                    This is Filter
                  </label>
                  <div>
                    <button className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark">
                      x
                    </button>            
                  </div>
                </li>
              </ul>
              <button
                className="text-sm text-cyan-dark font-bold underline"
              >
                Clear
              </button>
            </div>
          </div>
          <div>
            <ul>
              {currentItems.map((job, id) => (
                <Joblist 
                  key={id}
                  jobData={job}
                />
              ))}
            </ul>
          </div>
          
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
