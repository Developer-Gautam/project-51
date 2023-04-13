import React, { useState } from "react";
import UserList from "./UserList";
import AddUserForm from "./AdduserForm";
import DataFromAPI from "./DataFromAPI";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <UserList users={users} />
      <div>
        <h2>Spacial Users from API</h2>
        <DataFromAPI />
      </div>
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
}

export default App;
