import { ChangeEvent, useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import loginFormInputs from "../lists/login";

export type UserInfoProperties = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = () => {
  // ** memo, useMemo, useCallback => React 16 => Signal
  const [userInfo, setUserInfo] = useState<UserInfoProperties>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userInfo);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login to get access</h1>
      <form>
        {loginFormInputs.map((input, idx) => (
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left", margin: 10 }} key={idx}>
            <label htmlFor={input.name}>{input.label}</label>
            <Input
              type={input.type}
              name={input.name}
              id={input.name}
              value={userInfo[input.name as keyof UserInfoProperties]}
              onChange={onChangeHandler}
            />
          </div>
        ))}
        <Button style={{ width: "100%" }}>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
