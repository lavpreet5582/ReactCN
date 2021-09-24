import React from "react";
import { data } from '../data';
import Navbar from "./Navbar";
import MoviesCard from "./MoviesCard";
import { addMovies, setShowFavourites } from "../actions/actions";
// import { StoreContext } from "../Context/Context";
import { connect } from "react-redux";
class App extends React.Component {

  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   this.forceUpdate();
    // })
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  }
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }
  render() {
    const { movies,search } = this.props;
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar 
        dispatch={this.props.dispatch}
        search = {search}
        />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MoviesCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0?<div className = "no-movies">No movies to display!</div>:null}
        </div>
      </div>
    );
  }

}
// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store = {store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.movies
  }
}
const ConnectedComponent = connect(mapStateToProps)(App);

export default ConnectedComponent;
