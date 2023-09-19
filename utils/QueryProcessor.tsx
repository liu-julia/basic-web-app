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

  const maxInt = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (maxInt) {
    const x: number = parseInt (maxInt[1]);
    const y: number = parseInt (maxInt[2]);
    const z: number = parseInt (maxInt[3]);
    return Math.max(x, y, z).toString();
  }

  const sqcube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (sqcube) {
    const x: number = parseInt (sqcube[1]);
    const y: number = parseInt (sqcube[2]);
    const z: number = parseInt (sqcube[3]);
    
    const a: number = parseInt (sqcube[4]);
    const b: number = parseInt (sqcube[5]);
    const c: number = parseInt (sqcube[6]);
    const d: number = parseInt (sqcube[7]);
    
    if (Number.isInteger(Math.sqrt(a))) {
      if (Number.isInteger(Math.cbrt(a))) {
        return a.toString();
      }
    }

    if (Number.isInteger(Math.sqrt(b))) {
      if (Number.isInteger(Math.cbrt(b))) {
        return b.toString();
      }
    }

    if (Number.isInteger(Math.sqrt(c))) {
      if (Number.isInteger(Math.cbrt(c))) {
        return c.toString();
      }
    }

    if (Number.isInteger(Math.sqrt(d))) {
      if (Number.isInteger(Math.cbrt(d))) {
        return d.toString();
      }
    }
    if (Number.isInteger(Math.sqrt(x))) {
      if (Number.isInteger(Math.cbrt(x))) {
        return x.toString();
      }
    }

    if (Number.isInteger(Math.sqrt(y))) {
      if (Number.isInteger(Math.cbrt(y))) {
        return y.toString();
      }
    }
    if (Number.isInteger(Math.sqrt(z))) {
      if (Number.isInteger(Math.cbrt(z))) {
        return z.toString();
      }
    }
  }
  return "";

}
