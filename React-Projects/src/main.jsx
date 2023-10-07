import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click to visit Google.com",
// };
const anotherElement = (
  <a href="https://twitter.com" style={{ textAlign: "center" }}>
    {" "}
    <br /> Visit Twitter <br />{" "}
  </a>
);
const thirdElement = (
  <a href="https://linkedin.com" style={{ textAlign: "center" }}>
    Visit Linkedin
  </a>
);
const reactElement = React.createElement(
  "a",
  { href: "https://google.com" },
  "Click to visit Google.com",
  anotherElement,
  thirdElement
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
