import React from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import "./Spinner.scss";
const Spinner = () => {
  const { loading } = GlobalProvider();
  return (
    <>
      {loading && (
        <div>
          <div className="spinner-border text-primary tamSpinner" role="status">
             <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
