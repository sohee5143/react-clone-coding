import React, { useState } from "react";
import styled from "styled-components";

function LoginPage() {
  // 상태 값으로 이메일과 비밀번호를 추적합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일과 비밀번호의 유효성을 나타내는 상태 값입니다.
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  // 이메일 형식을 검사하는 함수입니다.
  const validateEmail = () => {
    // 여기에 여러분만의 이메일 유효성 검사 로직을 구현할 수 있습니다.
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailValid(isValid);
  };

  // 비밀번호 형식을 검사하는 함수입니다.
  const validatePassword = () => {
    // 여기에 여러분만의 비밀번호 유효성 검사 로직을 구현할 수 있습니다.
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    setPasswordValid(isValid);
  };

  // 이메일 입력값이 변경될 때 호출되는 핸들러 함수입니다.
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // 이메일 형식을 입력할 때마다 검사합니다.
    validateEmail();
  };

  // 비밀번호 입력값이 변경될 때 호출되는 핸들러 함수입니다.
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // 비밀번호 형식을 입력할 때마다 검사합니다.
    validatePassword();
  };

  return (
    <LoginWrap>
      <LoginBox>
        <LoginText>이메일과 비밀번호를 입력해주세요.</LoginText>
        <EmailText>이메일 주소</EmailText>
        {/* 이메일이 유효하지 않으면 'is-invalid' 클래스를 추가합니다. */}
        <EmailInput
          placeholder="이메일 주소를 입력하세요"
          onChange={handleEmailChange}
          className={!emailValid ? 'is-invalid' : ''}
        />
        {/* 이메일이 유효하지 않으면 에러 메시지를 표시합니다. */}
        {!emailValid && <ErrorMessage>올바른 이메일을 입력하세요.</ErrorMessage>}
        <EmailText>비밀번호</EmailText>
        {/* 비밀번호가 유효하지 않으면 'is-invalid' 클래스를 추가합니다. */}
        <PasswordInput
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          onChange={handlePasswordChange}
          className={!passwordValid ? 'is-invalid' : ''}
        />
        {/* 비밀번호가 유효하지 않으면 에러 메시지를 표시합니다. */}
        {!passwordValid && (
          <ErrorMessage>
            영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력하세요.
          </ErrorMessage>
        )}
        {/* 이메일과 비밀번호가 모두 유효한 경우에만 버튼을 활성화합니다. */}
        <SubmitButton disabled={!emailValid || !passwordValid}>확인</SubmitButton>
      </LoginBox>
    </LoginWrap>
  );
}

export default LoginPage;

const LoginWrap = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;

`;

const LoginBox = styled.div `
     background-color: white;
    width: 90%;
    margin: 30px;
    padding: 30px;
`

const LoginText = styled.div`
    font-weight: bolder;
    font-size: 20px;
`
const EmailText = styled.div`
    margin-top: 30px;
`

const EmailInput = styled.input`
    margin-top: 10px;
    padding: 15px;
    width: 800px;
    border-radius: 10px;
`

const PasswordInput = styled.input`
    margin-top: 10px;
    padding: 15px;
    width: 800px;
    border-radius: 10px;
`
const SubmitButton = styled.button`
  margin-top: 30px;
  padding: 15px;
  width: 840px;
  border-radius: 50px;
  background-color: ${(props) => (props.disabled ? "gray" : "blue")};
  /* 기본 스타일 설정 */
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  /* 비활성화 상태일 때는 cursor를 not-allowed로 변경 */
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;