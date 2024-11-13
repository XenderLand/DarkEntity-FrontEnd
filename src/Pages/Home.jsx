import { React, useState, useEffect } from "react";
import "../CSS/Home.css";
import axios from "axios";
import { register } from "swiper/element/bundle";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import StickyHeadTable from "../Admin/StickyHeadTable";

import { ArrowUpward } from "@mui/icons-material";
register();
const Home = () => {
  // Utility function to calculate time since
  function timeSince(date) {
    const now = new Date();
    const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;

    if (secondsPast < 60) {
      return `${Math.floor(secondsPast)} seconds ago`;
    }
    if (secondsPast < 3600) {
      return `${Math.floor(secondsPast / 60)} minutes ago`;
    }
    if (secondsPast < 86400) {
      return `${Math.floor(secondsPast / 3600)} hours ago`;
    }
    if (secondsPast < 2592000) {
      return `${Math.floor(secondsPast / 86400)} days ago`;
    }
    if (secondsPast < 31536000) {
      return `${Math.floor(secondsPast / 2592000)} months ago`;
    }
    return `${Math.floor(secondsPast / 31536000)} years ago`;
  }

  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    loadSeries();
  }, []);

  async function loadSeries() {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/series`);
    setSeriesList(result.data);
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
    <div>
      <div className=" p-16 bg-darkNavy text-white pt-16">
        <section className="p-4 ">
          {/* LATEST MOVIES */}
          <div className="latest_movies w-11/12 mx-auto p-1 mt-16 bg-darkRich rounded-lg ">
            <h5 className="title_container">LATEST MOVIES</h5>
            <div className="hidden md:block lg:block">
              <div className="product-grid mt-2 mx-auto grid grid-cols-2 gap-2 lg:gap-2 p-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {movieList.map((movie) => (
                  <div
                    className="product-container overflow-hidden rounded-xl shadow-custom-lightBlue mt-2"
                    key={movie.id}
                  >
                    <div
                      className="product relative"
                      style={{ textDecoration: "none" }}
                    >
                      <Link to={`/seriesDetails/movies/${movie._id}`}>
                        <img
                          src={`http://localhost:5000/${movie.image}`}
                          alt={movie.image}
                          className="product-image w-full h-72"
                        />
                      </Link>

                      <div className="content">
                        <span className=" relative p-1 mt-2 text-white left-2 bg-red-600 text-xs font-semibold rounded-xl ">
                          {movie.category}
                        </span>
                        <h3 className=" text-xs font-semibold p-1 font-serif ">
                          {movie.title}
                        </h3>
                      </div>
                      <Link to={`/seriesDetails/series/${movie._id}`}>
                        <div className="product-details">
                          <h3 className=" p-2 text-sm">{movie.title}</h3>
                          <div className=" flex justify-between px-2">
                            <p className="ml-1 text-xs font-semibold text-red-600 font-serif">
                              {movie.country}
                            </p>
                            <p className=" ml-1 text-xs font-semibold text-white font-serif ">
                              {timeSince(movie.releaseDate)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 ">
          {/* LATEST SERIES */}
          <div className="latest_movies w-11/12 mx-auto p-1 mt-16 bg-darkRich rounded-lg ">
            <h5 className="title_container">LATEST SERIES</h5>
            <div className="hidden md:block lg:block">
              <div className="product-grid mt-2 mx-auto grid grid-cols-2 gap-2 lg:gap-2 p-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {seriesList.map((series) => (
                  <div
                    className="product-container overflow-hidden rounded-xl shadow-custom-lightBlue mt-2"
                    key={series.id}
                  >
                    <div
                      className="product relative"
                      style={{ textDecoration: "none" }}
                    >
                      <Link to={`/seriesDetails/series/${series._id}`}>
                        <img
                          src={`http://localhost:5000/${series.image}`}
                          alt={series.image}
                          className="product-image w-full h-72"
                        />
                      </Link>

                      <div className="content">
                        <span className=" relative p-1 mt-2 text-white left-2 bg-red-600 text-xs font-semibold rounded-xl ">
                          {series.category}
                        </span>
                        <h3 className=" text-xs font-semibold p-1 font-serif ">
                          {series.title}
                        </h3>
                      </div>
                      <Link to={`/seriesDetails/series/${series._id}`}>
                        <div className="product-details">
                          <h3 className=" p-2 text-sm">{series.title}</h3>
                          <div className=" flex justify-between px-2">
                            <p className="ml-1 text-xs font-semibold text-red-600 font-serif">
                              {series.country}
                            </p>
                            <p className=" ml-1 text-xs font-semibold text-white font-serif ">
                              {timeSince(series.releaseDate)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 ">
          {/* LATEST K-DRAMA */}
          <div className="latest_movies w-11/12 mx-auto p-1 mt-16 bg-darkRich rounded-lg ">
            <h5 className="title_container">LATEST K-DRAMA</h5>
            <div className="hidden md:block lg:block">
              <div className="product-grid mt-2 mx-auto grid grid-cols-2 gap-2 lg:gap-2 p-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {seriesList.map((series) => (
                  <div
                    className="product-container overflow-hidden rounded-xl shadow-custom-lightBlue mt-2"
                    key={series.id}
                  >
                    <div
                      className="product relative"
                      style={{ textDecoration: "none" }}
                    >
                      <Link to={`/seriesDetails/series/${series._id}`}>
                        <img
                          src={`http://localhost:5000/${series.image}`}
                          alt={series.image}
                          className="product-image w-full h-72"
                        />
                      </Link>

                      <div className="content">
                        <span className=" relative p-1 mt-2 text-white left-2 bg-red-600 text-xs font-semibold rounded-xl ">
                          {series.category}
                        </span>
                        <h3 className=" text-xs font-semibold p-1 font-serif ">
                          {series.title}
                        </h3>
                      </div>
                      <Link to={`/seriesDetails/series/${series._id}`}>
                        <div className="product-details">
                          <h3 className=" p-2 text-sm">{series.title}</h3>
                          <div className=" flex justify-between px-2">
                            <p className="ml-1 text-xs font-semibold text-red-600 font-serif">
                              {series.country}
                            </p>
                            <p className=" ml-1 text-xs font-semibold text-white font-serif ">
                              {timeSince(series.releaseDate)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <a href="#top" className="top_page ">
          <ArrowUpward />
        </a>

        <StickyHeadTable />
      </div>
    </div>
  );
};

export default Home;
