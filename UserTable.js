import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleSearch = (query) => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(result);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...filteredUsers].sort((a, b) => {
      const valueA = key === "company" ? a.company.name : a[key];
      const valueB = key === "company" ? b.company.name : b[key];

      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredUsers(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h2>User Directory</h2>

      <SearchBar onSearch={handleSearch} />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name ⬍</th>
            <th>Email</th>
            <th>Phone</th>
            <th onClick={() => handleSort("company")}>Company ⬍</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
