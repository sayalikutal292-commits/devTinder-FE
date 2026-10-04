const UserCard = (feed) => {
  console.log(feed.person.users);
  const { firstName, lastName } = feed.person.users[0];
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
        {/* <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Interested</button>
          <button className="btn btn-soft">Ignored</button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
