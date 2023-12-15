const taarik = new Date();

console.log('Date', taarik);
console.log("Today's date:", taarik.getDate());
console.log('Current Month:', taarik.getMonth());
console.log('Current year:', taarik.getFullYear());
console.log('Current hours:', taarik.getHours());
console.log('Minutes:', taarik.getMinutes());
console.log('Seconds:', taarik.getSeconds());
// taarik.setFullYear(2022);
console.log('After setFullYear:', taarik);
// taarik.setMonth(5);
console.log('After setMonth:', taarik);
console.log('Time in milliseconds since 1970:', taarik.getTime());
