/* 1.Question

Write a function that takes a string as input and returns the string in reverse order. 
The function should reverse all characters in the given string while preserving 
spaces, numbers, and special characters.
o A single string input. 
o The string may contain: 
      ▪ Uppercase and lowercase English letters 
      ▪ Digits (0–9) 
      ▪ Spaces 
      ▪ Special characters

Expected result
o Return a new string with all characters in reverse order.

Example
o Input: Hello World!
o Output: !dlroW olleH */

function Reverse_String(str){
    return str.split("").reverse().join("");
}
console.log(Reverse_String("Abi_@CSE-006"));

/* 2. Question

Write a function that takes an array of integers as input and returns a new array 
containing only the unique elements. The order of the first occurrence of each 
element should be preserved.
o A single array containing integers. 
o The array may contain duplicate values.

Expected result
o Return a new array with all duplicate values removed. 
o The elements should appear in the same order as their first occurrence in the 
input array.

Example
o Input: [1, 2, 2, 3, 4, 4, 5]
o Output: [1, 2, 3, 4, 5]*/

console.log(removeDuplicates([1,2,3,3,4,5,6,3,4]));
function removeDuplicates(arr){
    return arr.filter((value,index) => arr.indexOf(value) == index);
}

/*3. Question
Write a function that takes an array of student objects as input and groups for the 
employees based on their department. The function should return an object where:Each key is a department name, The corresponding value is an array of employees 
belonging to that department, The order of employees within each department 
should remain the same as in the input array.
o A single array of student-containing objects. 
o Each student object contains: 
o id (number): Unique student ID. 
o name (string): Student name. 
o department (string): Department name.

Expected result
o Return an object where:
▪ Each key represents a department. 
▪ Each value is an array of student objects belonging to that 
department.

Example
o Input: [ { "id": 1, "name": "Alice", "department": "Mechanical" }, { "id": 2, 
"name": "Bob", "department": "CSE" }, { "id": 3, "name": "Charlie", 
"department": "Mechanical" }, { "id": 4, "name": "David", "department": 
"ECE" } ]
o Output: { "Mechanical": [ { "id": 1, "name": "Alice", "department": 
"Mechanical" }, { "id": 3, "name": "Charlie", "department": "Mechanical" } ], 
"CSE": [ { "id": 2, "name": "Bob", "department": "CSE" } ], "ECE": [ { "id": 4, 
"name": "David", "department": "ECE" } ] } */

function group(students){
    let result = {};
    for (let i = 0; i < students.length; i++) {
         let dept = students[i].department;

         if(result[dept] == undefined){
           result[dept] = [];
         }

        result[dept].push(students[i]);
    }
    return result;
}
let students = [ { "id": 1, "name": "Alice", "department": "Mechanical" }, { "id": 2, 
"name": "Bob", "department": "CSE" }, { "id": 3, "name": "Charlie", 
"department": "Mechanical" }, { "id": 4, "name": "David", "department": 
"ECE" } ];
let result = group(students);
console.log(result);

/*4. Question
Write a function that takes an array of records, a page number, and a page size as 
input. The function should return only the records that belong to the requested 
page. Pagination divides a large dataset into smaller pages. Each page contains a 
fixed number of records determined by the page size.
o records: An array of records. 
o page: A positive integer representing the page number (1-based index). 
o pageSize: A positive integer representing the number of records per page.

Expected result
o Return an array containing only the records for the requested page.
o If the requested page exceeds the available pages, return an empty array.

Example
o Input: records = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], page = 1, pageSize = 3
o Output: [1, 2, 3]*/

function pagination(records,page,pagesize){
    let start = (page - 1) * pagesize;
    let end = start + pagesize;
    return records.slice(start,end);
}
let records = [1,2,3,4,5,6,7,8,9,10];
console.log(pagination(records,4,3));

/*5. Question
Write a function that searches for users by their name, ignoring letter casing 
(uppercase and lowercase). The function should return all users whose names 
contain the given search keyword, regardless of whether the characters are 
uppercase or lowercase.
o users: An array of user objects. 
o keyword: A string representing the search term.
o Each user object minimum contains:
▪ id (number): Unique user ID. 
▪ name (string): User's full name. 
▪ email (string): User's email address.

Expected result
o Return an array of user objects whose name contains the search keyword. 
o The search must be case-insensitive. 
o If no users match the search term, return an empty array.

Example
o Input: users = [
 { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
 { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
 { "id": 3, "name": "ALICE Cooper", "email": "acooper@example.com"}]
keyword = "alice"
o Output: [
 { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
 { "id": 3, "name": "ALICE Cooper", "email": "acooper@example.com" }]*/

 function Search(users, keyword)
 {
    return  users.filter(function(user){
        return user.name.toLowerCase().includes(keyword.toLowerCase());
    })
}
let users = [
 { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
 { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
 { "id": 3, "name": "ALICE Cooper", "email": "acooper@example.com"}]

let results = Search(users,"smith");
console.log(results);
 
/*6. Question
Write a function that sorts a list of products based on the specified sorting criteria.
The function should support the following sorting options:
Price (Ascending): Lowest price to highest price. 
Price (Descending): Highest price to lowest price. 
Name (A-Z): Alphabetical order by product name. 
Name (Z-A): Reverse alphabetical order by product name.
o products: An array of product objects. 
o sortBy: A string specifying the sorting criteria. It can be one of the following 
values: 
▪ "price-asc" 
▪ "price-desc" 
▪ "name-asc" 
▪ "name-desc"
o Each product object contains:
▪ id (number): Unique product ID. 
▪ name (string): Product name. 
▪ price (number): Product price.

Expected result
o Return a new array containing the sorted products. 
o If the input array is empty, return an empty array. 
o If sortBy contains an unsupported value, return the products in their original 
order.

Example
o Input:  products = [ { "id": 1, "name": "Laptop", "price": 800 }, { "id": 2, "name": 
"Mouse", "price": 25 }, { "id": 3, "name": "Keyboard", "price": 50 } ], sortBy = 
"price-asc"
o Output: [ { "id": 2, "name": "Mouse", "price": 25 }, { "id": 3, "name": 
"Keyboard", "price": 50 }, { "id": 1, "name": "Laptop", "price": 800 } ]*/

function sorting(products,sortBy){
    let resultss = [...products];
    if (sortBy == 'price-asc'){
        resultss.sort(function(a, b){
            return a.price - b.price;
        });
    }
    else if (sortBy == 'price-desc'){
        resultss.sort(function(a, b){
            return b.price - a.price;
        });   
    }
    else if (sortBy == 'name-asc'){
        resultss.sort(function(a, b){
            return a.name.localeCompare(b.name);
        });
    }
    else if (sortBy == 'name-desc'){
        resultss.sort(function(a, b){
            return b.name.localeCompare(a.name);
        });
    }
    return resultss;
}
let products = [ { "id": 1, "name": "Laptop", "price": 800 }, { "id": 2, "name": 
"Mouse", "price": 25 }, { "id": 3, "name": "Keyboard", "price": 50 } ];
let resultss = sorting(products,'name-asc');
console.log(resultss);

/*7. Question
Write a function that merges two arrays: one containing users and another 
containing departments. Each user has a departmentId that references the 
department they belong to. Your task is to attach the corresponding department 
information to each user. If a user's departmentId does not match any department, 
set the department field to null.
o users: An array of user objects.
departments: An array of department objects. 
o Each user contains:
▪ id (number): Unique user ID. 
▪ name (string): User's name. 
▪ departmentId (number): ID of the department the user belongs to. 
o Each department contains:
▪ id (number): Unique department ID. 
▪ name (string): Department name.

Expected result
o Return a new array where each user object includes a department property 
containing the matching department object. 
o If no matching department exists, set department to null.

Example
o Input: users = [
 { "id": 1, "name": "Alice", "departmentId": 101 },
 { "id": 2, "name": "Bob", "departmentId": 102 }
]
departments = [
 { "id": 101, "name": "Engineering" },
 { "id": 102, "name": "HR" }
]
o Output: [ { "id": 1, "name": "Alice", "departmentId": 101, "department": { "id": 
101, "name": "Engineering" } }, { "id": 2, "name": "Bob", "departmentId": 102, 
"department": { "id": 102, "name": "HR" } } ]*/

function merge(userss,departments){
    return userss.map(function(user){
        let department = departments.find(function(dept){
            return dept.id == user.departmentId;
        });
        return{
            id : user.id,
            name : user.name,
            departmentId : user.departmentId,
            department : department || null
        };
    });
}
let userss = [
 { "id": 1, "name": "Alice", "departmentId": 101 },
 { "id": 2, "name": "Bob", "departmentId": 102 }
]
departments = [
 { "id": 101, "name": "Engineering" },
 { "id": 102, "name": "HR" }
];
 
let resul = merge(userss,departments);
console.log(resul);

/*8. Question
Write a function that compares two objects representing the same entity and 
returns an object containing only the fields whose values have changed. The 
returned object should include the updated values from the new object. Fields with 
unchanged values should not be included.
o oldObject: An object representing the original data. 
o newObject: An object representing the updated data.
o Both objects:
▪ Contain the same set of fields.
May contain values of type string, number, boolean, or null.

Expected result
o Return an object containing only the fields whose values are different 
between oldObject and newObject. 
o The value of each field should be taken from newObject. 
o If no fields have changed, return an empty object ({}).

Example
o Input: oldObject = { "name": "Alice", "age": 25, "city": "New York" } newObject 
= { "name": "Alice", "age": 26, "city": "New York" }
o Output: { "age": 26 }*/

function find(oldObject,newObject){
    let final = {};
    let keys = Object.keys(oldObject);

    for(let i = 0;i < keys.length; i++) {
        let key = keys[i];

        if(oldObject[key] != newObject[key]){
            final[key] = newObject[key];
        }
    }
    return final;
}
let oldObject = {
     "name": "Alice", 
     "age": 25, 
     "city": "New York" 
};
let newObject = { 
   "name": "Alice", 
   "age": 26, 
   "city": "New York" 
};
let final = find(oldObject, newObject);
console.log(final);

/*9. Question
Write a function that validates a user's registration details, including email, 
password, and confirm password. The function should verify that:
The email is in a valid format. 
The password meets the required security rules. 
The confirm password matches the password. 
If all validations pass, return a success message. Otherwise, return the appropriate 
validation errors.
o Validation Rules
▪ Email
• Must not be empty. 
• Must be in a valid email format (e.g., user@example.com). 
▪ Password
• Must not be empty. 
• Must contain at least 8 characters. 
• Must contain at least: 
• One uppercase letter (A-Z) 
• One lowercase letter (a-z) 
• One digit (0-9) 
• One special character (e.g., !@#$%^&*()) 
▪ Confirm Password
• Must not be empty. 
• Must exactly match the password.
o email: User's email address.
password: User's password. 
o Confirm Password: Confirmation of the password.

Expected result
o Return a ValidationResult object:
▪ isValid: true if all validations pass; otherwise false. 
▪ errors: An array containing all validation error messages. Return an 
empty array if there are no errors.

Example
o Input: email = "john@example.com", password = "Password@123", 
confirmPassword = "Password@123"
o Output: { "isValid": true, "errors": [] }
o Input: email = "johnexample.com", password = "Password@123", 
confirmPassword = "Password@123"
o Output: { "isValid": false, "errors": [ "Invalid email format." ] }*/

function validate(email, password, confirmPassword){
    let errors = [];
    if(email == "" ){
        errors.push("email is required");
    }else{
        console.log("email is valid");
    }
    if(password.lenght < 8){
        error.push("password must be 8 char");
    }else{
        console.log("password lenght is valid");
    }
    if(!/[A-Z]/.test(password)){
        error.push("up letter required");
    }else{
        console.log("up is valid");
    }
    if(!/[a-z]/.test(password)){
        error.push("lp letter required");
    }else{
        console.log("lp is valid");
    }
    if(!/[0-9]/.test(password)){
        error.push("num required");
    }else{
        console.log("num is valid");
    }
    if(!/[!@$^&*]/.test(password)){
        error.push("spl symbol required");
    }else{
        console.log("spl symbol is valid");
    }
    if(password != confirmPassword){
        errors.push("pass not match");
    }else{
        console.log("pass match");
    }
    return{
        isValid : errors.lenght === 0,
        errors : errors
    };
}
let res = validate("john@example.com",
    "Password@123","Password@123");

console.log(res);

/*10.Question
You are developing a Student Management System where every student is 
assigned a unique sequential ID. Given an array of existing student IDs, identify all 
the missing IDs within the sequence. The sequence should start from the smallest 
ID in the array and end at the largest ID.
o studentIds: An array of unique integer student IDs. 
o The IDs may be in any order.
Expected result
o Return an array containing all missing student IDs in ascending order. 
o If no IDs are missing, return an empty array.
Example
o Input: studentIds = [101, 102, 104, 107]
o Output: [103, 105, 106] */

function miss(studentIds){
    let rest = [];
    let min = Math.min(...studentIds);
    let max = Math.max(...studentIds);

    for (let i = min; i<= max; i++){
        if(!studentIds.includes(i))
        {
            rest.push(i);
        }            
    }
    return rest; 
}
let studentIds = [101, 102, 104, 107];
let rest = miss(studentIds);
console.log(rest);

