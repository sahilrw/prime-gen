const { describe } = require("node:test");
const { trialDivision, sievePrime } = require("./generate-prime");

describe("trialDivision", () => {
  test("Generate prime numbers between 1 and 10(Trial Division)", () => {
    expect(trialDivision(1, 10)).toEqual([2, 3, 5, 7]);
  });

  test("Generate prime numbers between 1 and 100(Trial Division)", () => {
    expect(trialDivision(1, 100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ]);
  });

  test("Generate prime numbers between 25 and 75(Trial Division)", () => {
    expect(trialDivision(25, 75)).toEqual([
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
    ]);
  });

  test("Generate prime numbers between 35 and 1095(Trial Division)", () => {
    expect(trialDivision(375, 1095)).toEqual([
      379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
      463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
      571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653,
      659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
      761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859,
      863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971,
      977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051,
      1061, 1063, 1069, 1087, 1091, 1093,
    ]);
  });
});

describe("sievePrime", () => {
  test("Generate prime numbers between 1 and 10(Sieve of Eratosthenes)", () => {
    expect(sievePrime(1, 10)).toEqual([2, 3, 5, 7]);
  });

  test("Generate prime numbers between 1 and 100(Sieve of Eratosthenes)", () => {
    expect(sievePrime(1, 100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ]);
  });

  test("Generate prime numbers between 25 and 75(Sieve of Eratosthenes)", () => {
    expect(sievePrime(25, 75)).toEqual([
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
    ]);
  });

  test("Generate prime numbers between 35 and 1095(Sieve of Eratosthenes)", () => {
    expect(sievePrime(375, 1095)).toEqual([
      379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
      463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
      571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653,
      659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
      761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859,
      863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971,
      977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051,
      1061, 1063, 1069, 1087, 1091, 1093,
    ]);
  });
});
