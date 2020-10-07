function schoolRegister(studentsArr) {
    let splitStudentsArr = studentsArr
        .slice(0)
        .map(student => student.split(', '))
        .map(student => student.map(e => e.split(': ')));
    let graduates = splitStudentsArr.filter(score => score[2][1] > 3);
    let sortGraduatesByGrade = graduates.sort((a, b) => a[1][1] - b[1][1]);
    let namesProperty = 'List of students';
    let anualGradeProperty = 'Average annual grade from last year';
    let result = '';


    while (sortGraduatesByGrade.length > 0) {
        let studentInfo = sortGraduatesByGrade[0];
        result += `\n${Number(studentInfo[1][1]) + 1} Grade\n`;

        graduates = {
            [namesProperty]: [],
            [anualGradeProperty]: 0
        };

        for (let currentStudent of sortGraduatesByGrade) {
            if (currentStudent[1][1] == studentInfo[1][1]) {
                graduates[namesProperty].push(currentStudent[0][1]);
                graduates[anualGradeProperty] += Number(currentStudent[2][1]);
            }
        }

        let removeStudents = graduates[namesProperty].length;
        sortGraduatesByGrade.splice(0, removeStudents);

        graduates[namesProperty] = graduates[namesProperty].join(', ');
        graduates[anualGradeProperty] = (graduates[anualGradeProperty] / removeStudents).toFixed(2);

        for (let key in graduates) {
            result += `${key}: ${graduates[key]}\n`;
        }
    }

    console.log(result);
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])


  
/*
In this problem you have to arrange all students by grade.
You as the secretary of the school principal will process students and store them into a school register before the new school year hits.
As a draft, you have a list of all the students from last year but mixed.
Кeep in mind that if a student has a lower grade than 3, he does not go into the next class.
As result of your work, you have to print the entire school register sorted in ascending order
 by grade already filled with all the students from last year in format:
{nextGrade} Grade
List of students: {All students in that grade}
Average annual grade from last year: {average annual grade on the entire class from last year}
And empty row {console.log}
The input will be array with strings, each containing a student's name, last year's grade,
and an annual grade. The average annual grade from last year should be formatted
to the second decimal point.
*/