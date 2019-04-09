let visibility = false

const appRoot = document.getElementById("app");

const onToggleClick = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const jsx = (
      <div>
        <h1>Visibility Toggle</h1>
          <button onClick={onToggleClick}>
            {visibility ? "Hide details" : "Show details"}
          </button>
          {visibility && (
            <p>Hey. These are some details you now see!</p>
          )}
      </div>
    );   

    ReactDOM.render(jsx, appRoot);

}

render()