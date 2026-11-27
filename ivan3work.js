const marks = [85, 64, 91, 48, 72];

let competent = 0;
let highest = marks[0];
let total = 0;

for (const mark of marks) {
    total = total + mark;

    if (mark >= 70) {
        competent++;
    }

    if (mark > highest) {
        highest = mark;
    }
}

let average = total / marks.length;

console.log("Competent students: " + competent);
console.log("Highest mark: " + highest);
console.log("Average mark: " + average);