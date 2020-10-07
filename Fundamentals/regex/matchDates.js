function matchDates(dates) {
    let correctFormat = /\b(?<day>\d{2})([-./])(?<month>\w+)\2(?<year>\d{4})\b/g;
    while ((validDate = correctFormat.exec(dates[0])) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates([
    '13/Jul/1928, 10-Nov-1934, 25.Dec.1937'
])


/*
Write a program, which matches a date in the format "dd{separator}MMM{separator}yyyy".
Compose the Regular Expression
Every valid date has the following characteristics:
⦁	Always starts with two digits, followed by a separator
⦁	After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar).
⦁	After that, it has a separator and exactly 4 digits (for the year).
⦁	The separator could be either of three things: a period ("."), a hyphen ("-") or a forward slash ("/")
⦁	The separator needs to be the same for the whole date (e.g. 13.03.2016 is valid, 13.03/2016 is NOT). Use a group backreference to check for this.
*/