//ProductList

import React, { useState, useEffect } from "react";

import Product from "./Product";
import Pagination from "./Pagination";

export default function ProductList({ data, addToBasket }) {
  let currentPageNumber = 1;
  let curpageStart = 1;
  let curpageEnd = 5;

  let firstSearch = data.slice(curpageStart, curpageEnd);
  const [filteredPage, setFilteredPage] = useState(firstSearch);

  // useEffect update the results when data changed
  useEffect(() => {
    let newResults = data.slice(curpageStart, curpageEnd);
    setFilteredPage(newResults);
  }, [data]);

  // change the page slice the array
  function changePage(e) {
    currentPageNumber = e.target.innerHTML;
    curpageStart = currentPageNumber * curpageEnd - curpageEnd;
    curpageEnd = curpageStart + curpageEnd;
    let newResults = data.slice(curpageStart, curpageEnd);
    setFilteredPage(newResults);
  }

  console.log("data", data);
  return (
    <div>
      {filteredPage.map((product) => (
        <Product
          key={product.trackId}
          product={product}
          addToBasket={addToBasket}
          ProductList
        />
      ))}
      <Pagination
        pageItems={data.length}
        changePage={changePage}
        pageItemePerPage={curpageEnd}
      />
    </div>
  );
}
