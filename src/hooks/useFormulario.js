import { useState } from "react";
const useFormulario = (initial) => {
  const [formulario, setFormulario] = useState(initial);
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setFormulario(initial);
  };

  return [formulario, handleChange, reset];
};
export default useFormulario;
