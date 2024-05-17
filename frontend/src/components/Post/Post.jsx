/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import icon_writer from '../../assets/icon_writer.png';

export default function Post(props) {
  return (
    // Accessing and Displaying the data passed as props
    <div className="overflow-y-auto">
      <div className="bg-white border shadow-lg dark:bg-transparent dark:border dark:border-dashed w-full h-full">
        <div className="mx-auto p-6">
          <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time
                dateTime="2023-03-16"
                className="text-gray-500 dark:text-white"
              >
                {props.content.date}
              </time>
              <Link className="relative z-10 rounded-full bg-green-100 dark:bg-blue-500 dark:text-white px-3 py-1.5 font text-gray-600 hover:bg-gray-100">
                {props.content.department}
              </Link>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <img
                  className="w-full h-48 object-cover mb-3 dark:border"
                  src={props.content.image}
                />
                <Link className="dark:text-white h-2">
                  <span className="absolute inset-0"></span>
                  <p className="h-10 flex items-center">
                    {props.content.title}
                  </p>
                </Link>
              </h3>
              <p className="my-5 h-16 line-clamp-3 text-sm leading-6 text-ellipsis text-gray-600 dark:text-white">
                {props.content.info}
              </p>
            </div>
            <Link to={props.content.url} target="_blank">
              <button className="bg-blue-500 hover:bg-blue-800 px-8 py-2 rounded-lg text-white my-2">
                Read More {'>'}
              </button>
            </Link>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={icon_writer} alt="" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {props.content.author}
                  </a>
                </p>
                <p className="text-gray-600">{props.content.designation}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
