/*
Now we're going to look at some of the selectors that are used to select more than one element and they
return either an HTML collection or a node list, which are both similar to arrays.
*/

// document.getElementByClassName
const items = document.getElementsByClassName("collection-item");
console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[1].textContent = 'Hello';

// const listItmes = document.querySelector('ul').getElementsByClassName('collection-item')
// console.log(listItmes);

// document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis.length)
// console.log(lis[0]);
// lis[0].style.color = 'blue';
// lis[2].textContent = "hello";

// convert html collention into array
//Two different way to convert into array
// lis = Array.from(lis);
// lis = [...lis]; //spread operator
//now i can applied all the array methods and property on it.
// lis.reverse();

//since it's an array we can do forEach now !
// lis.forEach((li, index)=>{
//     console.log(li.className)
//     li.textContent = `${index}: hello`
// })


/*
So now let's take a look at query selector all, which is pretty much like these two, except it returns
what's called a node list.
And there are some differences.
A node list actually counts not just elements, but things like text nodes.
It also allows us to do things like for each and do some other array methods without having to convert
it.
*/

//document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item')
// console.log(items);

// items.forEach((item, index)=>{
//    item.textContent = `${index}: hello` 
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach((odd)=>{
//     odd.style.background = 'grey'
// }) 

// liOdd.forEach((even)=>{
//     even.style.background = 'yellow'
// }) 
// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4'
// }