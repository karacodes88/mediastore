//Pagination component

// draw the Pagination
export default function Pagination(props) {
  let pageNumbersCount = Math.ceil(props.pageItems / props.pageItemePerPage);
  let pageNumbers = [];
  for (let i = 0; i < pageNumbersCount; i++) {
    pageNumbers.push(
      <span key={i} onClick={props.changePage}>
        {" "}
        {i + 1}{" "}
      </span>
    );
  }
  return <div className="pageNation">{pageNumbers}</div>;
}

// import React from "react";

// const Pagination = (props) => {
//   function handleNumPage(e) {
//     props.setItemsPerPage(e.target.value);
//   }
//   return (
//     <>
//       <div className="Pages">
//         <form>
//           <form.Label>Items per page</form.Label>
//           <form.Control
//             as="select"
//             value={props.itemsCoutPerPage}
//             onChange={(e) => handleNumPage(e)}
//           >
//             <option value="select">Select</option>
//             <option value="3">3</option>
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//           </form.Control>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Pagination;
