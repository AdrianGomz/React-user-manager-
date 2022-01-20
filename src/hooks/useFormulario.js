import { useState } from "react";
const useFormulario = (initial) => {
  const [formulario, setFormulario] = useState(initial);
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };
  return [formulario, handleChange];
};
export default useFormulario;
