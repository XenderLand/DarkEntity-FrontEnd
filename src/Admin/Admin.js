import "./Admin.css";
import { React, useState, useEffect } from "react";
import axios from "axios";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieCreation from "@mui/icons-material/MovieCreation";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
const Admin = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    // Fetch series data from backend
    fetch("http://localhost:5000/series")
      .then((response) => response.json())
      .then((data) => setSeriesList(data))
      .catch((error) => console.error("Error fetching series:", error));
  }, []);

  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    loadEpisodes();
  }, []);

  async function loadEpisodes() {
    const result = await axios.get("http://localhost:5000/episodes");
    setEpisodesList(result.data);
  }

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const result = await axios.get("http://localhost:5000/movies");
    setMovieList(result.data);
    console.log(result.data);
  }
  return (
    <div id="grid">
      <div id="left">
        <div className="sider">
          <Link
            to="/ad/admin"
            style={{
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
            }}>
            <ListItemButton
              style={{
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}>
              <ListItemIcon>
                <DashboardIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home " />
            </ListItemButton>
          </Link>

          <Link
            to="/ad/movies"
            style={{
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
            }}>
            <ListItemButton>
              <ListItemIcon>
                <LocalMoviesIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItemButton>
          </Link>

          <Link
            to="/ad/series"
            style={{
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
            }}>
            <ListItemButton>
              <ListItemIcon>
                <LiveTvIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Series" />
            </ListItemButton>
          </Link>

          <Link
            to="/ad/episodes"
            style={{
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
            }}>
            <ListItemButton>
              <ListItemIcon>
                <MovieFilterIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Episodes" />
            </ListItemButton>
          </Link>

          <Link
            to="/ad/dash"
            style={{
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
            }}>
            <ListItemButton>
              <ListItemIcon>
                <MovieCreation style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dash " />
            </ListItemButton>
          </Link>
        </div>
      </div>

      <div id="right">
        <div className="Admin">
          <div className="container">
            <div className="box">
              <h2>Movies</h2>
              <h6> </h6>
            </div>

            <div className="box">
              <h2>Series</h2>
              <h6> </h6>
            </div>

            <div className="box">
              <h2>Movies</h2>
              <h6> </h6>
            </div>
          </div>

          <div className="list">
            <h2>Movies</h2>
            <div className="table-responsive">
              <table
                className="table table-dark table-hover"
                style={{
                  width: "95%",
                  margin: "0 auto",
                  border: ".5rem solid #dc3545",
                  color: "black",
                }}>
                {" "}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>title </th>
                    <th>Descriptions</th>
                    <th>trailer</th>
                    <th>category</th>
                    <th>language</th>
                    <th> Country</th>
                    <th> Genre</th>
                    <th>episodes</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {movieList.map(function fn(movie, index) {
                  return (
                    <tbody>
                      <tr key={movie.id}>
                        <td>{index + 1}</td>
                        <td>{movie.title}</td>
                        <td>{movie.description}</td>
                        <td>{movie.trailer}</td>
                        <td>{movie.category}</td>
                        <td>{movie.language}</td>
                        <td>{movie.country}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.episodes}</td>

                        <td>
                          <img
                            src={`http://localhost:5000/${movie.image}`}
                            alt={movie.image}
                            style={{ maxWidth: "50px" }}
                          />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <a href className="edit">
                            <EditIcon />
                          </a>
                          <a href className="delete" style={{ color: "red" }}>
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>

          <div className="list">
            <h2>Series</h2>

            <div className="table-responsive">
              <table
                className="table table-dark table-hover"
                style={{
                  width: "95%",
                  margin: "0 auto",
                  border: ".5rem solid #dc3545",
                  color: "black",
                }}>
                {" "}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>title </th>
                    <th>Descriptions</th>
                    <th>trailer</th>
                    <th>category</th>
                    <th>language</th>
                    <th>Episodes No</th>
                    <th>Episodes</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {seriesList.map(function fn(series, index) {
                  return (
                    <tbody>
                      <tr key={series.id}>
                        <td>{index + 1}</td>
                        <td>{series.title}</td>
                        <td>{series.description}</td>
                        <td>{series.trailer}</td>
                        <td>{series.category}</td>
                        <td>{series.language}</td>
                        <td>{series.episodes}</td>

                        <td>
                          {episodesList.map((items) => {
                            if (series.title === items.seriesTitle) {
                              return (
                                <li key={items._id}>
                                  <li>
                                    {items.season} {items.episode}
                                  </li>
                                </li>
                              );
                            }
                            return null;
                          })}
                        </td>
                        <td>
                          <img
                            src={`http://localhost:5000/${series.image}`}
                            alt={series.image}
                            style={{ maxWidth: "50px" }}
                          />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <a href>
                            <EditIcon />
                          </a>
                          <a href style={{ color: "red" }}>
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="list">
            <h2>Episodes</h2>

            <div className="table-responsive">
              <table
                className="table table-dark table-hover"
                style={{
                  width: "95%",
                  margin: "0 auto",
                  border: ".5rem solid #dc3545",
                  color: "black",
                }}>
                {" "}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Series Title </th>
                    <th>season</th>
                    <th>episode</th>
                    <th>downloadLink</th>

                    <th>Actions</th>
                  </tr>
                </thead>
                {episodesList.map(function fn(items, index) {
                  return (
                    <tbody>
                      <tr key={items.id}>
                        <td>{index + 1}</td>
                        <td>{items.seriesTitle}</td>
                        <td>{items.season}</td>
                        <td>{items.episode}</td>
                        <td>{items.downloadLink}</td>

                        <td style={{ textAlign: "center" }}>
                          <a href className="edit">
                            <EditIcon />
                          </a>
                          <a href className="delete" style={{ color: "red" }}>
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
