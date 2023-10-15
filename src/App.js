import Movie from "./Components/Movie";
import { movies } from "./MovieDummy";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MoviesWrap>
        {movies.results.map((item) => {
          return <Movie data={item} />;
        })}
      </MoviesWrap>
    </div>
  );
}

export default App;
const MoviesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 100px 20px 100px;
  justify-content: center;
`;
