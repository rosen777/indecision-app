console.log('App is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById(
    "app"
);

const numbers = [55, 101, 1000]

// create "Remova All button above list"
// on click -> wipe the array -> rerender

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && (
                <p>{app.subtitle}</p>
            )}
            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No options"}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>
                Remove All
                           </button>
            <ol>

                {
                    app.options.map((option) => <li key={option}> {option} </li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="option"
                />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render()

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