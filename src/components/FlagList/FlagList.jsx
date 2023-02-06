import React, { useContext, useState } from "react";
import FlagsContext from "../../context/FlagsContext";
import FlagCard from "./FlagCard/FlagCard";
import Pagination from "../Pagination/Pagination";

function FlagList() {
  const { flags, setFlags } = useContext(FlagsContext);

  // Variables needed to do the pagination
  const [pageNumber, setPageNumber] = useState(0);
  const FlagsPerPage = 9;
  const pagesVisited = pageNumber * FlagsPerPage;
  const displayFlags = flags.slice(pagesVisited, pagesVisited + FlagsPerPage);

  return (
    <div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        {flags
          ? displayFlags.map((flag, index) => (
              <div key={index}>
                <FlagCard {...flag} />
              </div>
            ))
          : null}
      </div>
      {flags.length > 6 ? (
        <Pagination FlagsPerPage={FlagsPerPage} setPageNumber={setPageNumber} />
      ) : null}
    </div>
  );
}

export default FlagList;
