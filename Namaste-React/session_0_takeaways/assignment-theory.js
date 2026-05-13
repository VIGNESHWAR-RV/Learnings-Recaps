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

*/