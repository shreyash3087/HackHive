import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faGlobe,
  faTrophy,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';

const FeaturedHackathons = () => {
  const [hackathons, setHackathons] = useState([]);
  const navigate = useNavigate();

  const cardColorTheme = [
    'border-cyan-200',
    'border-red-200',
    'border-green-200',
    'border-purple-300'
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}hackathons`)
      .then((res) => {
        // console.log(res.data);
        setHackathons(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center p-10 dark:bg-gradient-bg-4 gap-3">
      {Array.isArray(hackathons) &&
        hackathons.map((hackathon, index) =>
          hackathon.featured == true ? (
            <div
              className={`items-center p-4 w-[33vw] shadow-lg flex border ${cardColorTheme[index % cardColorTheme.length]} border-t-[15px] border-l-0 border-r-0 border-b-0 rounded-md m-3 hover:scale-[1.01]`}
              key={hackathon._id}
            >
              <div>
                {/* Image */}
                <div className="flex-col items-center w-[80%]">
                  {hackathon.image ? (
                    <img
                      className="w-[200px] h-[200px] object-contain"
                      src={hackathon.image}
                    />
                  ) : (
                    <img
                      className="w-[200px] h-[200px] object-contain"
                      src={placeholderImage}
                    />
                  )}
                </div>
                {/* Date and prize*/}
                <div>
                  <p className="flex-col gap-1">
                    <span className="py-1 px-2 text-lg font-bold">
                      {hackathon.status}
                    </span>
                    <br></br>
                    <span className="py-1 px-2 text-xs">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        style={{ color: '#a1a1a1' }}
                        className="mx-1"
                      />
                      {hackathon.date}
                    </span>
                    <br></br>
                    {/* {Prize} */}
                    {hackathon.prizes === 'None' ||
                    hackathon.prizes === 0 ? null : (
                      <span className="py-1 px-2 text-xs">
                        <FontAwesomeIcon
                          icon={faTrophy}
                          style={{ color: '#a1a1a1' }}
                          className="mx-1"
                        />{' '}
                        {hackathon.prizes}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 w-[70%]">
                {/* Name */}
                <h1 className="text-xl font-bold">{hackathon.name}</h1>
                {/* Date */}
                {/* <p className='text-lg flex gap-1'>
									<span className='text-green-500  bg-green-500/50 py-1 px-2 rounded-md'>
										{hackathon.date}
									</span>
									<span className='text-purple-500 bg-purple-500/50 py-1 px-2 rounded-md'>
										{hackathon.status}
									</span>
								</p> */}
                <p className="pb-4">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: '#a1a1a1' }}
                    className="mx-1"
                  />
                  {hackathon.location}
                </p>
                {/* Themes */}
                <div className="flex flex-wrap items-stretch justify-evenly py-1 gap-1 border rounded-md bg-cyan-200">
                  {/* <span className="text-blue-500 py-1">Themes :</span> */}
                  {hackathon.themes.map((theme, key) => (
                    <span
                      key={key}
                      className="text-xs py-1 px-2 rounded-full bg-white m-1"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
                {/* Location */}
                <div className="flex gap-1 self-end">
                  {/* <p className='  text-red-500 bg-red-500/50 rounded-md py-1 px-2'>
										{hackathon.location}
									</p> */}

                  {/* Participants */}
                  <p className="text-sm pt-5 px-2 ">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{ color: '#a1a1a1' }}
                      className="mx-1"
                    />
                    {hackathon.participants} Participants
                  </p>
                </div>

                {/* {Prize} */}
                {/* {hackathon.prizes === 'None' ||
                hackathon.prizes === 0 ? null : (
                  <p className="text-lg font-bold text-green-500">
                    Prize: {hackathon.prizes}
                  </p>
                )} */}
                {/* Link */}
                <a
                  className="bg-blue-500 p-3 text-white text-center rounded-lg"
                  href={hackathon.link}
                >
                  Apply Now
                </a>
              </div>
            </div>
          ) : null
        )}
      <button
        onClick={() => {
          navigate('/hackathons');
        }}
        className="justify-center items-center gap-4 text-[16px] text-blue-500 border border-[#1E78FF] hover:bg-blue-500 hover:text-white m-auto duration-300 py-2 px-2 mt-10 w-[430px] mx-auto rounded-lg dark:bg-white dark:hover:bg-blue-500"
      >
        Load More
      </button>
    </div>
  );
};

export default FeaturedHackathons;
