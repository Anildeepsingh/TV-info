import React from "react";

const Card = (props) => {
  const { details, state } = props;
  console.log(details)
  let data;
  let id;
  if (state === "people") {
    data = details?.person;
    id = details?.person?.id;
  } else if (state==="shows")
    data = details?.show;
    id = details?.show?.id;
    
    const images = data?.image? data.image.medium : "";
    return(
        <div className="m-3 border-2 h-5/5 overflow-hidden">
        <h3 className="text-xl">{data.name}</h3> 
        <img src={images}/>
        <div className="">{data.summary}</div>
        </div>
    )
};

export default Card;
