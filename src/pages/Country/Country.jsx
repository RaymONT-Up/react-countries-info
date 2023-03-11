import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  console.log(params);
  return <div>test</div>;
};

export default Country;
