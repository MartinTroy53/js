var a = "a";
let b = "b";
const c = "c";

{
  var m = "m";
  let n = "n";
  const o = "o";

  {
    var x = "x";
    let y = "y";
    const z = "z";

    console.log("Inner scope:", a, b, m, n, y, z);
  }

  console.log("Middle scope:", a, b, c, m, n, o, x);
}

console.log("Outer scope:", a, b, c, m, x);