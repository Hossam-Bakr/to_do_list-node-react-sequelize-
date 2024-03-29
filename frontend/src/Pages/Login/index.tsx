import React, { useState, useContext } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext, { AuthType } from "../../Contexts/authContext";
import axios from "axios";
import { UserData } from "../../App";
let BaseURL = "http://127.0.0.1:3000/api/v1/user/login";

interface LoginPageProps {
  onLogin: (userData:UserData,userToken:string) => void;
}
const Login: React.FC<LoginPageProps> = ({ onLogin }) => {
  // const {setUserData} = useContext(AuthContext) as AuthType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler() {
    const userData = {
      email: email,
      password: password,
    };

    const headers = {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YourAccessToken' // Example Authorization header
    };
    axios
      .post(BaseURL, userData, { headers: headers })
      .then((response) => {
        console.log("Login successful:", response.data);
        if (response.data.status === "Success") {
          onLogin(response.data.user, response.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  return (
    <S.Page>
      <S.LeftSide>
        <S.Img src={Logo}></S.Img>
      </S.LeftSide>
      <S.RightSide>
        <S.Title>Welcome to Tasker</S.Title>
        <S.Subtitle>
          Please, insert your informations to access your tasks.
        </S.Subtitle>
        <S.FieldName>Email</S.FieldName>
        <S.InputField
          value={email}
          id="email"
          onChange={handleEmail}
          placeholder="Insert your email"
          type="email"
        ></S.InputField>
        <S.FieldName>Password</S.FieldName>
        <S.InputField
          value={password}
          id="password"
          onChange={handlePassword}
          placeholder="Insert your password"
          type="password"
        ></S.InputField>
        <S.KeepSigned>
          <S.Checkbox />
          <S.Subtitle>Remember me</S.Subtitle>
        </S.KeepSigned>
        <S.SignIn onClick={loginHandler}>Sign In</S.SignIn>

        <S.Subtitle>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </S.Subtitle>
      </S.RightSide>
    </S.Page>
  );
};

export default Login;
