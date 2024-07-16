import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import NavBarWrapper from "./components/NavBar/NavBarWrapper";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { BoardOfDirectors } from "./components/Pages/BoardOfDirectors";
import { Jobs } from "./components/Pages/Jobs";
// import NewsFeed from "./components/Pages/NewsFeed";
import CreatePost from "./components/NewsFeed/CreatePost";
import Layout from "./components/NewsFeed/Layout";
import PostPage from "./components/NewsFeed/PostPage";
import EditPost from "./components/NewsFeed/EditPost";
import DeletePost from "./components/NewsFeed/DeletePost";
import IndexPage from "./components/NewsFeed/IndexPage";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import UserProfile from "./components/Pages/UserProfile";
import MyForm from "./components/Jobs/MyForm";
import JobDetails from "./components/Jobs/JobDetails";
import GraduateDirectory from "./components/Pages/GraduateDirectory";
import ProfilePage from "./components/Pages/ProfilePage";
import NotFound  from './components/Pages/NotFound';
import Footer from "./components/Footer/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app-container">              
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavBarWrapper>
              <Login />
            </NavBarWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <NavBarWrapper>
              <Home />
            </NavBarWrapper>
          }
        />
        <Route
          path="/jobs"
          element={
            <NavBarWrapper>
              <Jobs />
            </NavBarWrapper>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <NavBarWrapper>
              <JobDetails />
            </NavBarWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={
            <NavBarWrapper>
              <UserProfile />
            </NavBarWrapper>
          }
        />
        <Route
          path="/email"
          element={
            <NavBarWrapper>
              <MyForm />
            </NavBarWrapper>
          }
        />

        {/* <Route
          path="/newsfeed"
          element={
            <NavBarWrapper>
              <div className="newsfeed-container">
                <Layout />
              </div>
            </NavBarWrapper>
          }
        >

        
          <Route index element={<IndexPage />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />} />
          <Route path="/newsfeed/post/:id" element={<PostPage />} />
          <Route path="/newsfeed/edit/:id" element={<EditPost />} />
          <Route path="/newsfeed/delete/:id" element={<DeletePost />} />
        </Route> */}

        {/* <Route
          path="/newsfeed"
          element={
            <NavBarWrapper>
              <div className="newsfeed-container">
                <Layout />
              </div>
            </NavBarWrapper>
          }
        >

        
          <Route index element={<IndexPage />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />} />
          <Route path="/newsfeed/post/:id" element={<PostPage />} />
          <Route path="/newsfeed/edit/:id" element={<EditPost />} />
          <Route path="/newsfeed/delete/:id" element={<DeletePost />} />
        </Route> */}

        <Route
          path="/newsfeed"
          element={
            <NavBarWrapper>
              <div className="newsfeed-container">
                <Layout />
              </div>
            </NavBarWrapper>
          }
        >
          <Route index element={<IndexPage />} />
          <Route path="/newsfeed/createPost" element={<CreatePost />} />
          <Route path="/newsfeed/post/:id" element={<PostPage />} />
          <Route path="/newsfeed/edit/:id" element={<EditPost />} />
          <Route path="/newsfeed/delete/:id" element={<DeletePost />} />
        </Route>

        <Route
          path="/directory"
          element={
            <NavBarWrapper>
              <GraduateDirectory />
            </NavBarWrapper>
          }
        />

        <Route
          path="/profile/:user_id"
          element={
            <NavBarWrapper>
              <ProfilePage />
            </NavBarWrapper>
          }
        />

        <Route
          path="/about"
          element={
            <NavBarWrapper>
              <About />
            </NavBarWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <NavBarWrapper>
              <Contact />
            </NavBarWrapper>
          }
        />
        <Route
          path="/cso"
          element={
            <NavBarWrapper>
              <BoardOfDirectors />
            </NavBarWrapper>
          }
        />
         <Route path="/NotFound" 
            element = {  
            <NavBarWrapper>
              <NotFound />
            </NavBarWrapper> 
            }
         />

      </Routes>
      <div style={{ flex: 1 }}></div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
