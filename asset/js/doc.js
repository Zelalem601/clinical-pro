const clk = document.querySelector(".clk")
const urine =  document.querySelector(".urine")

clk.addEventListener("click" ,function(){
    urine.classList.remove("hide")
   
})

/* clk.forEach(nav => {
    nav.addEventListener('click',function()
    {
       clk.forEach(nv => nv.classList.remove('hide'));
       this.classList.add('hide');
       
    })
 })
   */