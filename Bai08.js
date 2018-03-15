var n = Math.floor(Math.random()*20);
var Arr = new Array(n);

for(var i = 0 ; i < n ; i ++)
{
    Arr[i] = Math.floor(Math.random() * 10);
}
for(var i = 0 ; i < n ; i ++)
{
    if (Arr[i] < 2)
        continue;
    else if (Arr[i] == 2){
        console.log("Arr["+i+"] = "+Arr[i]);        
    } else       
        for(var i = 2 ; i < Arr[i] ; i++ )
        {
            if(Arr[i] % i == 0)
                continue;
            else
                console.log("Arr["+i+"] = "+Arr[i]);
        }
}

  
