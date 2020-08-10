/**
 * @param {string} s
 * @return {number}
 */

const numberToRoman = function (n) {
  let newNumber = n.toString();
  firstDigit = parseInt(newNumber[0]);
  console.log(firstDigit);
  secDigit = parseInt(newNumber[1]);
  console.log(secDigit);
  if (firstDigit == 1) {
    firstDigit = "X";
  } else if (firstDigit === 2) {
    firstDigit = "XX";
  } else if (firstDigit === 3) {
    firstDigit = "XXX";
  } else if (firstDigit === 4) {
    firstDigit = "XL";
  } else if (firstDigit === 5) {
    firstDigit = "L";
  } else if (firstDigit === 6) {
    firstDigit = "LX";
  } else if (firstDigit === 7) {
    firstDigit = "LXX";
  } else if (firstDigit === 8) {
    firstDigit = "LXXX";
  } else if (firstDigit === 9) {
    firstDigit = "XC";
  }
  console.log(firstDigit);
  if (secDigit === 0) {
    secDigit = "";
  } else if (secDigit === 1) {
    secDigit = "I";
  } else if (secDigit === 2) {
    secDigit = "II";
  } else if (secDigit === 3) {
    secDigit = "III";
  } else if (secDigit === 4) {
    secDigit = "IV";
  } else if (secDigit === 5) {
    secDigit = "V";
  } else if (secDigit === 6) {
    secDigit = "VI";
  } else if (secDigit === 7) {
    secDigit = "VII";
  } else if (secDigit === 8) {
    secDigit = "VIII";
  } else if (secDigit === 9) {
    secDigit = "IX";
  }
  return `${firstDigit}${secDigit}`;
};

victory = numberToRoman(28);
console.log(victory);
