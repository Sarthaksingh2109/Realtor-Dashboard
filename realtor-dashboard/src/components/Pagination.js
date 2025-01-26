import React from "react";
import { motion } from "framer-motion";
import "../styles/Pagination.css"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination">
      <motion.button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Previous
      </motion.button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <motion.button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
