import React, { useEffect, useState } from "react";

const Show = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=friends");
      const data = await res.json();
      console.log(data);
      setShow(data);
    };
    fetchShow();
  }, []);
  return (
    <div className="">
      {show.map((y) => (
        // const images = y.show.image === null ? "" : y.show.image.original;

        <div key={y.show.id}>
          {/* <img className="border" src={images} alt="" /> */}
          <div>{y.show.id}</div>
        </div>
))}
    </div>
  );
};

export default Show;
