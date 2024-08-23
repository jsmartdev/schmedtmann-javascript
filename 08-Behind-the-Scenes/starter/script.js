'use strict';

const calcAge = (birthYear) => {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age}`);
  return age;
}

const firstName = 'Jonas';

calcAge(1991);