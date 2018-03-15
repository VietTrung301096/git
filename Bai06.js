var n = Math.floor(Math.random()*20);
var Arr = new Array(n);

for(var i = 0 ; i < n ; i ++)
{
    Arr[i] = Math.floor(Math.random() * 100);
}
for(var i = 0 ; i < n ; i ++)
{
    if(Arr[i] % 2 == 1)
        console.log("Arr["+i+"] = "+Arr[i]);
}