import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">

      <Banner/>
     <Row isLarge={true} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentry " fetchUrl={requests.fetchDocumentries} />




    </div>
  );
}

export default App;
