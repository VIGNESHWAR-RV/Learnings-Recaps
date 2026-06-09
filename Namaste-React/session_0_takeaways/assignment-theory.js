/*

1. Emmet
---------

Emmet is a vs-code feature to help write repetitive code with minimal typing.
we can write in shorthand format and generate multiple lines of code 

2. Difference between a Library and Framework?
----------------------------------------------

    Framework
    ---------
      A pre-set of tools and features added already in order to develop a full fledged application (  or ) its APIs
      we can say it as collection of libraries.

      Example 
        Angular is a client side Single Page Application ( SPA ) framework.
           by default, its provides support for 
                routing,
                data binding,
                store
                component definition and so on 
        
        Express JS is a server side framework 
           by default, it provides support for
               url routing and handlers
               middleware support
               "view" rendering engines
               and support to all node JS APIs

    Library
    -------
      A library is more like a module written to achieve reusability of specific functionalities with required customization.
      Its more like creating a declarative approach of the functionality by abstracting the imperative code underneath.

      Example 
         React is a client side SPA library
           by default, it supports for
              component style definition
              data binding, one way data flow
              store like behaviour ( useContext )
           it doesn't offer
              client side routing

           what it abstracts
              dom manipulation ( diffing & reconcilation )

         Material UI is a react based CSS library
           by default, it provides
              re-usable pre-styled react based UI components
              theming such components

           what is abstracts
              css definition and manipulation 
              component specific functionalities ( tabs, carousel, table, datepicker )

3. What is CDN? Why do we use it?
---------------------------------
               
   CDN - content Delivery Network 
        main purpose is to improve the content delivery speed by keeping content close to user's area
        content is cached in the delivery network, so that even when the request to server is failed, it is responsed from cache.  
                
4. Why is React known as React?
-------------------------------
   React is named due to the reactive nature of the library to state updates.
   React is able to quickly update the DOM without reloading the whole page.
   It uses virtual DOM to efficiently update the DOM

5. What is crossorigin in script tag?
-------------------------------------
   crossorigin is a html attribute to allow fetching resources from external domains
   it is available in link, script, img, video, audio  

6. Difference between React and ReactDOM
----------------------------------------
   React package includes all the core functionalities ( React Element creation, ( Vitual DOM creation / diff / updation ) React Fibre , Priority engine ) 
   basically all functionalities of render phase
   ReactDOM includes all the browser related functions to update the changes from Virtual DOM to actual DOM
   basically all functionalities of commit phase

7. Difference between react.development.js and react.production.js CDN files
----------------------------------------------------------------------------
   
   react.development.js
   --------------------
      rich warnings, detailed source codes, strict mode additional checks to help development
      3-5 times slower and heavier than production code
      file size - 28.7 kB
      load time ~ 70-100 ms ( not accurate ) depends on location to cdn, ISP connection speed, network range
   react.production.js
   -------------------
      minified, compressed, stripped of warning logs and built for execution speed
      file size - 4.7 kB
      load time ~ 60-90 ms ( not accurate )

8. Difference between async and defer
-------------------------------------
   - Both are used to load javascript without blocking the html parsing
   - files downloaded with async, block the html parsing for execution as soon as they download
   - files downloaded with defer, wait for html parsing to complete and begin their execution
   - when script tag are defined with defer, js file executes in the order of their script tag definitions.
   - both async and defer won't work on script tags with inline scripts

*/
