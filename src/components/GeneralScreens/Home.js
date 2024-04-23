import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import MyCardStory from "../StoryScreens/MyCardStory";
import NoStories from "../StoryScreens/NoStories";
import "../../Css/Home.css"

import { useNavigate } from "react-router-dom"

const Home = () => {
  const search = useLocation().search
  const searchKey = new URLSearchParams(search).get('search')
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { config } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [p, setBlog] = useState(false);

  const toggle = () => {
    setBlog(prevState => !prevState);
  }

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/user/profile", config);
        setUser(data.data);
        setLoading(false);
      } catch (error) {
        navigate('/');
      }
    }
    getUser();
  }, [navigate, config]);

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/story/getAllStories?search=${searchKey || ""}`);
        setStories(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    }
    getStories();
  }, [searchKey]);

  return (
    <div className="Inclusive-home-page">
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(6)].map(() => (
            <SkeletonStory key={uuidv4()} />
          ))}
        </div>
      ) : (
        <div>
          <div>
            <button id="btn" onClick={toggle}>{p ? "All Blogs" : "My Blogs"}</button>
          </div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ? (
              stories.map((story) => {
                if (p) {
                  return <MyCardStory key={uuidv4()} story={story} userId={user._id} />;
                } else {
                  return <CardStory key={uuidv4()} story={story} />;
                }
              })
            ) : (
              <NoStories />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
