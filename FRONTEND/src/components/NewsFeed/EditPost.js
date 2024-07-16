import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";
import "./NewsFeed.css";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7000/newsfeed/post/" + id)
    // fetch("https://backend-cdp.vercel.app/newsfeed/post/" + id)
     .then((response) => {
        response.json().then((postInfo) => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (cover) {
      data.set("cover", cover);
    }

    try {
      const response = await fetch(`http://localhost:7000/newsfeed/post/${id}`, {
      // const response = await fetch(`https://backend-cdp.vercel.app/newsfeed/post/${id}`, {
        method: "PUT",
        body: data,
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        console.log("nahi kr rha hyy");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/newsfeed/post/" + id} />;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Your Post</h2>
      <form onSubmit={updatePost} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary" className="mb-2 block text-sm font-medium text-gray-700">Summary</label>
          <textarea
            id="summary"
            placeholder="Summary"
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
            className="border border-gray-300 rounded-md p-2 resize-none focus:border-blue-500 focus:outline-none"
            rows="3"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="file" className="mb-2 block text-sm font-medium text-gray-700">Cover Image</label>
          <input type="file" id="file" onChange={(ev) => setCover(ev.target.files[0])} className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="editor" className="mb-2 block text-sm font-medium text-gray-700">Content</label>
          <Editor onChange={setContent} value={content} />
        </div>
        <button type="submit" className="mt-4 py-2 px-4 !bg-blue-500 text-white font-semibold rounded-md hover:!bg-blue-700 focus:outline-none transition duration-150 ease-in-out">Update post</button>
      </form>
    </div>
  );
}
