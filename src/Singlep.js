import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function Singlep() {
  const [single, setsingle] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setsingle(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h1>{single.id}</h1>
      <p>{single.title}</p>
    </div>
  );
}
export default Singlep;
