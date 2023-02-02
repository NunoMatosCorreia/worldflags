import React, { useContext } from "react";
import FlagsContext from "../../context/Flagcontext";
import FlagCard from "./FlagCard/FlagCard";

function FlagList() {
  const { flags, setFlags } = useContext(FlagsContext);

  return (
    <div>
      FlagList
      {flags ? flags.map((flag) => <FlagCard {...flag} />) : null}
    </div>
  );
}

export default FlagList;
