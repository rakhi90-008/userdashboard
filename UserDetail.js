import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Details</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address.street}, {user.address.city}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>
    </div>
  );
};

export default UserDetail;
