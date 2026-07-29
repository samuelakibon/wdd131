const { createElement } = require("react");

const courses = [
  "CSE 110",
  "CSE 111",
  "WDD 130",
  "WDD 131",
  "WDD 231",
  "CSE 210"
];

// 1️⃣ map() courses to subject list

const subjects = document.querySelector('#subjects');
const coursesSubjects = courses.map(course =>course.split(" ")[0] );

coursesSubjects.forEach(subject => {
    const li = document.createElement('li');
    li.textContent = subject;
    subjects.appendChild(li);
});

// *************************************************************************************
const countries = [
  "Uganda",
  "United States",
  "Uruguay",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "Mexico",
  "Spain",
  "Turkey"
];

// 2️⃣ filter() countries to those starting with "U"
const uu = document.querySelector("#u");
const ucountries = countries.filter(country => country.charAt(0) === 'U');

ucountries.forEach(country =>{
    const li = document.createElement('li');
    li.textContent = country;
    uu.appendChild(li);
});


// *************************************************************************************
const fruits = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 1.2 },
  { name: "grape", price: 0.1 }
];

// 3️⃣ reduce() array of objects to total cost.
const initialValue = 0;

// The accumulator can be any name, the fruit.price is looking at the dictionary fruits, and picking each price
const total = document.querySelector("#total");
const totalCost = fruits.reduce((accumulator, fruit) =>
accumulator + fruit.price, initialValue);


document.getElementById(
  "total"
).textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    






// *************************************************************************************
const students = [
  { fullName: "Alice Johnson", state: "California, USA", class: "Mathematics" },
  {
    fullName: "Benjamin Lee",
    state: "Ontario, Canada",
    class: "Computer Science"
  },
  { fullName: "Chloe Smith", state: "London, UK", class: "Physics" },
  { fullName: "David Kim", state: "Seoul, South Korea", class: "Engineering" },
  { fullName: "Elena Rodriguez", state: "Madrid, Spain", class: "Biology" },
  { fullName: "Felix Müller", state: "Berlin, Germany", class: "History" }
];
// 4️⃣ loop through the array

const studentList = document.querySelector("#studentList")

students.forEach(student =>{
    const li = document.createElement('li');
    li.textContent = student.fullName;
    studentList.appendChild(li);
    
    
    
    console.log(student.fullName);
});

// *************************************************************************************
const products = [
  {
    name: "Widget A",
    partNumber: "WA-123",
    quantity: 50,
    price: 12.5
  },
  {
    name: "Gear B",
    partNumber: "GB-456",
    quantity: 100,
    price: 3.75
  },
  {
    name: "Lever C",
    partNumber: "LC-789",
    quantity: 25,
    price: 25.0
  },
  {
    name: "Bolt D",
    partNumber: "BD-012",
    quantity: 200,
    price: 0.5
  },
  {
    name: "Panel E",
    partNumber: "PE-345",
    quantity: 10,
    price: 50.0
  },
  {
    name: "Wire F",
    partNumber: "WF-678",
    quantity: 150,
    price: 1.25
  },
  {
    name: "Tube G",
    partNumber: "TG-901",
    quantity: 30,
    price: 18.0
  }
];
// 5️⃣ find first 'expensive' product

const productElement = document.getElementById("product");


const expensiveProduct = products.find(product => product.price > 20);


const p = document.createElement('p');
p.textContent = expensiveProduct.name;

productElement.appendChild(p);

// OR


document.getElementById("product").textContent =
  products.find((product) => product.price > 20)?.name || "No product found";



// *************************************************************************************
// 6️⃣ determine if Canada is contained within the array countries (see line 18)


document.getElementById("output").textContent = countries.indexOf("Canada")

