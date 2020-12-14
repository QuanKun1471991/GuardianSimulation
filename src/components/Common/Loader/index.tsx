import { FunctionComponent } from "react";
import "assets/styles/loader.scss";

const Loader: FunctionComponent = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
