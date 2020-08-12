/**
 * @param {number} x
 * @return {number}
 */

const checkElement = document.getElementById("check");
// check if js file is connected to html
checkElement.innerText = `html`;

var reverse = function (x) {
  // convert number x to string
  const strNumber = JSON.stringify(x);
  // split into individual number
  let splitted = strNumber.split("");

  // to remove the - sign
  if (splitted[0] !== "-") {
    console.log(splitted);
  } else {
    splitted = splitted.splice(1);
    console.log("removed - :", splitted);
  }
  console.log(splitted);

  // initiate reversed string
  const revStr = [];

  // initiate the highest index
  let iMax = splitted.length - 1;
  console.log(iMax);

  // push invidual number(char) into the revStr array
  splitted.map((char) => {
    char = splitted[iMax];
    iMax--;
    revStr.push(char);
  });
  console.log("revStr", revStr);

  // join each individual number(char) from revStr array into a whole string
  const concat = revStr.join("");
  console.log(concat);
};

reverse(41684);
