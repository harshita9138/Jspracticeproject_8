 let input=document.getElementById("password");
 let button=document.getElementById("btn");

//  button.addEventListener("click",function(){
    function generatePass(){
        let pass='';
        let strings='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz0123456789@$&'
        for(let i=1;i<=8;i++){
            let char=Math.floor(Math.random()*strings.length+1);
            pass=pass+strings.charAt(char);
            
        }
       input.value=pass;
    }
    function copyimg(){
        let input=document.getElementById("password");
        if(input){
            input.select();
            input.setSelectionRange(0,99999);
            if(navigator.clipboard){
                navigator.clipboard.writeText(input.value)
                .then(()=>{
                    console.log("Content copied successfully in clipboard");
                })
                .catch(err=>{
                    console.log("Unable to copy to clipboard");
                });
             } else{
                console.warn("Api not supported");
            }
        }else{
            console.log("Input is blank");
        }    
            }
            // for mobile devices
      
    