import React from "react";
import { addFavourites, removeFromFavourites } from "../actions/actions";
class MoviesCard extends React.Component {
    handleFavouriteMovie  = ()=>{
        const {movie} = this.props;
        // console.log(movies);
        this.props.dispatch(addFavourites(movie))
    }
    handleUnFavouriteMovie  = ()=>{
        const {movie} = this.props;
        // console.log(movies);
        this.props.dispatch(removeFromFavourites(movie));
    }
    render(){
        const { movie,isMovieFavourite } = this.props;
        return (
            <div className="movie-card">

                <div className  = "left">
                    <img alt = "movie-poster" src = {movie.Poster} />

                </div>
                <div className= "right">
                    <div className = "title">{movie.Title}</div>
                    <div className = "plot">{movie.Plot}</div>
                    <div className = "footer">
                        <div className = "rating">{movie.imdbRating}</div>
                        {
                        isMovieFavourite
                        ?<button className = "unfavourite-btn" onClick = {this.handleUnFavouriteMovie}>UnFavourite</button>
                        :<button className = "favourite-btn" onClick = {this.handleFavouriteMovie}>Favourite</button>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default MoviesCard;