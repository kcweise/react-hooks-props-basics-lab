import React from "react";

function Link(props) {
  return (
    <div>
        <h3>Links</h3>
        <a href= {props.github}>{props.github}</a>
        <br></br>
        <a href= {props.linkedin}>{props.linkedin}</a>
    </div>
             
  );
}

export default Link
