// components/App.jsx
import React, { useState, useEffect } from "https://esm.sh/react@17.0.2";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", age: "", gender: "" });
  const [users, setUsers] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    fetchUsers();
  };

  const fetchUsers = async () => {
    const response = await fetch("");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Deno SSR with React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender: </label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} - {user.age} - {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
