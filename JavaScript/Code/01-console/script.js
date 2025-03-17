console.log(100);

console.log(new Date());

console.log("Hello World");

console.error("Alert");

console.warn("Warning");

console.table({ name: "Ayush", email: "cc.ayusharma@gmail.com" });

console.group("Simple");
console.log(100);
console.error("Error");
console.warn("Warning");
console.groupEnd();

const style = "padding:10px; background-color: deeppink; color:green";
console.log("%cHello World", style);

const style1 =
  "margin:10px; color:white; font-size:30px; background-color:black;";
console.log("%cTest", style1);
