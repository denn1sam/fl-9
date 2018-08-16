const a = parseFloat(prompt(`Please enter firs side of the triangle`));
const b = parseFloat(prompt(`Please enter second side of the triangle`));
const angle = parseFloat(prompt(`Please enter angle`));

const perLimit = 178;
const angleSum = 180;
const alpha = Math.PI/angleSum * angle;

const c = Math.sqrt(a*a + b*b - 2 * a*b*Math.cos(alpha));

const square = 1 / 2 * a * b * Math.sin(alpha);
const perimeter = a + b + c;

if(a > 0 && b > 0 && angle > 0 && angle < perLimit) {
    var condition1 = `c length: ` + +c.toFixed(2) + `\nTriangle square: ` +
    +square.toFixed(2) + `\nTriangle perimeter: ` +
    +perimeter.toFixed(2);
} else {
    var condition2 = `Invalid data`;
}

if (condition1 !== undefined) {
    var fill = condition1;
} else if (condition2 !== undefined) {
    fill = condition2;
}

console.log(fill);

