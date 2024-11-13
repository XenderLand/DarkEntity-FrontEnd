import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";

import AdLayout from "./Admin/AdLayout";
//ADMIN
import Dashboard from "./Admin/Dashboard";
import Movies from "./Admin/Movies";
import Series from "./Admin/Series";
import Episodes from "./Admin/Episodes";
import Admin from "./Admin/Admin";
import SeriesDetails from "./Pages/SeriesDetails";
import MoviesDownload from "./Pages/MoviesDownload";
import SeriesDownload from "./Pages/SeriesDownload";

export const URL = process.env.REACT_SERVER_URL;

function App() {
  return (
    <div className="App font-robo">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="seriesDetails/:type/:id" element={<SeriesDetails />} />
            <Route path="downloadMovies/:id" element={<MoviesDownload />} />
            <Route path="downloadSeries/:id" element={<SeriesDownload />} />
          </Route>

          <Route path="/ad" element={<AdLayout />}>
            <Route path="admin" element={<Admin />} />
            <Route path="dash" element={<Dashboard />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
