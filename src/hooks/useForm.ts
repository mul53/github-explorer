import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState({});

  const handleChange = (event: any) => {
    const copy: any = Object.assign({}, form);
    copy[event.target.name] = event.target.value;
    setForm(copy);
  };

  return [form, setForm, handleChange];
}
