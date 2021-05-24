import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./Components/card.css";
import Info from "./Components/Info";
import Nav from "./Components/Nav";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (data.length > 0) {
          setLoading(false);
        }
      });
  }, []);
  //console.log(data);
  return (
    <div>
      <>
        <Nav />
        <Info />
      </>
      <div className="row">
        {data.map((item, i) => {
          return (
            <Cards
              key={i}
              name={item.name}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
