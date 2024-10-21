const inp1=document.getElementById("inp-1");
const inp2=document.getElementById("inp-2");
const inp3=document.getElementById("inp-3");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const result1=document.getElementById("result1");
const result2=document.getElementById("result2");
const result3=document.getElementById("result3");
console.dir(inp1);
btn1.addEventListener("mousedown",(e)=>{
   if(inp1.valueAsNumber>3 ){
        result1.innerHTML="Number should be lesser";
   }
   else if(inp1.valueAsNumber<3)
    {
        result1.innerHTML="Number should be Greater";

    } 
    else if(inp1.valueAsNumber===3){
        result1.innerHTML="Correct Number gussed";

    }   
});
btn2.addEventListener("mousedown",(e)=>{
   if(inp2.valueAsNumber>3 ){
        result2.innerHTML="Number should be lesser";
   }
   else if(inp2.valueAsNumber<3)
    {
        result2.innerHTML="Number should be Greater";

    } 
    else if(inp2.valueAsNumber===3){
        result2.innerHTML="Correct Number gussed";

    }   
});
btn3.addEventListener("mousedown",(e)=>{
   if(inp3.valueAsNumber>3 ){
        result3.innerHTML="Number should be lesser";
   }
   else if(inp3.valueAsNumber<3)
    {
        result3.innerHTML="Number should be Greater";

    } 
    else if(inp3.valueAsNumber===3){
        result3.innerHTML="Correct Number gussed";

    }   
});



