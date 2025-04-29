import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pajonation from "./paajonation";
import ListGroup from "./ListGroup";

class Movies extends Component {
  state = {
    size: 4,
    ganres :[],
    currentPage: 1,
    movies: getMovies(),
  };
  deleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    if (this.state.movies.length === 0) return <h1>NO MORE MOVIES</h1>;
    return (
      <div className="row">
        {/* <div className="col-2">
          <ListGroup items={this.state.genres}/>
        </div> */}
        <div className="col">
          <h2>movies avalaable are {this.state.movies.length}</h2>
          <table
            style={{
              width: 400,
              height: 200,
              padding: 10,
              textAlign: "center",
            }}
            border={1}
            bgcolor="pink"
          >
            <thead>
              <tr>
                <th>TITLE</th>
                <th>Genere</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteMovie(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Deletee
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pajonation
            itemCount={this.state.movies.length}
            pageSize={this.state.size}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
