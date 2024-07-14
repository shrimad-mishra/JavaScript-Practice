/*
----------------------------------------------------------------
|                           Event Loop                         |
----------------------------------------------------------------
         |                           |                           |
         |                           |                           |
         V                           |                           |
   +--------------+                  |                           |
   |   Callback   |                  |                           |
   |   Queue      |                  |                           |
   +--------------+                  |                           |
         ^                           |                           |
         |                           |                           |
         |                           |                           |
         |                           |                           |
   +--------------+                  |                           |
   |   Timer      |                  |                           |
   |   Queue      |                  |                           |
   +--------------+                  |                           |
         ^                           |                           |
         |                           |                           |
         |                           |                           |
         |                           |                           |
   +--------------+                  |                           |
   |   I/O        |                  |                           |
   |   Queue      |                  |                           |
   +--------------+                  |                           |
         ^                           |                           |
         |                           |                           |
         |                           |                           |
         |                           |                           |
         |                           |                           |
   +--------------+                  |                           |
   |   Event      |                  |                           |
   |   Queue      | <----------------+                           |
   +--------------+                                              |
         ^                                                       |
         |                                                       |
         |                                                       |
         +-------------------------------------------------------+


Explanation:

    1. Event Queue: This queue holds events and callbacks. When an asynchronous operation completes or an event occurs (like a click or a timer), 
        the corresponding callback function is pushed into this queue.
    2. Event Loop: Monitors the Call Stack and the Event Queue. It picks functions from the Event Queue and pushes them onto the Call Stack when the stack is empty, 
        ensuring they are executed in order.
    3. Call Stack: Maintains the current execution context. Functions are pushed onto the stack as they are called and popped off when they complete.

Process:

    1. Execute Synchronous Code: Any synchronous code is executed immediately and pushed onto the Call Stack.
    2. Handle Asynchronous Events: Asynchronous operations (like timers, I/O operations, or events) are handled by APIs provided by the browser or Node.js. 
        When these operations complete, their callback functions are pushed to the respective queues (Timer Queue, I/O Queue, or Event Queue).
    3. Event Loop: Continuously checks if the Call Stack is empty. If it is, the Event Loop takes the first function from the Event Queue and pushes it onto the Call Stack, 
        where it is executed.

This cycle continues, allowing JavaScript to handle asynchronous operations efficiently without blocking the main thread, thus ensuring responsiveness in web applications.
*/

// Explanition using code

console.log("Start");

setTimeout(function() {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(function() {
  console.log("Promise resolved");
});

console.log("End");

/*
1. **Console Log "Start"**: This is a synchronous operation that logs "Start" to the console immediately.
2. **setTimeout**: Schedules a callback function to be executed after a specified delay (in this case, 0 milliseconds). This operation is asynchronous.
3. **Promise Resolve**: Executes a callback function asynchronously when the Promise resolves.
4. **Console Log "End"**: Another synchronous operation that logs "End" to the console.

### Event Loop Diagram:

```
------------------------------------------------------------------
|                           Event Loop                           |
------------------------------------------------------------------
         |                           |                           |
         |                           |                           |
         V                           |                           |
   +--------------+                  |                           |
   |   Callback   |                  |                           |
   |   Queue      |                  |                           |
   +--------------+                  |                           |
         ^                           |                           |
         |                           |                           |
         |                           |                           |
         |                           |                           |
   +--------------+                  |                           |
   |   Timer      |                  |                           |
   |   Queue      | <----------------+                           |
   +--------------+                                              |
         ^                                                       |
         |                                                       |
         |                                                       |
         |                                                       |
         +------------------------+                              |
         |                        |                              |
         V                        V                              |
   +--------------+        +--------------+                      |
   |   setTimeout |        |   Promise    |                      |
   |   (0ms delay)|        |   Resolve    |                      |
   +--------------+        +--------------+                      |
         ^                        ^                              |
         |                        |                              |
         |                        |                              |
         +------------------------+                              |
                                                                 |
   +--------------+                                              |
   |   Call Stack |                                              |
   +--------------+                                              |
         |                                                       |
         |                                                       |
         V                                                       |
   +--------------+                                              |
   | console.log  | <-- Logs "Start"                             |
   +--------------+                                              |
         |                                                       |
         |                                                       |
         V                                                       |
   +--------------+                                              |
   | console.log  | <-- Logs "End"                               |
   +--------------+                                              |
         |                                                       |
         |                                                       |
         V                                                       |
   +--------------+                                              |
   |              |                                              |
   |  (Wait for   | <-- Waits for Timer or Promise to resolve    |
   |   Event)     |                                              |
   |              |                                              |
   +--------------+                                              |
         |                                                       |
         |                                                       |
         V                                                       |
   +--------------+                                              |
   | console.log  | <-- Logs "Timeout callback"                  |
   +--------------+                                              |
         |                                                       |
         |                                                       |
         V                                                       |
         |                                                       |
         |                                                       |
         +-------------------------------------------------------+
```

### Explanation:
- **Initial Execution**: The synchronous operations (`console.log("Start")`, `setTimeout`, `Promise.resolve()`, `console.log("End")`) are added to the Call Stack one by one and 
    executed.
- **Asynchronous Operations**: `setTimeout` and `Promise.resolve()` are handled by the browser's APIs. They are pushed to their respective queues (`Timer Queue` and `Callback Queue`).
- **Event Loop**: Monitors the Call Stack and the queues. Once the Call Stack is empty, it picks the functions from the queues and pushes them onto the Call Stack for execution.

### Sequence:
1. **Start**: Logs "Start" immediately.
2. **setTimeout** and **Promise Resolve**: These are asynchronous operations and are handled by the browser's APIs. They schedule their respective callback functions 
    (`setTimeout` callback and `Promise.then` callback) to be executed later.
3. **End**: Logs "End" immediately.
4. **Timeout callback**: After the Call Stack is empty (after "End" is logged), the Event Loop picks the `setTimeout` callback from the Timer Queue and executes it, 
    logging "Timeout callback" to the console.

*/