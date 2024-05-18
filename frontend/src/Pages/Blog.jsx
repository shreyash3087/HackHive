import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Post from "../components/Post/Post";

const BlogsPage = ({ darkMode, toggleDarkMode }) => {
  const postData = [
    {
      department: "Guide",
      title: "Virtual Hackathons: All You Need To Know",
      author: "Nidhi Kala",
      designation: "",
      info: `Virtual hackathons are online events where people come together to explore challenges, and design and build solutions. Unlike physical hackathons, in a virtual hackathon the finale can be hosted from anywhere and do not have the same geographical boundaries—all you need is a live-streaming platform like Zoom to get started.`,
      image:
        "https://media.hackerearth.com/blog/wp-content/uploads/2022/10/Feature-image-%E2%80%93-Virtual-Hackathons-All-You-Need-To-Know.png",
      date: "Mar 21, 2024",
      url: "https://www.hackerearth.com/blog/talent-assessment/virtual-hackathons/",
    },
    {
      department: "Importance",
      title: "The Importance of Hackathons: Fostering Innovation and Collaboration",
      author: "Akshat Tyagi",
      designation: "",
      info: `Hackathons have become increasingly popular in recent years, and for good reason. These intensive, time-bound events bring together individuals with diverse skills and backgrounds to collaborate on projects, solve problems, and innovate.`,
      image:
        "https://th.bing.com/th/id/OIP.ZyU0NRprmy9sV2IAyrEEnQHaD8?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      date: "Apr 24, 2024",
      url: "https://medium.com/@akshatt318/the-importance-of-hackathons-fostering-innovation-and-collaboration-a868cfb15807",
    },
    {
      department: "Hackathon Success",
      title: "How to Create a Winning Hackathon Pitch",
      author: "techFiesta",
      designation: "",
      info: `Hackathons have become a relevant platform for innovation and collaboration. However, to achieve hackathon success, it’s more than merely delving into the code and technicalities of your solution, you need to create a winning hackathon pitch.`,
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*LFMG-Qd5aSdV5EMU",
      date: "Nov 3, 2023",
      url: "https://medium.com/@techFiesta/hackathon-success-how-to-create-a-winning-hackathon-pitch-6121a20b0202",
    },
    {
      department: "Experience",
      title: "How I won Smart India Hackathon",
      author: "Arinjay Pathak",
      designation: "",
      info: `This blog is an effort to serve as a guide for students who are aiming to win Smart India Hackathon. I have decided to pin down my experiences and key takeaways I observed, which I believe were essential in winning this national hackathon.`,
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XbbidV7QfvAsibLo3CkvNw.png",
      date: "Jul 31, 2023",
      url: "https://medium.com/@arinjay_11020/how-i-won-smart-india-hackathon-2022-a-step-by-step-guide-by-arinjay-pathak-501529c00abb",
    },
    {
      department: "Inspiration",
      title: "Helmholtz Launches its First Hybrid GPU Hackathon",
      author: "Antonina Sinelnik, Izumi Barker",
      designation: "",
      info: `Five teams from various scientific domains collaborate across platforms to tackle AI and HPC challenges.`,
      image:
        "https://www.openhackathons.org/servlet/rtaImage?eid=ka05e000001fQyZ&feoid=00N5e00000ejuAf&refid=0EM5e000001eSot",
      date: "November 02, 2022",
      url: "https://www.openhackathons.org/s/article/Helmholtz-Launches-its-First-Hybrid-GPU-Hackathon",
    },
    {
      department: "Knowledge",
      title: "10 things to keep in mind while conducting a hackathon",
      author: "Suhail Ameen",
      designation: "",
      info: `A hackathon can be the wind to the sails of your business. Regardless of the niche or industry, your business belongs to, conducting…`,
      image:
        "https://media.hackerearth.com/blog/wp-content/uploads/2016/05/top-10-things-hackathon.jpg",
      date: "January 23, 2019",
      url: "https://www.hackerearth.com/blog/developers/conducting-hackathon/",
    },
  ];

  return (
    <div className='min-h-screen dark:bg-gradient-bg-2'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-col justify-center items-center container mx-auto mt-12 mb-20'>
        <h1 className='font-bold text-4xl text-purple-700 mt-4 mb-6 dark:text-gray-300'>
          Welcome to {"<"}HACK/HIVE{">"} Blog Page!
        </h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {postData.map((post, index) => (
            <Post key={index} content={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
