/*
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143?
*/

function getLargestPrimeFactor(limit: number): number {
  const primeFactors: Array<number> = [];

  for (let i = 3; i < limit; i++) {
    // Check the units place of that number. If it ends with 0, 2, 4, 6 and 8, it is not a prime number.
    if (i % 2 === 0) {
      continue;
    }

    //  Take the sum of the digits of that number. If the sum is divisible by 3, the number is not a prime number.

    let numberSlice = i.toString().split("");
    let numberSum: number = 0;
    numberSlice.forEach((intString: string) => {
      numberSum += parseInt(intString);
    });
    if (numberSum % 3 === 0) {
      continue;
    }

    // After confirming the falsity of steps 1 and 2, find the square root of the given number.
    let numberSquareRoot = Math.sqrt(i);

    let numberIsDivisible = false;
    primeFactors.forEach((factor: number) => {
      // Divide the given number by all the prime numbers below its square root value
      if ((numberSquareRoot / factor) % 1 === 0) {
        numberIsDivisible = true;
      }

      // If the number is divisible by any of the prime numbers less than its square root, it is not a prime number; otherwise, it is prime.
      if (i % factor === 0) {
        numberIsDivisible = true;
      }
    });
    if (numberIsDivisible) {
      continue;
    }

    // find out if it is a factor of the number
    if ((limit / i) % 1 === 0) {
      primeFactors.push(i);
    }
  }

  return primeFactors[primeFactors.length - 1];
}

function main() {
  const LIMIT = 600851475143;
  console.time("getPrimeFactors");
  console.log(
    `The prime factor sum of ${LIMIT} are ${getLargestPrimeFactor(
      LIMIT
    ).toString()}`
  );
  console.timeEnd("getPrimeFactors");
}

main();
