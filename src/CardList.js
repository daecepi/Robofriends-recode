import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
  return (
    <>
    {
      robots.map(robot => (<Card {...robot} />))
    }
    </>
  )
}

export default CardList;