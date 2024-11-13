// src/App.js
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const Throbber = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* Your Throbber's main content goes here */}
          <h1 className="text-center text-3xl font-bold mt-20">
            Welcome to the Throbber
          </h1>
        </div>
      )}
    </div>
  );
};

export default Throbber;
