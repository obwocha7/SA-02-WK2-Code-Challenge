function prime(num1) {
  const primes = [];

  // Iterate over the input array
  for (let i = 0; i < num1.length - 1; i++) {
    const start = num1[i];
    const end = num1[i + 1] - 1;

    // Iterate within each range of the numbers
    for (let num = start; num <= end; num++) {
      let isPrime = true;

      // Check if num is prime
      if (num < 2) {
        isPrime = false;
      } else {
        // Check divisibility up to the square root of num
        for (let j = 2; j <= Math.sqrt(num); j++) {
          if (num % j === 0) {
            isPrime = false;
            break;
          }
        }
      }

      // If num is prime, push it to the primes array
      if (isPrime) {
        primes.push(num);
      }
    }
  }

  // Output the array of prime numbers
  console.log(primes);
}

// Testing the logic
prime([2, 4, 6, 8, 9, 11, 13, 17]);
