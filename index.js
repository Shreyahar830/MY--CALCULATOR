 let buttons = document.querySelectorAll("button");
 let sc = document.querySelector("#sc")

 buttons.forEach(function(btn){

 btn.addEventListener("click" , function(event){

    if ( event.target.innerText === "=" ){
         try{
                 let ans = eval(sc.value);
                 sc.value = ans;

         }catch (erroe){
            alter("Wrong expression enter")
            sc.value = "";
         }
        
    } else if (event.target.innerText === "DEL"){
         sc.value = sc.value.slice(0, -1);

         
    } else if (event.target.innerText === "AC"){
      sc.value = "";
    }
    else{

       sc.value += event.target.innerText;  
    }
     

    }) ;   

        
    });

    









 

