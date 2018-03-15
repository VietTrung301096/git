var n = Math.floor(Math.random()*10);
var Arr = new Array(n);

for(var i = 0 ; i < n ; i ++)
{
    Arr[i] = Math.floor(Math.random() * -10);
}
for(var i = 0 ; i < n ; i ++)
{
    console.log("Arr["+i+"] = "+Arr[i]);
}