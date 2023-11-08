

let flag=0;
function hello(){
    let menu=document.querySelector(".menu");
    let body1=document.querySelector("#mainbody");

    if( flag==0){
        console.log("jjj");
        menu.style.display="block";
        body1.style.position="fixed";
       
        flag=1;
       
        
    }
    else{
        console.log("lllll");
        menu.style.display="none";
        body1.style.position="static";
        flag=0;
       
    }
}