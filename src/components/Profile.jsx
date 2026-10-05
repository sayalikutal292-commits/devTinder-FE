import { useSelector } from "react-redux";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return <div>{user && <EditProfileForm user={user} />}</div>;
};
export default Profile;
