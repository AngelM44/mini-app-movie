import logo from './logo.svg';
import './App.css';

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  return (
  <>
      {movies.map(movie => {
        return <li align-items='center'>title: {movie.title}</li>
      })}
  </>
  );
}

export default App;
