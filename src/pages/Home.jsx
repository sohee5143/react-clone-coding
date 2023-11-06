import styled from "styled-components";
import AdPage from "../Components/AdPage";

function Home() {
  return (
    <HomeWrap>
        <AdPage></AdPage>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div`
  color: white;
  margin: 40px;
`;
