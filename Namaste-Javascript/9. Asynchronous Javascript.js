

/*

  Synchronous Vs Asynchronous

   - Javascript is a synchronous single threaded language
      it will always execute synchronously ( one by one )
      it will always execute in single thread ( single call stack )

      but it can execute in multi thread as well ( based on environment support )

      synchronous execution
      ---------------------
        - line by line execution

        - Javascript Engine is responsible for executing the javascript synchronously.

        Process
        -------
            in javascript engine, the code is parsed and tokens are generated for all the keywords in code.
            then the tokens are passed to syntax parser to create AST ( Abstract Syntax Tree )
            then AST is interpreted ( line by line conversion to byte code ) and compiled ( optimized to produce efficient machine code ) from feedback of interpretation. ( JIT compilation )
              ( different engines have different interpretation and compilation techniques )
            then the code is executed in the call stack with data stored in heap memory of JS Engine. ( execution context with two phases ( memory allocation & code execution) ).

            Read more : https://medium.com/@dogukanakkaya/deep-dive-into-javascript-engines-blazingly-fast-%EF%B8%8F-fc47069e97a4
        
      asynchronous execution
      ----------------------
        - proceeding to next line of execution instead of waiting for time consuming tasks to complete.
          - once such tasks are completed , the registered callback/suspended functions will be executed. 

        - Javascript run-time environment in browser has required programs to execute javascript asynchoronously
            Javascript Engine + ( Web API, callback queue ( task queue ), microtask queue, event loop )

          Web API 
          -------
            additional functionalities defined in browser for accessing web. 
              ex: 
                DOM API - eventListener, observers
                timer - setTimeout, setInterval
                storage - localStorage, sessionStorage, cookies
                network - fetch
                console - console.log, console.error, console.warn, console.table, console.count
                ..... 
                .... list goes on

                Read more : https://developer.mozilla.org/en-US/docs/Web/API

          Callback/Microtask queue
          ------------------------
            queue data structure which holds the registered callbacks of any asynchronous task in an order of their completion ( First In First out )

          Event Loop
          ----------
            program which keeps callstack in check in order to execute the queued callbacks, when callstack is free.


        Process
        -------
          - All ( user-event listeners, observers, promises, setTimeout, setInterval ) callbacks are registered in web API.
          - once the ( user-events/observers/promises/setTimeout/setInterval ) triggers/completes the registered callbacks are pushed to callback queue and microtask queue based on it's priority.
          - Event loop will keep checking callstack in JS engine whether it is empty.
              if callstack is empty and if there are callbacks in microtask queue / callback queue, 
                event loop will invoke the registered callback function which will be executed in callstack. ( order of invocation depend on position of callback in queue )

        
        Note 🚨
        -------
          - the order of callback invocation depend on which queue ( callback / microtask ) and callback's position in those queue.
          
          Microtask queue has more priority than callback queue ( task queue ), 
            so callbacks in microtask queue will be invoked first than callbacks in task queue.

          Callbacks that go in Microtask queue - promise callbacks, mutation Observer callbacks, callbacks from ( queueMicrotask() )

          Callbacks that go in callback queue ( task queue ) - user-event callbacks, setTimeout, setInterval, code in console, code under <script> tag
          
          event loop will invoke every callback function in microtask queue and removes the invoked one from queue. ( First in First out )
            once microtask queue is emptied, then it moves to the callback queue ( task queue ) and invoke the callbacks present in order.
    
          STARVATION OF TASK IN TASK QUEUE
          --------------------------------
          condition where callbacks in microtask queue creates more callbacks in microtask queue and not letting event loop to execute callbacks in ( task queue ).
          its a bad practise and should be avoided.

*/
