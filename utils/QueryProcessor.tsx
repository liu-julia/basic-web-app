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
  
  const maxInt = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxInt) {
    const x: number = parseInt (maxInt[1]);
    const y: number = parseInt (maxInt[2]);
    const z: number = parseInt (maxInt[3]);
    return Math.max(x, y, z).toString();
  }
}
