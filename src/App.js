import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import './styles/styles.css';
import { DataContextProvider } from './context/DataContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/details/:movieId" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

function AppWrapper() {
  return (
    <DataContextProvider>
      <App/>
    </DataContextProvider>
  )
}

export default AppWrapper;
