import { styled } from "styled-components";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useState } from "react";

const LoginConteiner = styled.section``;

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <LoginConteiner className="h-screen flex justify-content-center align-items-center surface-200 p-3">
      <form className="w-12 md:w-4 surface-0 p-3 border-round-sm">
        <h3>Seja Bem-vindo</h3>
        <InputText className="w-full mb-3" placeholder="email@email.com" />
        <IconField className="mb-3" iconPosition="right">
          <InputIcon
            onClick={() => setVisiblePassword(!visiblePassword)}
            className={`pi ${
              visiblePassword ? "pi-eye" : "pi-eye-slash"
            } cursor-pointer`}
          />

          <InputText
            type={visiblePassword ? "text": "password"}
            className="w-full"
            placeholder="****"
            maxLength={4}
          />
        </IconField>

        <Button type="submit" label="Entrar" className="w-full" />
      </form>
    </LoginConteiner>
  );
};

export default Login;
