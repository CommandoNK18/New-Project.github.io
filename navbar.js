let result=document.querySelector(".result");
let btn=document.querySelector(".calculate-btn");
btn.addEventListener("click",()=>{
expVal=document.querySelector(".exp-val").value;
stdVal=document.querySelector(".std-val").value;
 let amount=""; 
 amount=(((expVal-stdVal)/stdVal)*100).toFixed(2);
 if(amount<0){
   amount=-amount;
 }
result.innerHTML=amount+"%";
});
