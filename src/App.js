import "./App.css";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";

function App() {
  const [formulario, handleChange] = useFormulario({
    name: "",
    lastName: "name",
  });
  console.log(formulario);
  return (
    <form>
      <Input
        label="Name: "
        name="name"
        value={formulario.name}
        onChange={handleChange}
      />
      <Input
        label="Lastname: "
        name="lastName"
        value={formulario.lastName}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
