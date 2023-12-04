import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <HeaderWrap>
      <LogoLink to="/">
        <Logo
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </LogoLink>
      <Menu to="/movie">영화</Menu>
      <Menu to="/tv">TV 프로그램</Menu>
      <Menu to="/person">인물</Menu>
      <LoginButton>로그인</LoginButton>
    </HeaderWrap>
  );
}

export default Header;
const LogoLink = styled(Link)``;
const Logo = styled.img`
  margin: 30px;
`;

const Menu = styled(Link)`
  color: white;
  margin: 10px;
  text-decoration: none;
  font-weight: bold;
`;

const HeaderWrap = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
