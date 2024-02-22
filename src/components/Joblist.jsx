import React from "react";

export const Joblist = ({jobData}) => {
    return ( 
        <li className={`relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6`}>
    <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
      <img src={jobData.logo} alt={'image'} className="rounded-full w-full" />
    </div>
    <div className="w-full lg:flex justify-between items-center">
      <div>
        <div>
          <span className= "text-sm text-cyan-dark font-bold">
            {jobData.company}
          </span>
          {jobData.new && (
            <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
              NEW!
            </span>
          )}
            
            {jobData.featured &&( 
                <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                  FEATURED
                </span>
            )}
        </div>
        <a
          href="#"
          className="block my-1 text-base font-bold hover:text-cyan-dark"
        >
          {jobData.position}
        </a>
        <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
                <li>{jobData.postedAt}</li>
                <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
                  {jobData.contract}
                </li>
                <li>{jobData.location}</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
                  <li>
                    <button>
                    <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">{jobData.role}</div>
                    </button>
                    </li>
                    <li>
                    <button>
                    <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">{jobData.level}</div>
                    </button>
                    </li>
                    <li>
                    <button>
                    <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">{jobData.languages}</div>
                    </button>
                    </li>
        
              </ul>
            </div>
          </div>
        </li>


    )
}
export default Joblist;