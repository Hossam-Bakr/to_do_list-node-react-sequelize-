import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpHandler = () => {
    console.log(name, email, password);
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userData);
    axios
      .post("http://127.0.0.1:3000/api/v1/user/signup", userData)
      .then((response) => {
        console.log(response);
        if (response.statusText === "Created") {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userData);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

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
        <S.Title>Welcome to Tasker, Signup now!</S.Title>
        <S.Subtitle>
          Please, insert your informations to access your tasks.
        </S.Subtitle>
        <S.FieldName>Name</S.FieldName>
        <S.InputField
          value={name}
          id="name"
          onChange={handleName}
          placeholder="Insert your Name"
        ></S.InputField>
        <S.FieldName>Email</S.FieldName>
        <S.InputField
          value={email}
          id="email"
          onChange={handleEmail}
          placeholder="Insert your Email"
        ></S.InputField>
        <S.FieldName>Password</S.FieldName>
        <S.InputField
          value={password}
          id="password"
          onChange={handlePassword}
          placeholder="Insert your Password"
          type="password"
        ></S.InputField>
        <S.KeepSigned>
          <S.Checkbox />
          <S.Subtitle>Remember me</S.Subtitle>
        </S.KeepSigned>
        <S.SignIn onClick={signUpHandler}>Sign In</S.SignIn>

        <S.Subtitle>
          Don't have an account? <Link to="/login">Login Up</Link>
        </S.Subtitle>
      </S.RightSide>
    </S.Page>
  );
};

export default Signup;
