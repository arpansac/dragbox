// code for closures
// var multiply = function(m){
// 	return function(n){
// 		return m *n;
// 	}
// }

// using a loop to store functions inside an array
// this will return the last value of i because it stores only the references
// var myClosure = function(arr){
// 	for (var i = 0; i < 10; i++){
// 		arr[i] = function(){
// 			return i;
// 		}
// 	}
// 	return arr;

// }
// console.log(arr);
// arr[1]();
// arr[2]();


// To overcome this we will use IIFE
// var myClosure = function(arr){
// 	var myId = 10;
// 	for (var i = 0; i < 10; i++){
// 		// basically this function needs to be called later
// 		arr[i] = function(){
// 			return i;
// 		}(i)
// 	}
// 	return arr;

// }
// console.log(arr)

// but IIFE invokes/calls the function which stores the value of i 
// instead of a function in the arr;


// to overcome even that, we do the following
// var myClosure = function(arr){
// 	var myId = 10;
// 	for (var i = 0; i < 10; i++){
// 		// basically this function needs to be called later
// 		arr[i] = function(j){
// 			return function(){
// 				return j;
			// }
// 		}(i)
// 	}
// 	return arr;

// arr[1]();
// arr[2]();

// prototyping + Constructor pattern
// var Animal = function(name){
// 	this.name = name;
// }

// Animal
// Animal.prototype
// Animal.prototype.speak = function(){
// 	console.log(this.name + ' speaks');
// }

// var dog = new Animal('dog')
// dog.name
// dog.speak();


// var dragOnKeyPress = function(){

// 	var box = document.querySelector('#my-box');
// 	var currentX = box.getBoundingClientRect().x;
// 	var currentY = box.getBoundingClientRect().y;

// 	document.addEventListener('keypress', function(event){
// 		var boxWidth = box.getBoundingClientRect().width;
// 		var boxHeight = box.getBoundingClientRect().height;
// 		if(event.keyCode == 115){
// 			if (currentY + boxWidth < window.innerHeight){
// 				currentY += 10;
// 				box.style.top = currentY + 'px';
// 			}
			
// 		}else if(event.keyCode == 100){
// 			if (currentX + boxHeight < window.innerWidth){
// 				currentX += 10;
// 				box.style.left = currentX + 'px';
// 			}
// 		}

// 		console.log(window.innerHeight, window.innerWidth, currentX, currentY);
// 	});

// }


var dragOnKeyPress = function(){

	var myBox = document.querySelector('#my-box');

	var currentX = myBox.getBoundingClientRect().left;
	var currentY = myBox.getBoundingClientRect().top;

	

	var dragBox = function(){
		var newX = Math.floor(Math.random() * window.innerWidth);
	var newY = Math.floor(Math.random() * window.innerHeight);
		myBox.style.top = newY + 'px';
		myBox.style.left = newX + 'px';
	}


	myBox.addEventListener('mouseover', dragBox);

}


window.addEventListener('load', dragOnKeyPress);