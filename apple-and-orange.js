// console.log("kaka");

const s = 7;
(t = 11), (a = 5), (b = 15), (apples = [-2, 2, 1]), (orange = [5, -6]);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApp = [],
    countOra = [];

  for (let anApple of apples) {
    distApple = anApple + a;
    if (distApple >= s && distApple <= t) {
      countApp.push(anApple);
    }
  }
  for (let anOrange of oranges) {
    distOrange = anOrange + b;
    if (s <= distOrange && distOrange <= t) {
      countOra.push(anOrange);
    }
  }
  console.log(countApp.length);
  console.log(countOra.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
