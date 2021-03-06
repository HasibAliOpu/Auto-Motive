import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";

import ProductCard from "./ProductCard";

const ManageProducts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("deletePart", () =>
    fetch("https://cryptic-ridge-95940.herokuapp.com/parts").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center text-3xl pt-6 text-error">Manage Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-16">
        {parts.map((part) => (
          <ProductCard key={part._id} part={part} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
