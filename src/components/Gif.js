import React from "react";
import "./Gif.css";
export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`}>
      <div className="gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img alt={title} src={url} />
      </div>
    </a>
  );
}
