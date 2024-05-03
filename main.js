let increment = 0;

let p = document. getElementById("msg");
    let progInterval = setInterval(function(){
        if(increment===100){
            increment=0
        }else{

            increment=increment+10
            p.style.width=increment+'%';
           
        }
    } ,1000) 