import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faGlobe,
  faTrophy,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';

export default function HackathonCard() {
  const [hackathons, setHackathons] = useState([]);
  const navigate = useNavigate();

  const cardColorTheme = [
    'border-cyan-200',
    'border-red-200',
    'border-green-200',
    'border-purple-200'
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}hackathons`)
      .then((res) => {
        console.log(res.data);
        setHackathons(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center p-4 md:p-10 dark:bg-gradient-bg-2 gap-3">
      {Array.isArray(hackathons) &&
        hackathons.map((hackathon, index) => (
          <div
            className={`items-center p-4 w-full md:w-[48%] lg:w-[30%] shadow-lg flex border ${cardColorTheme[index % cardColorTheme.length]} border-t-[15px] border-l-0 border-r-0 border-b-0 rounded-md m-3 hover:scale-[1.01]`}
            key={hackathon._id}
          >
            <div>
              {/* Image */}
              <div className="flex-col items-center w-full">
                {hackathon.image ? (
                  <img
                    className="w-[200px] h-[200px] object-contain mx-auto"
                    src={hackathon.image}
                    alt="Hackathon"
                  />
                ) : (
                  <img
                    className="w-[200px] h-[200px] object-contain mx-auto"
                    src={placeholderImage}
                    alt="Placeholder"
                  />
                )}
              </div>
              {/* Date and prize*/}
              <div>
                <p className="flex-col gap-1">
                  <span className="py-1 px-2 text-lg font-bold">
                    {hackathon.status}
                  </span>
                  <br />
                  <span className="py-1 px-2 text-xs">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{ color: '#a1a1a1' }}
                      className="mx-1"
                    />
                    {hackathon.date}
                  </span>
                  <br />
                  {/* {Prize} */}
                  {hackathon.prizes === 'None' || hackathon.prizes === 0 ? null : (
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
            <div className="flex flex-col gap-1 w-full">
              {/* Name */}
              <h1 className="text-xl font-bold">{hackathon.name}</h1>
              {/* Location */}
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
                {hackathon.themes.map((theme, key) => (
                  <span
                    key={key}
                    className="text-xs py-1 px-2 rounded-full bg-white m-1"
                  >
                    {theme}
                  </span>
                ))}
              </div>
              {/* Participants */}
              <div className="flex gap-1 self-end">
                <p className="text-sm pt-5 px-2 ">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    style={{ color: '#a1a1a1' }}
                    className="mx-1"
                  />
                  {hackathon.participants} Participants
                </p>
              </div>

              {/* Link */}
              <a
                className="bg-blue-500 p-3 text-white text-center rounded-lg"
                href={hackathon.link}
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      <button
        onClick={() => {
          navigate('/hackathons');
        }}
        className="justify-center items-center gap-4 text-[16px] text-blue-500 border border-[#1E78FF] hover:bg-blue-500 hover:text-white m-auto duration-300 py-2 px-2 mt-10 w-full md:w-[430px] mx-auto rounded-lg dark:bg-white dark:hover:bg-blue-500"
      >
        Load More
      </button>
    </div>
  );
}
