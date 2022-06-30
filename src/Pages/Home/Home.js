import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Tasks from "../Tasks/Tasks";

const Home = () => {

  return (
    <div className="container grid lg:grid-cols-2 lg:px-40 px-5 lg:gap-x-5 mx-auto">
<Tasks/>
    </div>
  );
};

export default Home;
