/*
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143?
*/

function getSmallestPrimeFactor(limit: number): number {
  for (let i = 2; i <= limit; i++) {
    // Check the units place of that number. If it ends with 0, 2, 4, 6 and 8, it is not a prime number.
    if (i % 2 === 0) {
      continue;
    }

    //  Take the sum of the digits of that number. If the sum is divisible by 3, the number is not a prime number.
    let numberSlice = Array.from(i.toString(), Number);
    let numberSum: number = numberSlice.reduce((a, b) => a + b, 0);
    if (numberSum % 3 === 0) {
      continue;
    }

    // find out if it is a factor of the number
    if ((limit / i) % 1 === 0) {
      return i;
    }
  }
  return 0;
}

function getAllPrimeFactors(limit: number): Array<number> {
  const primeFactors: Array<number> = [];
  let reducingLimit = limit;

  while (reducingLimit > 1) {
    let smallestPrimeFactor = getSmallestPrimeFactor(reducingLimit);
    if (primeFactors.indexOf(smallestPrimeFactor) < 0) {
      primeFactors.push(smallestPrimeFactor);
    }
    reducingLimit /= smallestPrimeFactor;
  }

  return primeFactors;
}

// exponentially more inefficient as limit increases!!
function getLargestPrimeFactor(limit: number): number {
  const primeFactors: Array<number> = [];
  let loopIterations = 0;

  for (let i = 3; i < limit; i += 2) {
    loopIterations++;
    // Check the units place of that number. If it ends with 0, 2, 4, 6 and 8, it is not a prime number.
    if (i % 2 === 0) {
      continue;
    }

    //  Take the sum of the digits of that number. If the sum is divisible by 3, the number is not a prime number.
    let numberSlice = Array.from(i.toString(), Number);
    let numberSum: number = numberSlice.reduce((a, b) => a + b, 0);

    // numberSlice.forEach((intString: string) => {
    //   numberSum += parseInt(intString);
    // });
    if (numberSum % 3 === 0) {
      continue;
    }

    // After confirming the falsity of steps 1 and 2, find the square root of the given number.
    let numberSquareRoot = Math.sqrt(i);

    let numberIsDivisible = false;
    primeFactors.every((factor: number) => {
      loopIterations++;
      // Divide the given number by all the prime numbers below its square root value
      if ((numberSquareRoot / factor) % 1 === 0) {
        numberIsDivisible = true;
        return false;
      }

      // If the number is divisible by any of the prime numbers less than its square root, it is not a prime number; otherwise, it is prime.
      if (i % factor === 0) {
        numberIsDivisible = true;
        return false;
      }
      return true;
    });
    // cannot break a forEach so used every instead
    // primeFactors.forEach((factor: number) => {
    //   loopIterations++;
    //   // Divide the given number by all the prime numbers below its square root value
    //   if ((numberSquareRoot / factor) % 1 === 0) {
    //     numberIsDivisible = true;
    //   }

    //   // If the number is divisible by any of the prime numbers less than its square root, it is not a prime number; otherwise, it is prime.
    //   if (i % factor === 0) {
    //     numberIsDivisible = true;
    //   }
    // });
    if (numberIsDivisible) {
      continue;
    }

    // find out if it is a factor of the number
    if ((limit / i) % 1 === 0) {
      primeFactors.push(i);
    }
  }

  console.log(loopIterations);
  console.log(primeFactors.toString());

  return primeFactors[primeFactors.length - 1];
}

function main() {
  // const LIMIT = 13195;
  const LIMIT = 600851475143;

  // console.time("getPrimeFactorsByIterations");
  // console.log(
  //   `The largest prime factor of ${LIMIT} is ${getLargestPrimeFactor(
  //     LIMIT
  //   ).toString()}`
  // );
  // console.timeEnd("getPrimeFactorsByIterations");

  // console.log("----------------------------------------------------");

  console.time("getPrimeFactorsByDivision");
  const allPrimeFactors = getAllPrimeFactors(LIMIT);
  console.log(
    `The largest prime factor of ${LIMIT} is ${
      allPrimeFactors[allPrimeFactors.length - 1]
    }`
  );
  console.timeEnd("getPrimeFactorsByDivision");
}

main();
