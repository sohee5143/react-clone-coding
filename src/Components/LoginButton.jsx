import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <LoginButtonBox>
      <StyledLink to="/login">로그인</StyledLink>
    </LoginButtonBox>
  );
}

export default LoginButton;

const LoginButtonBox = styled.button`
  background-color: white;
  width: 80px;
  align-items: center;
  text-align: center;
  border-radius: 40%;
  margin-left: 20px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
