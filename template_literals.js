/*
Template literals are a feature in JavaScript that allows for easier string interpolation, multi-line strings, and embedding expressions within strings. 
They are enclosed by backticks (`) rather than single or double quotes.

Features of Template Literals
    String Interpolation: Allows embedding expressions within strings using ${expression} syntax.
    Multi-line Strings: Supports multi-line strings without the need for concatenation.
    Tagged Templates: Provides a way to tag a template string to process it with a function
*/

/*
String Interpolation
    Template literals make it easier to include variables and expressions within strings.
*/
const name = 'JS';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);

/*
Multi-line Strings
    With template literals, you can create multi-line strings without using escape characters or concatenation.
*/

const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);

/*
Tagged Templates
Tagged templates allow you to parse template literals with a function. This can be useful for escaping strings, formatting, or even internationalization.
*/

function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => `${result}${string}<strong>${values[i] || ''}</strong>`, '');
}

const name_1 = 'JS';
const activity = 'coding';
const message = highlight`Hello, my name is ${name} and I love ${activity}.`;

console.log(message);
  