array = process.argv;
var index=2;
var sum=0;
while(index<array.length){
    sum+=parseInt(array[index]);
    index++
    
}
console.log(sum)