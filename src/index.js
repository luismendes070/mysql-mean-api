 /* global process, _ */

 import _ from "lodash";
 import printMe from "./print.js";

 if ("serviceWorker" in navigator) {
   window.addEventListener("load", () => {
     navigator.serviceWorker
       .register("/service-worker.js")
       .then((registration) => {
         console.log("SW registered: ", registration);
       })
       .catch((registrationError) => {
         console.log("SW registration failed: ", registrationError);
       });
   });
 }

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

// export component Index document.body.appendChild(component());

