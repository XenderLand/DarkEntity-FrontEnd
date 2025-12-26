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

const Series = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    trailer: "",
    category: "",
    sub_category: "",
    releaseDate: "",
    language: "",
    genre: "",
    cast: "",
    country: "",
    episodes: "",
    image: null,
  });

  const [editId, setEditId] = useState(null);
  const [seriesList, setSeriesList] = useState([]);
  // const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    loadSeries();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleEdit = (series) => {
    console.log("Editing series:", series); // Debugging log
    setFormData({
      title: series.title,
      description: series.description,
      trailer: series.trailer,
      category: series.category,
      sub_category: series.sub_category,
      releaseDate: series.releaseDate,
      language: series.language,
      genre: series.genre,
      cast: series.cast,
      country: series.country,
      episodes: series.episodes,
      image: null, // Images might need special handling
    });
    setEditId(series._id); // Use the correct identifier (usually _id for MongoDB)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debugging log
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      if (editId) {
        const response = await axios.put(
          `https://darkentity.onrender.com/series/${editId}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Update response:", response.data); // Debugging log
        alert("Series updated successfully");
      } else {
        const response = await axios.post(
          "https://darkentity.onrender.com/series",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Create response:", response.data); // Debugging log
        alert("Series added successfully");
      }

      setFormData({
        title: "",
        description: "",
        trailer: "",
        category: "",
        sub_category: "",
        releaseDate: "",
        language: "",
        genre: "",
        cast: "",
        country: "",
        episodes: "",
        image: null,
      });
      setEditId(null);
      loadSeries();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Error processing request");
    }
  };

  const loadSeries = async (limit = 999999999) => {
    try {
      const result = await axios.get(
        `https://darkentity.onrender.com/series?limit=${limit}`
      );
      const sortedData = result.data.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
      console.log("Loaded series:", result.data); // Debugging log
      setSeriesList(sortedData);
    } catch (error) {
      console.error("Error loading series:", error); // Debugging log
    }
  };

  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    loadEpisodes();
  }, []);

  async function loadEpisodes() {
    const result = await axios.get("https://darkentity.onrender.com/episodes");
    setEpisodesList(result.data);
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://darkentity.onrender.com/series/${id}`);
      alert("Series deleted successfully");
      loadSeries();
    } catch (error) {
      alert("Error deleting series");
      console.error("Error deleting series:", error);
    }
  };

  // const sortSeries = (list, order) => {
  //   return list.sort((a, b) => {
  //     const dateA = new Date(a.releaseDate);
  //     const dateB = new Date(b.releaseDate);
  //     if (order === "asc") {
  //       return dateA - dateB;
  //     } else {
  //       return dateB - dateA;
  //     }
  //   });
  // };

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

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
            <ListItemButton
              style={{
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}>
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
              <h3>Add Series</h3>

              <div className="col-md-12">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}>
                  <option value="">Choose...</option>
                  <option value="Series">Series</option>
                  <option value="Movies">Movies</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="sub_category" className="form-label">
                  Sub-Category
                </label>
                <select
                  id="sub_category"
                  className="form-select"
                  name="sub_category"
                  value={formData.sub_category}
                  onChange={handleInputChange}>
                  <option value="">Choose...</option>
                  <option value="Hollywood">Hollywood</option>
                  <option value="K-Drama">K-Drama</option>
                  <option value="J-Drama">J-Drama</option>
                  <option value="African">African</option>
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
                  rows="6"
                  value={formData.description}
                  onChange={handleInputChange}>
                  {" "}
                </textarea>
              </div>

              <div className="col-6">
                <label htmlFor="releaseDate" className="form-label">
                  Release Date
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  className="form-control"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="trailer" className="form-label">
                  Trailer Link
                </label>
                <input
                  className="form-control"
                  id="trailer"
                  name="trailer"
                  rows="3"
                  value={formData.trailer}
                  onChange={handleInputChange}></input>
              </div>
              <div className="col-6">
                <label htmlFor="language" className="form-label">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  className="form-control"
                  value={formData.language}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  className="form-control"
                  value={formData.genre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="cast" className="form-label">
                  Casts
                </label>
                <input
                  type="text"
                  name="cast"
                  className="form-control"
                  value={formData.cast}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="episodes" className="form-label">
                  Total Episodes
                </label>
                <input
                  type="number"
                  name="episodes"
                  className="form-control"
                  value={formData.episodes}
                  onChange={handleInputChange}
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
                    {editId ? "Update Series" : "Add Series"}
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="list">
            {/* <div className="light_btn" style={{ marginLeft: "2rem" }}>
              <Link onClick={toggleSortOrder}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {sortOrder === "asc" ? "Ascending" : "Descending"}
              </Link>
            </div> */}

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
                    <th>Title </th>
                    <th>Descriptions</th>
                    <th>Trailer</th>
                    <th>Category</th>
                    <th>Sub-category</th>
                    <th>Language</th>
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
                        <td>{series.sub_category}</td>
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
                            src={`https://darkentity.onrender.com/${series.image}`}
                            alt={series.image}
                            style={{ maxWidth: "50px" }}
                          />
                        </td>
                        <td>
                          <div className="actions">
                            <a
                              className="action_btn"
                              href
                              onClick={() => handleEdit(series)}>
                              <EditIcon fontSize="large" />
                            </a>
                            <a
                              className="action_btn"
                              href
                              onClick={() => handleDelete(series._id)}
                              style={{ color: "red" }}>
                              <DeleteIcon fontSize="large" />
                            </a>
                          </div>
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

          <div>
            <h2>Series List</h2>
            <ul>
              {seriesList.map((series) => (
                <li key={series._id}>
                  <h3>{series.title}</h3>
                  <p>Description: {series.description}</p>
                  <div className="youtube_link">
                    <iframe
                      width="508"
                      height="323"
                      src={series.trailer}
                      title="YouTube Video Player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen></iframe>
                  </div>
                  <p>Category: {series.category}</p>
                  <p>Episodes: {series.episodes}</p>
                  {/* Display other series fields as needed */}
                  <img
                    src={`https://darkentity.onrender.com/${series.image}`}
                    alt={series.image}
                    style={{ maxWidth: "200px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Series;
