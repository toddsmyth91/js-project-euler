/*
    If we list all the natural numbers 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.
    The sum of these multiples is 23.
    Find the sum of all multiples of 3 and 5 below 1000.
*/

// will receive upper limit number, then list of multiples
// will return array of multiples
function getMultiples(
  limit: number,
  multiplesOf: Array<number>
): Array<number> {
  const multiples: Array<number> = [];
  for (let i = 1; i < limit; i++) {
    multiplesOf.forEach((integer) => {
      if (i % integer === 0) {
        multiples.push(i);
      }
    });
  }
  return multiples;
}

function getSum(input: Array<number>): number {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

function getSumOfMultiples(limit: number, multiplesOf: Array<number>): number {
  let sumOfMultiples = 0;
  for (let i = 1; i < limit; i++) {
    multiplesOf.forEach((multiple) => {
      if (i % multiple === 0) {
        sumOfMultiples += i;
      }
    });
  }
  return sumOfMultiples;
}

function main(): void {
  const UPPER_LIMIT_NUMBER = 10;
  const GET_MULTIPLES_OF = [3, 5];

  console.time("MultiplesThenSum");
  const multiples = getMultiples(UPPER_LIMIT_NUMBER, GET_MULTIPLES_OF);
  console.log(`The multiples of ${UPPER_LIMIT_NUMBER} are ${multiples}`);
  console.log(`The sum of multiples is ${getSum(multiples)}`);
  console.timeEnd("MultiplesThenSum");

  console.log("----------------------------------------------------");

  console.time("MultiplesAndSum");
  console.log(`The multiples of ${UPPER_LIMIT_NUMBER} are ${GET_MULTIPLES_OF}`);
  console.log(
    `The sum of multiples is ${getSumOfMultiples(
      UPPER_LIMIT_NUMBER,
      GET_MULTIPLES_OF
    )}`
  );
  console.timeEnd("MultiplesAndSum");
}
main();
