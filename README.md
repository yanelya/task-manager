# React
---
React is a single-page web application

You code in the `src` file

`src` contains index.js and App.js

index.js creates the root which renders App.js (hence, it being a single-page web application)

## App.js
---
App.js can be interpreted as the main file

It's where you make all your component calls instead of putting all your code in the single file 

## Returns in React
---
the code inside the return() contains JSX (JavaScript XML (Extensible Markup Language)) code

You can only return a single JSX element, so everything must be inside the <div> tag

When returning, we must only return a single element, is why we wrap our html in a div, to return that element

JSX expressions must have only have 1 parent element

## UseState
---
useState is a Hook

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

1st variable is state and 2nd is function to update state

Putting Tasks array in App.js rather than in a component makes it global rather than local and so accessible to other components

## Components
---
Components are reusable code 

so in the parenthesis, we can pass props into a component & use it as an object
- component(prop){return)()}

we can destructure that object by doing {color, text} in the parenthesis for example
- component({color, text}){return()}

we can then use these props, or "arguments", in the function by printing {text} in a tag, for instance

and doing an inline style by doing style={{backgroundColor : color}}

## More React Information
---
Curly braces { } are special syntax in JSX used to evaluate a JavaScript expression during compilation.

Parenthesis are used in an arrow function to return an object.

States get passed down, actions get passed up

It is not necessary to add a semicolon in JavaScript. 

JavaScript engine automatically inserts a semicolon at the first possible opportunity on a line after a return statement.

React Props are like function arguments in JavaScript and attributes in HTML.

tasks={tasksprop} taking tasksprop prop and passing into component that has tasks "parameter"

## Directories
---
"/" is root directory
"./" is current directory
"../" is the parent of current directory
"../../" parent of parent directory and so on

## Notes
---
() => ({ name: 'Amanda' })
 
is the same as:

() => {
   return { name : 'Amanda' }
}