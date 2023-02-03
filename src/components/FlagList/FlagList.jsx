import React, { useContext } from "react";
import FlagsContext from "../../context/Flagcontext";
import FlagCard from "./FlagCard/FlagCard";

function FlagList() {
  const { flags, setFlags } = useContext(FlagsContext);

  return (
    <div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        {flags
          ? flags.map((flag, index) => (
              <div key={index}>
                <FlagCard {...flag} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default FlagList;
