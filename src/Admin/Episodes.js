import "./Admin.css";
import { React, useState, useEffect } from "react";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieCreation from "@mui/icons-material/MovieCreation";
import Movie from "@mui/icons-material/MovieFilter";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Episodes = () => {
  const [seriesTitle, setSeriesTitle] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");

  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    loadEpisodes();
  }, []);

  async function loadEpisodes() {
    const result = await axios.get("http://localhost:5000/episodes");
    setEpisodesList(result.data);
  }

  // useEffect(() => {
  //   // Fetch series data from backend
  //   fetch('http://localhost:5000/episodes')
  //     .then(response => response.json())
  //     .then(data => setEpisodesList(data))
  //     .catch(error => console.error('Error fetching series:', error));
  // }, []);

  const addEpisodes = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/episodes", {
        seriesTitle,
        episodeTitle,
        downloadLink,
        season,
        episode,
      });

      console.log(result.data);
      loadEpisodes();
      alert("Successful");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Shitt");
    }
  };

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
            <ListItemButton>
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
                <MovieCreation style={{ color: "white" }} />
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
                <Movie style={{ color: "white" }} />
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
            <ListItemButton
              style={{
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}>
              <ListItemIcon>
                <Movie style={{ color: "white" }} />
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
          <div className="upload">
            <form className="row g-3" style={{ marginBottom: "5rem" }}>
              <h3>Add Episode</h3>

              <div className="col-md-6">
                <label htmlFor="seriesTitle" className="form-label">
                  Series Title
                </label>
                <input
                  type="text"
                  id="seriesTitle"
                  className="form-control"
                  name="seriesTitle"
                  value={seriesTitle}
                  onChange={(e) => setSeriesTitle(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="episodeTitle" className="form-label">
                  Episode Title
                </label>
                <input
                  type="text"
                  id="seriesTitle"
                  className="form-control"
                  name="episodeTitle"
                  value={episodeTitle}
                  onChange={(e) => setEpisodeTitle(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="season" className="form-label">
                  Season
                </label>
                <select
                  id="season"
                  className="form-select"
                  name="season"
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="Season 1">Season 1</option>
                  <option value="Season 2">Season 2</option>
                  <option value="Season 3">Season 3</option>
                  <option value="Season 4">Season 4</option>
                  <option value="Season 5">Season 5</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="episode" className="form-label">
                  Episode
                </label>
                <select
                  id="episode"
                  className="form-select"
                  name="episode"
                  value={episode}
                  onChange={(e) => setEpisode(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="Episode 1">Episode 1</option>
                  <option value="Episode 2">Episode 2</option>
                  <option value="Episode 3">Episode 3</option>
                  <option value="Episode 4">Episode 4</option>
                  <option value="Episode 5">Episode 5</option>
                  <option value="Episode 6">Episode 6</option>
                  <option value="Episode 7">Episode 7</option>
                  <option value="Episode 8">Episode 8</option>
                  <option value="Episode 9">Episode 9</option>
                  <option value="Episode 10">Episode 10</option>

                  <option value="Episode 11">Episode 11</option>
                  <option value="Episode 12">Episode 12</option>
                  <option value="Episode 13">Episode 13</option>
                  <option value="Episode 14">Episode 14</option>
                  <option value="Episode 15">Episode 15</option>
                  <option value="Episode 16">Episode 16</option>
                  <option value="Episode 17">Episode 17</option>
                  <option value="Episode 18">Episode 18</option>
                  <option value="Episode 19">Episode 19</option>
                  <option value="Episode 20">Episode 20</option>

                  <option value="Episode 21">Episode 21</option>
                  <option value="Episode 22">Episode 22</option>
                  <option value="Episode 23">Episode 23</option>
                  <option value="Episode 24">Episode 24</option>
                  <option value="Episode 25">Episode 25</option>
                  <option value="Episode 26">Episode 26</option>
                  <option value="Episode 27">Episode 27</option>
                  <option value="Episode 28">Episode 28</option>
                  <option value="Episode 29">Episode 29</option>
                  <option value="Episode 30">Episode 30</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="downloadLink" className="form-label">
                  Download Link
                </label>
                <input
                  type="text"
                  id="downloadLink"
                  className="form-control"
                  name="downloadLink"
                  value={downloadLink}
                  onChange={(e) => setDownloadLink(e.target.value)}
                />
              </div>

              <div className="col-12">
                <div className="light_btn" style={{ textAlign: "center" }}>
                  <a href="/admin" onClick={addEpisodes}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </a>
                </div>
              </div>
            </form>
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
          <div>
            <h2>Episodes List</h2>
            <ul>
              {episodesList.map((items) => (
                <li key={items._id}>
                  <h3>{items.seriesTitle}</h3>
                  <p>
                    {items.season} {items.episode}
                  </p>

                  <a href={items.downloadLink} className="btn btn-primary">
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Episodes;
