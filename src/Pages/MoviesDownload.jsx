import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Download } from "@mui/icons-material";

const MoviesDownload = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const loadDetails = useCallback(async () => {
    const result = await axios.get(
      `https://darkentity.onrender.com/movies/${id}`
    );
    setDetails(result.data);
  }, [id]);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  return (
    <div className=" p-20 bg-darkNavy h-screen text-lightBlue mt-12  ">
      <div className=" w-11/12 h-96 mx-auto shadow-custom-lightBlue">
        <div className=" flex justify-center gap-2 p-4">
          <span className="p-2">
            <Download fontSize="large" color="warning" />
          </span>
          <h2 className="  font-bold">{details.title}</h2>
        </div>
        <div className=" flex text-center p-2 gap-4 mb-2 border-b-2 border-b-lightBlue">
          <p>
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
          </p>
          <p>
            <strong className=" text-lightBlue font-bold uppercase text-base">
              Uploaded:{" "}
            </strong>
            <span className="text-white text-base">{details.postDate}</span>
          </p>
        </div>

        <div className=" mt-4 p-4 text-center justify-center">
          <ul className="">
            <li key={details._id}>
              <div className="load_btn">
                <Link to={details.downloadLink}>
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
export default MoviesDownload;
