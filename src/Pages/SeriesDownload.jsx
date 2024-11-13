import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Download } from "@mui/icons-material";

const DownloadPage = () => {
  const { id } = useParams();

  //   const [details, setDetails] = useState([]);

  //   const loadDetails = useCallback(async () => {
  //     const result = await axios.get(`http://localhost:5000/${type}/${id}`);
  //     setDetails(result.data);
  //   }, [id, type]);

  // const loadSeriesDetails = useCallback(async () => {
  //   const result = await axios.get(`http://localhost:5000/series/${id}`);
  //   setSeries(result.data);
  // }, [id]);

  const [episodesList, setEpisodesList] = useState([]);

  const loadEpisodes = useCallback(async () => {
    const result = await axios.get(`http://localhost:5000/episodes/${id}`);
    setEpisodesList(result.data);
  }, [id]);

  useEffect(() => {
    loadEpisodes();
  }, [loadEpisodes]);

  return (
    <div className=" p-20 bg-darkNavy h-screen text-lightBlue mt-12  ">
      <div className=" w-11/12 h-96 mx-auto shadow-custom-lightBlue">
        <div className=" flex justify-center gap-2 p-4">
          <span className="p-2">
            <Download fontSize="large" color="warning" />
          </span>
          <h2 className="  font-bold">{episodesList.seriesTitle}</h2>
        </div>

        <div className=" flex text-center p-2 gap-4 mb-2 border-b-2 border-b-lightBlue">
          {/* {product.discount === 0 ? (
            <p ></p>
          ) : (
            <p>
              <strong className=" text-lightBlue uppercase font-bold text-base">
                Genre:{" "}
              </strong>
              <span className="text-white text-base">{details.genre}</span>
            </p>
          )} */}

          {/* <p>
            <strong className=" text-lightBlue uppercase font-bold text-base">
              Genre:{" "}
            </strong>
            <span className="text-white text-base">{details.genre}</span>
          </p>
          <p>
            <strong className=" text-lightBlue uppercase font-bold text-base">
              Category:{" "}
            </strong>
            <span className="text-white text-base">{details.category}</span>
          </p>
          <p>
            <strong className=" text-lightBlue uppercase font-bold text-base">
              Origin/Country:{" "}
            </strong>
            <span className="text-white text-base">{details.country}</span>
          </p>
          <p>
            <strong className=" text-lightBlue uppercase font-bold text-base">
              Language:{" "}
            </strong>
            <span className="text-white text-base">{details.language}</span>
          </p> */}
          <p>
            <strong className=" text-lightBlue font-bold uppercase text-base">
              Uploaded:{" "}
            </strong>
            <span className="text-white text-base">
              {episodesList.postDate}
            </span>
          </p>

          <p>
            <strong className=" text-lightBlue font-bold uppercase text-base">
              {episodesList.season} -
            </strong>
            <span className="text-white text-base">
              {" "}
              {episodesList.episode}
            </span>
          </p>
        </div>

        <div className=" mt-4 p-4 text-center justify-center">
          <ul className=" ">
            <li key={episodesList._id}>
              <div className="load_btn">
                <Link to={episodesList.downloadLink}>
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
      </div>
    </div>
  );
};
export default DownloadPage;
