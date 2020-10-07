function pointsValidation(arrNumbers) {
    let x1 = arrNumbers.shift();
    let y1 = arrNumbers.shift();
    let x2 = arrNumbers.shift();
    let y2 = arrNumbers.shift();
    let result = '';

    function distanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    let IsDistanceIntegerX1Y1 = Number.isInteger(distanceBetweenPoints(x1, y1, 0, 0));
    let isDistanceIntegerX2Y2 = Number.isInteger(distanceBetweenPoints(x2, y2, 0, 0));
    let isDistanceIntegerBetweenAllPoints = Number.isInteger(distanceBetweenPoints(x1, y1, x2, y2));

    if (IsDistanceIntegerX1Y1) result += `{${x1}, ${y1}} to {0, 0} is valid\n`;
    else result += `{${x1}, ${y1}} to {0, 0} is invalid\n`;

    if (isDistanceIntegerX2Y2) result += `{${x2}, ${y2}} to {0, 0} is valid\n`;
    else result += `{${x2}, ${y2}} to {0, 0} is invalid\n`;

    if (isDistanceIntegerBetweenAllPoints) result += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid\n`;
    else result += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;

    console.log(result);
}
pointsValidation(
    [3, 0, 0, 4]
)


/*
Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point and the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. A distance between two points is considered valid, if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid". 
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
The input consists of two points given as an array of numbers.
For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid, or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.
*/