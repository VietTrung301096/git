var n = Math.floor(Math.random()*10);
var Arr = new Array(n);

for(var i = 0 ; i < n ; i ++)
{
    do{
        Arr[i] = Math.floor(Math.random() * 100);       
    }while (Arr[i] < Arr[i - 1]);
}
for(var i = 0 ; i < n ; i ++)
{
    console.log("Arr["+i+"] = "+Arr[i]);
}