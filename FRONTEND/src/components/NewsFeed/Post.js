import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import "./NewsFeed.css";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post bg-white shadow-md rounded-lg p-4 max-w-xl mx-auto !my-4">

      <div className="image relative">
        <Link to={`/newsfeed/post/${_id}`}>
          <img src={cover} alt="" className="w-full h-64 object-cover rounded-lg" />
        </Link>
      </div>
      <div className="texts mt-4">
        <Link to={`/newsfeed/post/${_id}`}>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
        </Link>
        <p className="info text-gray-600">
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary mt-2 text-gray-700">{summary}</p>
        {localStorage.getItem('user_roles') === "1" && (
          <Link to={`/newsfeed/delete/${_id}`} className="inline-flex items-center justify-center !bg-red-600 hover:!bg-red-700 !text-white font-semibold py-2 px-4 rounded-md mt-4 transition duration-150 ease-in-out">
          Delete Post
        </Link>
         )} 
      </div>
    </div>
  );
}