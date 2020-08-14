/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (number) {
  const str = JSON.stringify(number);

  const individualChar = str.split("");
  console.log(individualChar);

  let mid = individualChar.length / 2;
  let iMax = individualChar.length - 1;
  console.log("mid", mid, Math.floor(mid));
  console.log(iMax);
  let resultArr = [];

  function checkFalse(element) {
    return element === false;
  }

  if (individualChar[0] === "-") {
    return false;
  } else {
    for (let i = 0; i <= Math.floor(mid); i++) {
      if (individualChar[i] === individualChar[iMax]) {
        resultArr.push(true);
      } else {
        resultArr.push(false);
      }
      console.log("i: ", i);
      console.log("iMax: ", iMax);
      console.log(individualChar[i]);
      console.log(individualChar[iMax]);
      iMax--;
    }

    console.log(resultArr);
    // console.log(resultArr.find(checkFalse));
    // console.log(typeof resultArr.find(checkFalse));
    if (resultArr.find(checkFalse) === false) {
      console.log("false");

      return false;
    } else {
      console.log("true");
      return true;
    }
  }
};

// console.log(isPalindrome(6168754));

isPalindrome(12251);
