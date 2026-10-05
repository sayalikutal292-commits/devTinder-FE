import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (feed) return;
    try {
      await axios
        .get(BASE_URL + "/feed", { withCredentials: true })
        .then((res) => {
          if (res.data) {
            dispatch(addFeed(res.data));
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="my-10 mx-auto flex justify-center">
      {feed ? (
        <UserCard person={feed.users[0]}></UserCard>
      ) : (
        <div className=" flex justify-center mt-10">
          <h2>No Feed Found!!!</h2>
        </div>
      )}
    </div>
  );
};

export default Feed;
