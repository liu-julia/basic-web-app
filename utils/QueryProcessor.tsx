function isPrime (num: number): boolean {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}
// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "julialiu"
    )
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "julia"
    )
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  
  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }
  const subMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subMatch) {
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }

  const powMatch = query.match(/What is (\d+) to the power of (\d+)/);
  if (powMatch) {
    const x: number = parseInt(powMatch[1]);
    const y: number = parseInt(powMatch[2]);
    return Math.pow(x,y).toString();
  }

  const maxInt = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxInt) {
    const x: number = parseInt (maxInt[1]);
    const y: number = parseInt (maxInt[2]);
    const z: number = parseInt (maxInt[3]);
    return Math.max(x, y, z).toString();
  }

  const prime = query.match(/Which of the following numbers are prime: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (prime) {
    const x: number = parseInt (prime[1]);
    const y: number = parseInt (prime[2]);
    const z: number = parseInt (prime[3]);
    
    const a: number = parseInt (prime[4]);
    const b: number = parseInt (prime[5]);
    
    var sol: string = "";
    if (isPrime(a))
      sol + a.toString();
    if (isPrime(b))
      sol + b.toString();
    if (isPrime(x))
      sol + x.toString();
    if (isPrime(y))
      sol + y.toString();
    if (isPrime(z))
      sol + z.toString();
    return sol;
  }
  return "";

}
