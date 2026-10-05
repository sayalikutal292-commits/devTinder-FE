import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnection(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  return (
    <div className="my-10 mx-auto w-100">
      <h1 className="text-2xl mb-10 mx-auto">Connections</h1>
      {connections &&
        connections.map((connection) => {
          const { firstName, lastName, about } = connection;
          return (
            <div className="flex justify-center">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src="https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=1024x1024&w=is&k=20&c=H640-Mts2rHSHLTkCd04WFd_VhcHMwX8kAGVXW4ddJY="
                    alt="alt"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Connections;
