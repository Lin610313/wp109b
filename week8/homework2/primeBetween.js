function primeBetween(a,b)
{
    var i=0
    for(;a<=b;a++)
    {
        i=0
        for(var c=2;c<=a/2;c++)
        {
            if(a%c==0)
            {
                i=1
                break
            }
        }
        if(i==0 && a>1)console.log(a)
    }
}
primeBetween(4,25)