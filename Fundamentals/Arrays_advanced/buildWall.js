function buildAwall(arrStrings) {
    let amountConcrete = [];
    let cost = 0;
    let sections = arrStrings
        .filter(sectionHeight => sectionHeight < 30)
        .map(Number);
        
    while (sections.length > 0) {
        if (sections.includes(30)) {
            sections = sections.filter(e => e != 30);
        } else {
            sections.map((_, i) => sections[i] += 1);
            amountConcrete.push(sections.length * 195);
            cost += sections.length * 195;
        }
    }
    console.log(`${amountConcrete.join(', ')}\n${cost * 1900} pesos`);
}
buildAwall(
    [17, 22, 17, 19, 17]
)


/*
Write a program that keeps track of the construction of a 30-foot wall. You will be given an array of strings that must be parsed as numbers, representing the initial height of mile-long sections of the wall, in feet. Each section has its own construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete. All crews work simultaneously (see examples), meaning all sections that aren't completed (are less than 30 feet high) grow by 1 foot every day. When a section of the wall is complete, its crew is relieved. 
Your program needs to keep track of how much concrete is used daily until the completion of the entire wall. At the end, print on a single line, separated by comma and space, the amount of concrete used each day, and on a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 
Input 
Your program will receive an array of strings representing numbers as a parameter. 
Output 
Print on the console on one line the amount of concrete used each day separated by comma and space, and on a second line, the final cost of the wall. 
Constraints 
The wall may contain up to 2000 sections (2000 elements in the initial array) 
Starting height for each section is within range [0…30] 
*/