import React from "react";
import MicroFrontend from "./Microfrontend";

function Container() {
  const getMfeOrigin =(port:string|undefined='')=> `${window.location.protocol}//${window.location.hostname}:${port}`;

  return (
    <div style={{backgroundColor:'darkgray',padding:'5px'}}>
      <h1>Hello from container</h1>
      <MicroFrontend name={"Microfrontend1"} host={getMfeOrigin(process.env.REACT_APP_MICROFRONTEND_1)} />
      <MicroFrontend name={"Microfrontend2"} host={getMfeOrigin(process.env.REACT_APP_MICROFRONTEND_2)} />
    </div>
  );
};

export default Container;
