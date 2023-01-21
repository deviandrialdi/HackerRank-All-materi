function gradingStudents(grades: number[]): number[] {
  // Write your code here

  let newGrades: number[] = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let multiple: number = grades[i] / 5;
      multiple = Math.ceil(multiple) * 5;
      let rest: number = multiple - grades[i];
      if (rest < 3) {
        newGrades[i] = multiple;
      } else {
        newGrades[i] = grades[i];
      }
    } else {
      newGrades[i] = grades[i];
    }
  }
  return newGrades;
}
