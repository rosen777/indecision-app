'use strict';

console.log('App is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var numbers = [55, 101, 1000];

// create "Remova All button above list"
// on click -> wipe the array -> rerender

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          ' ',
          option,
          ' '
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', {
        type: 'text',
        name: 'option'
      }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();

// Create a renderfunction
// Call it right away
// Call it after options array is added to

// const user = {
//     name: 'Rosen',
//     age: 29,
//     location: 'London'
// }

// function getLocation(location) {
//    if (location) {
//        return <p>
//        Location: {location}
//         </p>
//    } else {
//        return undefined
//    }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     <p>{getLocation(user.location)}</p>
//   </div>
// );

// let count = 0;
// const addOne = () => {
//     count++
//     renderCounterApp()
// }

// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// Challenge
// Make button '-1'– setup minusOne function and register – log "minusOne"
// Make reset button "reset" – setup reset function – log "reset"

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
