"use strict";

var visibility = false;

var appRoot = document.getElementById("app");

var onToggleClick = function onToggleClick() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onToggleClick },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "p",
      null,
      "Hey. These are some details you now see!"
    )
  );

  ReactDOM.render(jsx, appRoot);
};

render();
