請寫一個程式可以印出指定數量的 * 號
例如： star(5) 會印出 5 個 * 號

star(5)

*
*
*
*
*
請寫一個函數可以印出 a..b 之間的所有整數
例如： between(3,8) 會印出

3
4
5
6
7
8

function star(n)
{
    for(var i=0;i<n;i++)
    console.log('*')    
}
function between(a,r)
{
    for(var i=a;i<=r;i++)
    {
        console.log(i)
    }
}

star(5)
between(2,5)

結果

PS C:\網頁設計\wp109b\week8\homework2> deno run star.js
*
*
*
*
*
2
3
4
5

加分題

3 請寫一個函數 primeBetween(a,b) 可以印出 a..b 之間的質數

例如 primeBetween(3,15)

3
5
7
11
13

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

結果
PS C:\網頁設計\wp109b\week8\homework2> deno run primeBetween.js
5
7 
11
13
17
19
23