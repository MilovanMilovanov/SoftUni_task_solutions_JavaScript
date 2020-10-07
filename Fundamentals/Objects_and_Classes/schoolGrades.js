function schoolGrades(studentInfoInput) {
    let studentInfo = new Map();

    studentInfoInput.forEach(info => {
        let [name, ...grades] = info.split(' ');
        if (studentInfo.has(name)) {
            grades = studentInfo.get(name).concat(grades);
        }
        studentInfo.set(name, grades);
    });

    let getAverageGrade = grades => grades.map(Number).reduce((a, b) => a + b) / grades.length;
    let sortedByAverageGrade = [...studentInfo]
        .sort((a, b) => getAverageGrade(a[1]) - getAverageGrade(b[1]))
        .forEach(([name, grades]) => console.log(`${name}: ${grades.join(', ')}`));
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])


/*
Write a function to store students with all of their grades.
If a student appears more than once, add the new grades. At the end print the students sorted by average grade.
The input comes as array of strings.
*/