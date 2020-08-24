console.log("object");

grades = [1, 37, 38, 40, 52, 54, 77, 56];

function gradingStudents(grades) {
  const result = [];
  for (let aGrade of grades) {
    if (aGrade < 38) {
      result.push(aGrade);
    } else {
      if (aGrade % 5 === 3) {
        aGrade = aGrade + 2;
        result.push(aGrade);
      } else if (aGrade % 5 === 4) {
        aGrade = aGrade + 1;
        result.push(aGrade);
      } else {
        result.push(aGrade);
      }
    }
  }
  console.log("result:", result);
  return result;
}

gradingStudents(grades);
