import { useState } from "react";
import "./App.css";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
function App() {
  const [users, setUsers] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });
  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, formulario]);
    reset();
  };

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Name: "
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Input
              label="Last Name: "
              name="lastName"
              value={formulario.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <Input
              label="Email: "
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Button>Enviar</Button>
          </form>
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
