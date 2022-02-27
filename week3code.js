//1

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// a.
console.log(ages[ages.length-1]- ages[0]);

// b.
ages.push(11);
console.log(ages);
console.log(ages[ages.length-1]-ages[0]);

// c.
var sum = 0;
for( var i = 0; i < ages.length; i++ ){
    sum += ages[i]
}

var avg = sum/ages.length;
console.log(sum/ages.length);

// 2.

var names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
console.log(names);

// a.

var total = 0;
for(let i = 0; i < names.length; i++){
    total+=names[i].length;
}
var average = total/names.length;
console.log(total/names.length);


// b.
console.log(names.join(' '));


// 3.
    names[names.length-1];
console.log(names[names.length-1]);

// 4. 
    names[0];
console.log(names[0]);

// 5.
let nameLengths = [];

for(let i=0;i <= names.length-1; i++){
    nameLengths.push(names[i].length)
}
    console.log(nameLengths)


 // 6.
let sumOfElements=0;
    for (let i = 0; i < nameLengths.length; i++) 
        sumOfElements += nameLengths[i]; 
   
        console.log(sumOfElements);        



// 7.
function wordRepeat(word, n) {
    for(let i = 1; i <= 3; i++){
        return word.repeat(n)
        
}
}wordRepeat("Hello", 3);
console.log(wordRepeat("Hello", 3))

     
// 8.
function fullName(firstName,lastName)
{
    return firstName + ' ' + lastName;
}
fullName('Toni','Spears');
console.log(fullName('Toni', 'Spears'));

// 9.
function arrayOfNumbers(num){
        if(num >100){
        return true
    }
}
console.log(arrayOfNumbers(num[i]));

// 10. 
function averageOfElements(array)
{
var sum = 0
for( var i = 0; i < array.length; i++ ){
    sum += array[i];
    return average
}
}array=[1,2,3,4,5]
var average = sum/array.length;
console.log(sum/array.length);



/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
first array is greater than the average of the elements in the second array. 

function twoArrays(array1,array2);
var array1=[1,2,3,4,5];
var array2= [2,4,6,8,10];




Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns 
true if it is hot outside and if moneyInPocket is greater than 10.50. 




Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 
*/