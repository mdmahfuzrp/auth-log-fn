import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { cardsData } from "../../Data/Data";
const MainDash = ({ user }) => {
  console.log(user);
  return (
    <div className="MainDash">
      <h1 style={{ textTransform: "capitalize" }} className="dashboard-title">
        Dashboard
      </h1>
      <Cards cardsData={cardsData} />
      <Table />
    </div>
  );
};

export default MainDash;
