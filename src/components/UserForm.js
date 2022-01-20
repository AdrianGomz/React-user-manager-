import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
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
  );
};
export default UserForm;
