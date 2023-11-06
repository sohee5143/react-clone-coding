import styled from "styled-components";
import Movie from "../Components/Movie";
import { movies } from "../MovieDummy"

function Movies() {
  return (
    <MoviesWrap>
    {movies.results.map((item) => {
      return <Movie data={item} />;
    })}
  </MoviesWrap>
  );
}

export default Movies;

const MoviesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 100px 20px 100px;
  justify-content: center;
`;
