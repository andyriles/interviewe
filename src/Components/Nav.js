import React, { useState } from "react";
import "./card.css";

function Nav() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  return (
    <div>
      <input
        style={{
          height: "50px",
          width: "200px",
          marginLeft: "10%",
          marginBottom: "20px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Templates"
      />
      <div className={"nav"} style={{ float: "right", marginRight: "20%" }}>
        <span>Sort By</span>
        <select style={{ height: "30px", width: "200px", margin: "10px" }}>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            All
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
        </select>
        <select style={{ height: "30px", width: "200px", margin: "10px" }}>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            All
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
        </select>
        <select style={{ height: "30px", width: "200px", margin: "10px" }}>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            All
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
          <option value={"Agriculture"} onChange={(value) => setOption(value)}>
            Agriculture
          </option>
        </select>
      </div>
    </div>
  );
}

export default Nav;
