import style from "./App.module.css";
import Header from "./components/Header";
import GetMoviesResult from "./components/Results/GetMoviesResult";
import Footer from "./components/Footer";
import SearchResult from "./components/Results/SearchResult";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Header />
        <Switch>
          <Route exact path={["/", "/movies"]} component={GetMoviesResult} />
          <Route
            exact
            path="/movies/searchBy/:searchCategory/search/:searchValue"
            component={SearchResult}
          />
          <Route exact path="/movies/:movieId" component={Modal} />
          <Route path="/error" component={ErrorMessage} />
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
