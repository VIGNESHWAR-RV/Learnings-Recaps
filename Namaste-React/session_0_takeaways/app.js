const root = ReactDOM.createRoot(document.getElementById("root")); 
// element where ReactDOM creates its root and renders react elements (object) as html elements (objects)

const welcomeReact = React.createElement(
 "h1", // tag name
 {id: "1",  // tag attributes as object
  name: "Header",
  "media": "mobile", // custom attributes is also can be passed
  "children": "Hello from props overriding children" // wont work as its being overriden by third parameter
  },
  "Hello World from React!" // (also we can pass React element object as third argument to support nested React elements)
  // (while React el conerting to HTML el) 
     // if its primitive (), it is inserted to html tag with innerText ( not innerHTML )
     // if its non-primitive ( [one || array] of react element object ), creates the respective html and inserts to parent element 
     // if its non-primitive ( non React element object ), throws an error

  //   NOTE : if third param is array of react element objects , 
  // key property should be given for each element object in its attribute object (second param) while its creation
  );

  console.log(welcomeReact); // prints React element object 

root.render(welcomeReact); // converts React Element Object into HTMLElement Object and inserts under root.


// const header1 = React.createElement("h1", {id: "header1",media:"mobile", key: 1}, "this is header1 tag");
// const header2 = React.createElement("h1", {id: "header2",media:"mobile", key: 2}, "this is header2 tag");
// const headersParent = React.createElement("div", {id: "header's parent"}, [header1, header2]);
// const headersParentsParent = React.createElement("div", {id: "header's parent's parent"}, headersParent);

// root.render(headersParentsParent);
