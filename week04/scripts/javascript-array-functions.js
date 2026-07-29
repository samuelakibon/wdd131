/*

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
ABOVE IS THE ARRAY


Let's break it down step by step.

You have this array:

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

This array contains five strings.

Now look at this line:

let namesB = names.filter(name => name.charAt(0) === 'B');
Step 1: filter()

The filter() method goes through every item in the array and checks whether it meets a condition.

names.filter(...)

Think of it like this:

"Go through each name, and if the condition is true, keep it."

Step 2: name =>
name =>

This is an arrow function.

For every element in the array, JavaScript temporarily stores it in the variable name.

So it works like this:

Current Array Element	name becomes
'Nancy'	'Nancy'
'Blessing'	'Blessing'
'Jorge'	'Jorge'
'Svetlana'	'Svetlana'
'Bob'	'Bob'

It checks them one after another.

Step 3: name.charAt(0)

This is the part you're asking about.

charAt() is a string method.

It returns the character at a specific position (index).

The syntax is

string.charAt(index)

For example:

let word = "Blessing";

console.log(word.charAt(0));

Output:

B

Why?

Because every string has numbered positions.

Blessing

Index:

0 1 2 3 4 5 6 7 8
B l e s s i n g

So

word.charAt(0)

means

"Give me the character at index 0."

which is

"B"

More examples:

let word = "Blessing";

word.charAt(0);   // B
word.charAt(1);   // l
word.charAt(2);   // e
word.charAt(3);   // s
word.charAt(4);   // s
Another example
let word = "Samuel";

word.charAt(0); // S
word.charAt(1); // a
word.charAt(2); // m
word.charAt(3); // u
Step 4: === 'B'

Now we compare the first letter.

name.charAt(0) === 'B'

means

"Is the first letter equal to 'B'?"

It returns either true or false.

Let's see what happens for every name.
First iteration
name = "Nancy"
name.charAt(0)

returns

"N"

Then JavaScript asks

"N" === "B"

Result

false

So "Nancy" is not kept.

Second iteration
name = "Blessing"
name.charAt(0)

returns

"B"

Now

"B" === "B"

Result

true

So "Blessing" is kept.

Third iteration
name = "Jorge"
"J" === "B"

Result

false

Not kept.

Fourth iteration
name = "Svetlana"
"S" === "B"

Result

false

Not kept.

Fifth iteration
name = "Bob"
"B" === "B"

Result

true

Kept.

Finally, the new array becomes

["Blessing", "Bob"]
Visual summary
Array
 ↓

Nancy
│
└── charAt(0)
      ↓
      N
      ↓
N === B ?  ❌

Blessing
│
└── charAt(0)
      ↓
      B
      ↓
B === B ?  ✅

Jorge
│
└── charAt(0)
      ↓
      J
      ↓
J === B ? ❌

Svetlana
│
└── charAt(0)
      ↓
      S
      ↓
S === B ? ❌

Bob
│
└── charAt(0)
      ↓
      B
      ↓
B === B ? ✅

Result:

["Blessing", "Bob"]
A more modern alternative

You'll often see the same check written with bracket notation instead of charAt():

let namesB = names.filter(name => name[0] === 'B');

Here, name[0] also means "the first character of the string." Both approaches work, but name[0] is more common in modern JavaScript because it's shorter and easier to read.

So the "name" can be any string then

Exactly! name is just a variable name. It could have been almost anything.

For example, these all do the same thing:

let namesB = names.filter(name => name.charAt(0) === 'B');
let namesB = names.filter(person => person.charAt(0) === 'B');
let namesB = names.filter(student => student.charAt(0) === 'B');
let namesB = names.filter(x => x.charAt(0) === 'B');

The variable on the left side of => is called a parameter. During each iteration of filter(), it temporarily holds the current element from the array.

For your array:

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

When you write:

names.filter(name => name.charAt(0) === 'B');

JavaScript is effectively doing this behind the scenes:

// First iteration
let name = "Nancy";

// Second iteration
let name = "Blessing";

// Third iteration
let name = "Jorge";

// Fourth iteration
let name = "Svetlana";

// Fifth iteration
let name = "Bob";

Each time, name refers to one string from the array.

Why call it name?

Because it makes the code easier to understand. If your array contained numbers, you might write:

let numbers = [10, 20, 30];

numbers.filter(number => number > 15);

If it contained fruits:

let fruits = ['Apple', 'Banana', 'Orange'];

fruits.filter(fruit => fruit.charAt(0) === 'B');

Here, fruit is just a descriptive parameter name for each element.

A small rule to remember

The parameter can be any valid variable name:

names.filter(item => item.charAt(0) === 'B');

But whatever name you choose, you must use it consistently inside the function:

✅ Correct:

names.filter(person => person.charAt(0) === 'B');

❌ Incorrect:

names.filter(person => name.charAt(0) === 'B');

This causes an error because name doesn't exist in that function—only person does.

So yes, name can be any valid variable name, and during each pass through the array it temporarily represents the current string being examined.

Explain the below, especially the total:

names.reduce((total, name) => total + name.length, 0) / names.length;

This is a great question because reduce() is one of the most confusing array methods at first. Once you understand what total is doing, it becomes much easier.

Let's look at the code:

names.reduce((total, name) => total + name.length, 0) / names.length;

Suppose we have:

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
Step 1: What is reduce()?

reduce() takes all the values in an array and reduces them to a single value.

It can produce:

one number
one string
one object
one array

The syntax is:

array.reduce((accumulator, currentValue) => {
    // do something
}, initialValue);

Your code uses:

(total, name)

Here,

total = accumulator
name = current item

So JavaScript could also have written

(accumulator, currentName)

They are the same thing.

Step 2: What does the 0 mean?
names.reduce((total, name) => total + name.length, 0)

The last number

0

is the starting value of total.

Before JavaScript even looks at the first name,

total = 0
Step 3: First iteration

Current name:

"Nancy"

Length:

"Nancy".length

is

5

Now evaluate

total + name.length

which is

0 + 5

Result:

5

Now JavaScript updates

total = 5
Step 4: Second iteration

Current name:

"Blessing"

Length:

9

Now

5 + 9

Result

14

So

total = 14
Step 5: Third iteration

Current name

"Jorge"

Length

5

Now

14 + 5

Result

19

So

total = 19
Step 6: Fourth iteration
"Svetlana"

Length

9

Now

19 + 9

Result

28
Step 7: Fifth iteration
"Bob"

Length

3

Now

28 + 3

Result

31

Now the loop ends.

The reduce() returns

31
Where did 31 come from?

It's simply

Nancy      = 5
Blessing   = 9
Jorge      = 5
Svetlana   = 9
Bob         = 3
----------------
Total      = 31

So

names.reduce((total, name) => total + name.length, 0)

returns

31
Why is it called total?

Because it keeps a running total.

Think of it like a calculator.

Start at

0

Then

0
↓
+5
↓
5
↓
+9
↓
14
↓
+5
↓
19
↓
+9
↓
28
↓
+3
↓
31

That running value is stored in total.

Then why divide by names.length?

Remember,

reduce(...)

returned

31

There are

names.length

which is

5

So the final calculation is

31 / 5

which equals

6.2

This is the average number of letters in the names.

Visual representation
Iteration	name	name.length	total before	total after
Start	—	—	0	0
1	Nancy	5	0	5
2	Blessing	9	5	14
3	Jorge	5	14	19
4	Svetlana	9	19	28
5	Bob	3	28	31

Finally:

31 / 5

returns

6.2
An easier way to think about total

Imagine you're adding money in a wallet:

let wallet = 0;

wallet += 100; // 100
wallet += 50;  // 150
wallet += 20;  // 170

The variable wallet is just keeping a running total. In reduce(), total plays the same role—it starts at the initial value (0 here) and is updated after each element until the array has been processed.








*/