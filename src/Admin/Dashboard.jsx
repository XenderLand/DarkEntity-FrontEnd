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

const Dasboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    downloadLink: "",
    trailer: "",
    category: "",
    releaseDate: "",
    language: "",
    genre: "",
    cast: "",
    country: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post(
        "http://localhost:5000/movies",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      loadMovies();
      console.log(response.data);
      alert("successful");
      // Handle success, clear form, show success message, etc.
    } catch (error) {
      alert("SHit");

      console.error("Error uploading movie:", error);
      // Handle error, show error message, etc.
    }
  };

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
    <div id="grid" className="h-screen">
      <div id="left">
        <Link
          to="/ad/admin"
          style={{
            backgroundColor: "green",
            textDecoration: "none",
            color: "white",
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Movies " />
          </ListItemButton>
        </Link>

        <Link
          to="/ad/movies"
          style={{
            backgroundColor: "green",
            textDecoration: "none",
            color: "white",
          }}
        >
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
          }}
        >
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
          }}
        >
          <ListItemButton>
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
          }}
        >
          <ListItemButton
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <MovieCreation style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dash " />
          </ListItemButton>
        </Link>
      </div>

      <div id="right">
        <div className="Admin">
          <div className="upload">
            <form className="row g-3" style={{ marginBottom: "5rem" }}>
              <h3>Add Movie</h3>

              <div className="col-md-6">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="Action">Action</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Horror">Horror</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Sci-fi">Sci-fi</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Sci-fi , Comedy">Sci-fi , Comedy</option>
                  <option value="Romantic, Comedy ">Romantic, Comedy</option>
                  <option value="Documentry ">Documentry</option>
                  <option value="Crime ">Crime</option>
                  <option value="Action, Adventure ">Action, Adventure</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
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
                  value={formData.downloadLink}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="trailer" className="form-label">
                  Trailer
                </label>
                <input
                  type="text"
                  id="trailer"
                  className="form-control"
                  name="trailer"
                  value={formData.trailer}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="cast" className="form-label">
                  Casts
                </label>
                <input
                  type="text"
                  name="cast"
                  className="form-control"
                  value={formData.cast}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <label htmlFor="language" className="form-label">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  className="form-control"
                  value={formData.language}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  className="form-control"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <label htmlFor="releaseDate" className="form-label">
                  Release Date
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  className="form-control"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className="col-12">
                <div className="light_btn" style={{ textAlign: "center" }}>
                  <a href="/admin" onClick={handleSubmit}>
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
            <h2>Movies</h2>
            <div className="table-responsive">
              <table
                className="table table-dark table-hover"
                style={{
                  width: "95%",
                  margin: "0 auto",
                  border: ".5rem solid #dc3545",
                  color: "black",
                }}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>title </th>
                    <th>Descriptions</th>
                    <th>trailer</th>
                    <th>category</th>
                    <th>language</th>
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

          <div>
            <h2>Movie List</h2>
            <ul>
              {movieList.map((movie) => (
                <li key={movie._id}>
                  <h3>{movie.title}</h3>
                  <p>Description: {movie.description}</p>
                  <p>Release Date: {movie.releaseDate}</p>
                  <div className="youtube_link">
                    <iframe
                      width="508"
                      height="323"
                      src={movie.trailer}
                      title="YouTube Video Player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p>Category: {movie.category}</p>
                  <p>Country: {movie.country}</p>
                  <p>Genre: {movie.genre}</p>
                  <p>Language: {movie.language}</p>
                  <p>Cast: {movie.cast}</p>
                  {/* Display other movie fields as needed */}
                  <img
                    src={`http://localhost:5000/${movie.image}`}
                    alt={movie.image}
                    style={{ maxWidth: "200px" }}
                  />

                  <a href={movie.downloadLink} className="btn btn-primary">
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#top">Navigate to internal page location</a>
        </div>
      </div>
    </div>
  );
};
export default Dasboard;
