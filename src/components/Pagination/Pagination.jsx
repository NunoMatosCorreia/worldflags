import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import FlagsContext from "../../context/FlagsContext";
import "./Pagination.css";

function Pagination({ setPageNumber, FlagsPerPage }) {
  const { flags } = useContext(FlagsContext);

  const pageCount = Math.ceil(flags.length / FlagsPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageCount={pageCount}
      onPageChange={pageChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      containerClassName="pagination-buttons"
      pageLinkClassName="pages-buttons"
      previousLinkClassName="previous-button"
      nextLinkClassName="next-button"
      breakLinkClassName="break-pagination"
      disabledLinkClassName="disabled-button"
      activeLinkClassName="active-link"
    />
  );
}

export default Pagination;
