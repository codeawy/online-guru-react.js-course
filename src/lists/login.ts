import { UserInfoProperties } from "../components/LoginForm";

interface LoginFormInput {
  label: string;
  type: string;
  name: keyof UserInfoProperties;
}

const loginFormInputs: LoginFormInput[] = [
  {
    label: "Username",
    type: "text",
    name: "username",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
  },
];

export default loginFormInputs;
