const prompt = require("prompt");

prompt.start();

prompt.get(["username"], function (err, result) {
  let str = result.username;
  let arr = [];
  let newarr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
    newarr.push(str.charAt(i));
  }
  arr.reverse();
  if (
    arr.length == newarr.length &&
    arr.every(function (u, i) {
      return u === newarr[i];
    })
  ) {
    console.log("IT IS A PALANDROME");
  } else {
    console.log("IT IS NOT A PALANDROME");
  }
});
