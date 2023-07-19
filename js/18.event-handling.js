console.log('event-handling.js');

// Events are actions that are perfomed by client on DOM elements
// DOM events pass an Event object as an argument to the event handler functions.

// BOM events - 
// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)
// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


// DOM events - click, hover, change, submit, focus etc.
// Mouse Events - click, dbclick, mouseover, mouseout, mousemove
// Keyboard Events - keypress, keyup, keydown
// Focus Events - focus, blur, focusin, focusout
// Form Events - submit, reset, change


// Javascript Event Objects methods and properties
// event.detail - return no of times event occurred
// event.target.dataset.name - returns html data-name or data-id attribute values
// event.type
// event.which
// event.preventDefault()
// event.isDefaultPrevented()
// event.stopPropagation()
// event.isPropagationStopped
// event.data
// e.target.tagName



// event bubbling and event capturing


// e.target  vs e.currentTarget
// In JavaScript event handling, e.target and e.currentTarget are properties that provide information about the element on which an event occurred
// e.target refers to the element that triggered the event.
// e.currentTarget refers to the element to which the event listener is attached.
// e.target and e.currentTarget will be the same when the event occurs directly on the target element. 
// However, they can differ in cases where events propagate through nested elements or event delegation is used.


// e.preventDefault() vs e.stopPropagation()
// In the context of event handling in JavaScript, e.preventDefault() and e.stopPropagation() are methods 
// that can be used to modify the default behavior of events.
// e.preventDefault() is used to prevent the default behavior of an event from occurring. 
// Ex : clicking a link or submitting a form

// e.stopPropagation() stops the event from propagating to parent elements in the DOM tree.


// html event related attributes 
// (onclick, onchange, onsubmit, onfocus, onload, onblur, onkeypress, onkeyup, ondbclick, onmouseup, onmousedown, oninput)

// JSX event related attributes 
// (onClick, onChange, onSubmit, onFocus, onLoad, onBlur, onKeyPress, onKeyUp, onDoubleClick, onMouseUp, onMouseDown, onInput)

// in react onDbClick is not present instead react provide a attribute to handle double clicks
// <button onClick={singleClickHandler} onDoubleClick={doubleClickHandler}>Click</button>

function getDataSet(th,event){
    // console.log(th);
    // console.log(event.type);
    // console.log(th.dataset.name); //getdata-btn
    console.log(event.target.dataset.name);
}