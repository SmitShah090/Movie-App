import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainNav from './components/MainNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/series" component={Series} exact />
            <Route path="/search" component={Search} exact />
          </Switch>
        </Container>
      </div>
        <MainNav />
    </BrowserRouter>
  );
}

export default App;
