s = "12:05:39PM";

function timeConversion(s) {
  let isDay = s.substr(8, 2);
  let hour = parseInt(s.substr(0, 2));
  let last6 = s.substr(2, 6);
  let result;

  if (isDay === "AM") {
    if (hour === 12) {
      result = "00" + s.substr(2, 6);
    } else {
      result = s.substr(0, 8);
    }
  } else {
    if (hour === 12) {
      result = s.substr(0, 8);
    } else {
      let newHour = (hour + 12).toString();
      result = `${newHour}${last6}`;
    }
  }
  console.log(result);
  return result;
}

timeConversion(s);
