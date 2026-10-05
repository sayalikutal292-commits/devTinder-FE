const UserCard = ({ person }) => {
  const { firstName, lastName, about, age, gender, skills } = person;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=1024x1024&w=is&k=20&c=H640-Mts2rHSHLTkCd04WFd_VhcHMwX8kAGVXW4ddJY="
          alt="alt"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + "," + gender}</p>}
        {about && <p>{about}</p>}
        {skills && <p>{"Skills : " + skills}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Interested</button>
          <button className="btn btn-soft">Ignored</button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
