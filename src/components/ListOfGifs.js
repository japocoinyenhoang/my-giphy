import React, { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGifs({ params }) {
  const {keyword} = params
  const [loading, setLoading] = useState(true)
  const [gifs, setGifs] = useState([]);

  useEffect(
    
    function () {
      setLoading(true)
      getGifs({ keyword }).then((gifs) => setGifs(gifs), setLoading(false));
    },
    [keyword]
  );

  if(loading) return <i>Cargando ...❄️</i>


  return gifs.map(({ id, title, url }, index) => (
    <Gif key={index} title={title} url={url} id={id} />
  ));
}
