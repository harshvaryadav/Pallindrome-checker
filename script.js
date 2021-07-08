function fun()
{
    document.querySelector("#h").style.visibility="hidden";
    document.querySelector("#input").style.visibility="hidden";
    document.querySelector("#btn").style.visibility="hidden";
    document.querySelector("#btn").addEventListener("click",func);
    document.getElementById("b").addEventListener("click",function(){
         document.getElementById("d1").style.display="none";
         document.querySelector("#h,#input,#btn").style.visibility="visible";
         document.querySelector("#input").style.visibility="visible";
         document.querySelector("#btn").style.visibility="visible";
});
}
function func()
{
    var s=document.querySelector("#input").value;
    if(check(s)===true)
    {
       document.querySelector("#output").innerHTML=`${s} is a Pallindrome string .`;
    }
    else
    {
       document.querySelector("#output").innerHTML=`${s} is not a Pallindrome string .`;
    }
}

function check(s)
{
    var S="";
    let n=s.length;
    var i,j;
    for(i=0;i<n;i++)
    {
        if((s[i]>='a'&&s[i]<='z')||('A'<=s[i]&&s[i]<='Z')||(s[i]>='0'&&s[i]<='9'))
        {
            S=S+s[i];
        }
    }
    S=S.toLowerCase();
    i=0;
    j=S.length-1;
    while(i<=j)
    {
       if(S[i]!=S[j])
       {
          return false; 
       }
       i=i+1;
       j=j-1;   
    }
    return true;
  
}