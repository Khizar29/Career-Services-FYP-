// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:7000/newsfeed/createPost", {
    // const response = await fetch("https://backend-cdp.vercel.app/newsfeed/createPost", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/newsfeed"} />;
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={createNewPost} className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Title
          </label>
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
          <label
            htmlFor="summary"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Summary
          </label>
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
          <label
            htmlFor="file"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            File
          </label>
          <input
            type="file"
            id="file"
            onChange={(ev) => setFiles(ev.target.files)}
            className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="editor"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <Editor value={content} onChange={setContent} />
        </div>
        {localStorage.getItem('user_roles') === "1" && (
        <button
          type="submit"
          className="mt-4 py-2 px-4 !bg-blue-500 text-white font-semibold rounded-md hover:!bg-blue-700 focus:outline-none transition duration-150 ease-in-out"
        >
          Create post
        </button>
        )}
      </form>
    </div>
  );
}

export default CreatePost;
