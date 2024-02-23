import React, { useState } from "react";
import Joblist from "./components/Joblist";
import Pagination from "./components/Pagination";
import jobListData from "./data/data.json";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    contract: ""
  });
  
  const itemsPerPage = 5; // Jumlah item per halaman
  const [showFilters, setShowFilters] = useState(false); //State untuk div filter ditampilkan atau tidak

  // Fungsi untuk mengubah halaman saat pengguna mengklik tombol pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fungsi untuk menerapkan filter
  const applyFilter = (filterKey, filterValue) => {
    setFilters({
      ...filters,
      [filterKey]: filterValue
    });
    // Kembali ke halaman pertama setelah menerapkan filter
    setCurrentPage(1);
    //Div nya tampil ketika ada filter yang diterapkan
    setShowFilters(true);
  };

  // Fungsi untuk menghapus semua filter
  const clearFilters = () => {
    setFilters({
      role: "",
      level: "",
      contract: ""
    });
    setCurrentPage(1); // Kembali ke halaman pertama setelah menghapus filter
    setShowFilters(false);
  };

  // Menerapkan filter pada data pekerjaan
  const filteredJobs = jobListData.filter((job) => {
    return (
      job.role.includes(filters.role) &&
      job.level.includes(filters.level) &&
      job.contract.includes(filters.contract)
    );
  });

  // Hitung indeks item pertama dan terakhir untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const removeFilter = (filterKey) => {
    const updatedFilters = { ...filters };
    updatedFilters[filterKey] = "";
    setFilters(updatedFilters);
    setCurrentPage(1); // Kembali ke halaman pertama setelah menghapus filter
  };

  return (
    <>
      {/* Header dan konten utama */}
      <header className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop"></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          {/* Konten filter */}
        
          {showFilters && (
          <div className="w-full max-w-5xl min-h-[4rem] mb-10">
            {/* Filter */}
            <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
              <ul className="flex flex-wrap gap-4">
                {Object.entries(filters).map(([key, value]) => (
                  value && // Hanya tampilkan filter yang tidak kosong
                  <li className="flex"
                   key={key}>
                    <label  className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default" style={{ alignSelf: "center" }}>
                       {value}
                    </label>
                    
                    <div>
                      <button
                        className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
                        onClick={() => removeFilter(key)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                          <path fill="#FFF" fillRule="evenodd" 
                          d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z">
                            </path>
                            </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="text-sm text-cyan-dark font-bold underline"
                onClick={clearFilters}>
                Clear
              </button>
            </div>
          </div>
          )}

          {/* Daftar pekerjaan */}
          <div>
            <ul>
              {currentItems.map((job, id) => (
                <Joblist
                  key={id}
                  jobData={job}
                  applyFilter={applyFilter}
                />
              ))}
            </ul>
          </div>
          {/* Pagination */}
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredJobs.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
