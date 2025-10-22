setTimeout(() => {
	console.log("2000ms");
}, 2000);

setTimeout(() => {
	console.log("0ms");
}, 0);

console.log("End of script");



// 0ms 
// End of script
// 2000ms


