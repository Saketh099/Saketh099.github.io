// Exercise 1: minMaxAverage
function minMaxAverage(numbers) {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / totalNumbers;

    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average}`);
}

// Test cases for Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);  // Test case 1
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);  // Test case 2
minMaxAverage([10, 15, 8, 5, 19, 3]);      // Test case 3


// Exercise 2: countVowels
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    console.log(`${str}: ${count} vowels`);
}

// Test cases for Exercise 2
countVowels("Winter");  // Test case 1
countVowels("Hello");   // Test case 2
countVowels("Apple");   // Test case 3


// Exercise 3: sortNumbers
function sortNumbers(numbers) {
    const sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}], Sorted Array: [${sortedArray}]`);
}

// Test cases for Exercise 3
sortNumbers([9, 4, 6, 2]);   // Test case 1
sortNumbers([15, 10, 5, 20]); // Test case 2
sortNumbers([3, 1, 8, 12]);  // Test case 3


// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    const celsiusValue = parseFloat(celsius);
    const fahrenheit = (celsiusValue * 9/5) + 32;
    console.log(`${celsiusValue.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise 4
celsiusToFahrenheit(30);      // Test case 1
celsiusToFahrenheit(0);       // Test case 2
celsiusToFahrenheit(-10);     // Test case 3
celsiusToFahrenheit("35");    // Test case 4 (string input)
celsiusToFahrenheit("100");   // Test case 5 (string input)


// Exercise 5: sortPeopleByAge
function sortPeopleByAge(people) {
    const sortedPeople = people.sort((a, b) => a.age - b.age);
    const introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions.join("\n"));
}

// Test cases for Exercise 5
const people1 = [
    {name: 'Alice', age: 23, city: 'New York'},
    {name: 'Bob', age: 30, city: 'Chicago'},
    {name: 'Charlie', age: 25, city: 'Los Angeles'},
    {name: 'David', age: 21, city: 'Miami'},
    {name: 'Eve', age: 35, city: 'Seattle'}
];
sortPeopleByAge(people1);  // Test case 1

const people2 = [
    {name: 'John', age: 40, city: 'Austin'},
    {name: 'Sarah', age: 28, city: 'Denver'},
    {name: 'Mark', age: 33, city: 'Dallas'},
    {name: 'Emma', age: 22, city: 'Houston'},
    {name: 'James', age: 37, city: 'San Antonio'}
];
sortPeopleByAge(people2);  // Test case 2