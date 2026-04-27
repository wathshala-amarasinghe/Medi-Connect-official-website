import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <img src="https://res.cloudinary.com/dkupkmm4o/image/upload/v1773902554/Medi-Connect-Logo_tdlayt.png" alt="logo" className="loader-logo" />
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;