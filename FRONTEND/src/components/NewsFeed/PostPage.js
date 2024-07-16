import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log("Post ID:", id);
    fetch(`http://localhost:7000/newsfeed/post/${id}`).then((response) => {
      // fetch(`https://backend-cdp.vercel.app/newsfeed/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  return (
    <div className="post-page bg-white shadow-xl rounded-xl p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">{postInfo.title}</h1>
      <div className="flex items-center justify-between mb-6">
        <time className="text-gray-400 text-sm">
          {formatISO9075(new Date(postInfo.createdAt))}
        </time>
        <div className="edit-row">
        {localStorage.getItem('user_roles') === "1" && (
          <Link
            className="edit-btn inline-block !bg-blue-500 hover:!bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
            to={`/newsfeed/edit/${postInfo._id}`}
          >
            Edit this post
          </Link>
        )}
        </div>
      </div>
      <div className="image mb-8">
        <img
          src={postInfo.cover}
          alt=""
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
      <div className="content mb-8">
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
  
}
