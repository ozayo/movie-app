// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Helmet provider import
import Home from './pages/Home';
import Movies from './pages/Movies'; // Movies (index) varsayılan olarak popular filmleri gösterecek
import TopRatedMovies from './pages/Movies/TopRatedMovies';
import UpcomingMovies from './pages/Movies/UpcomingMovies';
import TVShows from './pages/TVShows';
import { Provider } from 'react-redux'; // Redux Provider'ı ekliyoruz
import { store } from './redux/store';  // Store'u import ediyoruz
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail'; // MovieDetail bileşenini ekliyoruz
import FavoriteMovies from './pages/FavoriteMovies'; // Favori filmler sayfasını ekliyoruz
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-XLG80SZZRJ'); // GA4 Measurement ID
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <Analytics /> {/* Google Analytics'i izlemek için ekliyoruz */}
          <div>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />  
                <Route path="/movies/top-rated" element={<TopRatedMovies />} />
                <Route path="/movies/upcoming" element={<UpcomingMovies />} />
                <Route path="/tvshows/*" element={<TVShows />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/favorites" element={<FavoriteMovies />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
