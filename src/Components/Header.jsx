// Header.jsx
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import "../CSS/Home.css";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { ArrowDropDownSharp } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { VideoCameraBack } from "@mui/icons-material";

//  const auth = JSON.parse(localStorage.getItem('user'));
//  const Logout = () => {
//   localStorage.removeItem('user');
//   window.location.href = '/'; // Redirect to login page after logout
// };

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const result = await axios.get(
          `https://darkentity.onrender.com/search?query=${query}`
        );
        setSuggestions(result.data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(""); // Clear the search query
    setSuggestions([]); // Clear the suggestions
    navigate(`/seriesDetails/${suggestion._id}`);
  };

  const handleBlur = () => {
    // Delay the clearing of suggestions to allow click event to register
    setTimeout(() => {
      setSuggestions([]);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="head-page">
      <header className=" lg:fixed text-lightBlue flex p-3 top-0 w-full justify-between ">
        <Link
          to="/"
          className=" text-2xl no-underline text-lightBlue font-bold border-lightBlue border-b-2 ">
          Dark
          <span className="text-darkNavy text-2xl italic bg-lightBlue p-1 rounded-tl-3xl rounded-br-3xl">
            Entity
            <VideoCameraBack />
          </span>
        </Link>
        <nav className=" flex ">
          <ul className=" list-none flex  p-0 m-0 justify-between">
            <li className=" relative ">
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown relative">
              <Link to="/movies">
                Movies
                <span className="arrow">
                  <ArrowDropDownSharp color=" " />
                </span>
              </Link>
              <ul className="dropdown-content list-none ">
                <li>
                  <Link to="/movies/action">Action</Link>
                </li>
                <li>
                  <Link to="/movies/drama">Sci-fi</Link>
                </li>
                <li>
                  <Link to="/movies/comedy">Romantic</Link>
                </li>
                <li>
                  <Link to="/movies/comedy">Comedy</Link>
                </li>
                <li>
                  <Link to="/movies/drama">Drama</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/series">
                Series
                <span class="arrow">
                  <ArrowDropDownSharp color=" " />
                </span>
              </Link>
              <ul class="dropdown-content">
                <li>
                  <Link to="/series/action">American</Link>
                </li>
                <li>
                  <Link to="/series/comedy">K- Drama</Link>
                </li>
                <li>
                  <Link to="/series/drama">Comedy</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className=" block text-lightBlue text-center px-3 py-1 no-underline hover:bg-lightBlue hover:text-darkRich "
                href="/">
                K-Drama
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" relative flex " ref={searchInputRef}>
          <input
            type="text"
            id="search"
            placeholder="Search....."
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={handleBlur}
            className=" w-80 h-7 bg-lightBlue text-darkRich border-0 placeholder:text-darkRich font-bold p-2 rounded-tl-lg rounded-bl-lg"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions hover:text-white absolute top-full left-0 shadow-custom-lightBlue bg-darkNavy max-h-96 overflow-y-auto rounded-lg ">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion._id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className=" p-3 pointer border-b-2 border-b-lightBlue truncate overflow-hidden">
                  {/* <Link to={`/${suggestion.type}/${suggestion._id}`}> */}
                  <Link
                    className="hover:text-white"
                    to={`/seriesDetails/${suggestion._id}`}>
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="light_btn">
            <Link onClick={handleSearchChange}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Search
              <Search fontSize="small" />
            </Link>
          </div>
        </div>
        <div className=" flex gap-3">
          <div className="light_btn">
            <Link to="/ad/admin">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Admin <AdminPanelSettingsIcon fontSize="small" />
            </Link>
          </div>

          <div className="light_btn">
            <Link to="/register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              login <LoginIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
