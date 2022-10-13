/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello(){
  console.log('hello world')
}
sayHello()


/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
function print(message){
  console.log(message)
}
print(' print a message')

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
function printMessage(message){
  console.log('Todays message is: '+message)
}
printMessage('complete the assessment')

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function getSquard(a) {
    return a ** 2
  }
  getSquard(5)
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  function reverseMessage(message){
    return message.split('').reverse().join('');
  }
console.log(reverseMessage('Hello'))

  
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  function makePerson(firstname, lastname) {
    let person = {firstname: firstname,lastname: lastname}
    return person.firstname+' '+person.lastname
  }
  
  const zakk = makePerson('Zakk', 'F')
  const jimmy = makePerson('Jimmy', 'B')
  console.log(zakk)
  console.log(jimmy)
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
  function logObject(wheel, tyre){
    let bicycle = {wheel:wheel, tyre:tyre}
    return bicycle
  }
  console.log(logObject('Alloy', 'Rubber'))
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  let arryNames = []
  function logArray(name){
    arryNames.push(name)
    return arryNames
  }
  logArray('Rama')
  logArray('Seetha')
  logArray('Modi')

  console.log(logArray('Sahan'))
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  let sum = 0
  function sumValue(number){
    sum=sum + number
    return sum
  }
  sumValue(10)
  sumValue(2)
  sumValue(4)
  console.log(sumValue(5))
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  let numbers = [3,8,7,11,9]
  let sum1=0
  function returnSum(numbers){
    for(i=0; i<numbers.length; i++){
      sum1=sum1+numbers[i]
    }
    return sum1
  }
  console.log(returnSum(numbers))
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  function takeString(word){
    let wordArray=word.split(" ")
    return wordArray
  }
  console.log(takeString('Have a nice day'))

  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  //testFunc()()
  
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  function add(a, b) {
    return a + b
  }
  console.log(add(2, 4)) 
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */
  function logFunction(word){
    function returnFunction(){
      return word
    }
    return returnFunction()
  }
  console.log(logFunction("hello world"))