import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Download } from "@mui/icons-material";
import "../CSS/Home.css";

const SeriesDetails = () => {
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
  const { id, type } = useParams();
  const [details, setDetails] = useState(null);

  const loadDetails = useCallback(async () => {
    const result = await axios.get(`http://localhost:5000/${type}/${id}`);
    setDetails(result.data);
  }, [id, type]);

  // const loadSeriesDetails = useCallback(async () => {
  //   const result = await axios.get(`http://localhost:5000/series/${id}`);
  //   setSeries(result.data);
  // }, [id]);

  const [episodesList, setEpisodesList] = useState([]);
  const loadEpisodes = useCallback(async () => {
    if (type === "series") {
      const result = await axios.get("http://localhost:5000/episodes");
      setEpisodesList(result.data);
    }
  }, [type]);

  useEffect(() => {
    loadDetails();
    loadEpisodes();
  }, [loadDetails, loadEpisodes]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className=" w-full min-h-screen p-16 bg-darkRich">
      <div className=" text-white  w-4/5 mx-auto mt-14 p-20 rounded-xl shadow-custom-lightBlue bg-darkNavy">
        <h2 className=" text-center text-lightBlue text-5xl mt-2">
          {details.title}
        </h2>
        <div className="w-4/6 text-center mx-auto ">
          <img
            src={`http://localhost:5000/${details.image}`}
            alt={details.image}
            className=" w-4/5 h-auto mt-6 mx-auto"
          />
        </div>

        <p className="p-2 mt-2">
          <strong className=" font-bold text-lightBlue text-lg ">
            Casts:{" "}
          </strong>
          <span className=" text-white justify-start text-center text-base ">
            {details.cast}
          </span>
        </p>
        <div className=" flex mt-2 border-b-lightBlue border-b-2 pb-4 justify-between ">
          <p>
            <strong className=" text-lightBlue font-bold text-lg">
              Genre:{" "}
            </strong>
            <span className="text-white text-base">{details.genre}</span>
          </p>
          <p>
            <strong className=" text-lightBlue font-bold text-lg">
              Category:{" "}
            </strong>
            <span className="text-white text-base">{details.category}</span>
          </p>
          <p>
            <strong className=" text-lightBlue font-bold text-lg">
              Origin/Country:{" "}
            </strong>
            <span className="text-white text-base">{details.country}</span>
          </p>
          <p>
            <strong className=" text-lightBlue font-bold text-lg">
              Language:{" "}
            </strong>
            <span className="text-white text-base">{details.language}</span>
          </p>

          <p>
            <strong className=" text-lightBlue font-bold text-lg">
              Release:{" "}
            </strong>
            <span className="text-white text-base">
              {timeSince(details.releaseDate)}
            </span>
          </p>
        </div>

        <div className=" flex text-center justify-center mt-4 p-2">
          <iframe
            width="808"
            height="523"
            src={details.trailer}
            title="YouTube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <p>
          <strong className=" text-lightBlue font-bold text-lg">
            Updated:{" "}
          </strong>
          <span className="text-white text-base">
            {timeSince(details.postDate)}
          </span>
        </p>
        {type === "series" && (
          <>
            <p>
              <strong className=" text-lightBlue font-bold text-lg">
                Total Episodes:{" "}
              </strong>
              <span className="text-white text-base">{details.episodes}</span>
            </p>
            <h3 className="border-b-2 border-b-lightBlue ">Episodes</h3>
            <ul className=" text-center justify-center ">
              {episodesList
                .filter((episode) => episode.seriesTitle === details.title)
                .map((episode) => (
                  <li key={episode._id}>
                    <div className="load_btn flex justify-center text-center ">
                      <div className="p-2 mt-2 mr-4">
                        <p>
                          <strong className=" text-lightBlue font-bold text-lg">
                            {episode.season} -
                          </strong>
                          <span className="text-white text-base">
                            {" "}
                            {episode.episode}
                          </span>
                        </p>
                      </div>

                      <Link to={`/downloadSeries/${episode._id}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Download
                        <Download />
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
        {type === "movies" && (
          <>
            <h3 className="border-b-2 border-b-lightBlue ">Download</h3>
            <div className=" text-center justify-center ">
              <ul>
                <li>
                  <div className="load_btn">
                    <Link to={`/downloadMovies/${details._id}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Download
                      <Download />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeriesDetails;
