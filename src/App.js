import { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Container from "./components/Container";

import UserForm from "./components/UserForm";
function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };
  console.log(users);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((user) => (
            <li
              key={user.email}
            >{`${user.name} ${user.lastName}: ${user.email}`}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}

export default App;
