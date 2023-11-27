/*

1. Working with variables
    ( importance: 2 )
   Declare two variables: admin and userName.
   Assign the value "John" to userName.
   Copy the value from userName to admin.
   Show the value of admin using alert (must output “John”).

2. Giving the right name
    ( importance: 3 )
   Create a variable with the name of our planet. How would you name such a variable?
   Create a variable to store the name of a current visitor to a website. How would you name that variable?

3. Uppercase const?
    ( importance: 4 )
   Examine the following code:
    const birthday = '18.04.1982';
    
    const age = someCode(birthday);

*/


// ----------------------------- ANSWER 1 --------------------------------------------

let admin;
let userName;

userName = "John";
admin = userName;

alert(admin);

// ----------------------------- ANSWER 2 ----------------------------------------------

let planetName = "earth";
let activeUserName = "RV";

// ----------------------------- ANSWER 3 -----------------------------------------------

function getAge(dob) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const dobDate = new Date(dob);
    const dobYear = dobDate.getFullYear();
    return currentYear - dobYear;
}

const BIRTHDAY = '04/18/1982';
const age = getAge(BIRTHDAY);

// since birthday is constant , it is declared with const and UPPERCASE.
// since age is a calculated value, it is declared with const and lowercase


