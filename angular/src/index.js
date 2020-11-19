 /* global process, _ */

// import { Sequelize, Jsonproduct } from "./database.ts";

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