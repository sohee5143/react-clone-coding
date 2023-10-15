import Movie from "./Components/Movie";
import { movies } from "./MovieDummy";

function App() {
  return (
    <div className="App">
      <div className="moviesWrap">
        {movies.results.map((item) => {
          return <Movie data={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
