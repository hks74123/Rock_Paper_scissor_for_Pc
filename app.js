ch=['rock','paper','scissor'];
function clickedp(){
    rondno=document.getElementById('round').innerText;
    fne=rondno.charAt(rondno.length-1);
    fne=parseInt(fne)+1;
    document.getElementById('round').innerText=`Round : ${fne}`;
    document.getElementById('peprr').disabled=true;
    document.getElementById('rckk').style.display="none";
    document.getElementById('scrss').style.display="none";
    document.getElementById('y1').style.display="inline-block";
    document.getElementById('y2').style.display="inline";
    // document.getElementById('playagn').style.display="block";
    document.getElementById('mnpage').style.width="600px";
    document.getElementById('peprr').style.width="38%";
    document.getElementById('peprr').style.height="53%";
    document.getElementById('peprr').style.marginTop="50px";
    document.getElementById('round').style.display="block";
    document.getElementById('mnpage').style.marginTop="30px";

    document.getElementById('hidencolor').style.display="inline-block";
    r=Math.floor(Math.random()*ch.length);
    dd=setTimeout(pcchoice,1000)
}
function clickedr(){
    rondno=document.getElementById('round').innerText;
    fne=rondno.charAt(rondno.length-1);
    fne=parseInt(fne)+1;
    document.getElementById('round').innerText=`Round : ${fne}`;
    document.getElementById('rckk').style.marginLeft="0px";
    document.getElementById('rckk').disabled=true;
    document.getElementById('peprr').style.display="none";
    document.getElementById('scrss').style.display="none";
    document.getElementById('y1').style.display="inline-block";
    document.getElementById('y2').style.display="inline";
    // document.getElementById('playagn').style.display="block";
    document.getElementById('mnpage').style.width="600px";
    document.getElementById('rckk').style.width="38%";
    document.getElementById('rckk').style.height="53%";
    document.getElementById('rckk').style.marginTop="50px";
    document.getElementById('round').style.display="block";
    document.getElementById('mnpage').style.marginTop="30px";

    document.getElementById('hidencolor').style.display="inline-block";
    r=Math.floor(Math.random()*ch.length);
    ss=document.getElementById("scorr").innerText;
    ddp=setTimeout(pcchoice2,1000)
}
function clickeds(){
    rondno=document.getElementById('round').innerText;
    fne=rondno.charAt(rondno.length-1);
    fne=parseInt(fne)+1;
    document.getElementById('round').innerText=`Round : ${fne}`;
    document.getElementById('scrss').display="inline-block"
    document.getElementById('scrss').disabled=true;
    document.getElementById('scrss').style.marginLeft="0px";
    document.getElementById('rckk').style.display="none";
    document.getElementById('peprr').style.display="none";
    document.getElementById('y1').style.display="inline-block";
    document.getElementById('y2').style.display="inline";
    // document.getElementById('playagn').style.display="block";
    document.getElementById('mnpage').style.width="600px";
    document.getElementById('scrss').style.width="38%";
    document.getElementById('scrss').style.height="53%";
    document.getElementById('scrss').style.marginTop="50px";
    document.getElementById('round').style.display="block";
    document.getElementById('mnpage').style.marginTop="30px";

    document.getElementById('hidencolor').style.display="inline-block";
    r=Math.floor(Math.random()*ch.length);
    ss=document.getElementById("scorr").innerText;
    de=setTimeout(pcchoice1,1000)
}

function pcchoice(){
    document.getElementById('y2').innerText="The House Picked";
    document.getElementById('hidencolor').style.display="none";
    if(r==0){
        document.getElementById('pickedup').style.display="inline-block";
        document.getElementById('pickedup').style.float="right";
        document.getElementById('pickedup').disabled=true;
    }
    if(r==1){
        document.getElementById('pickedup1').style.display="inline-block";
        document.getElementById('pickedup1').style.float="right";
        document.getElementById('pickedup1').disabled=true;
    }
    if(r==2){
        document.getElementById('pickedup2').style.display="inline-block";
        document.getElementById('pickedup2').style.float="right";
        document.getElementById('pickedup2').disabled=true;
    }
    ee=setTimeout(mkbtn,1000)
}
function mkbtn(){
    document.getElementById('mnpage').style.width="800px";
    document.getElementById('playagn').style.display="inline-block";
    document.getElementById('peprr').style.width="30%";
    document.getElementById('peprr').style.height="58%";
    document.getElementById('dabba').style.display="inline-block";
    document.getElementById('win').style.display="block";
    if(r==0){
        document.getElementById('pickedup').style.width="30%";
        document.getElementById('pickedup').style.height="58%";
        document.getElementById('win').innerText="You Win";
        // document.getElementById('win').display="inline-block";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        se=parseInt(se)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==1){
        document.getElementById('pickedup1').style.width="30%";
        document.getElementById('pickedup1').style.height="58%";
        document.getElementById('win').innerText="Draw";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        // su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==2){
        document.getElementById('pickedup2').style.width="30%";
        document.getElementById('pickedup2').style.height="58%";
        document.getElementById('win').innerText="You Lose";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
}

function pcchoice1(){
    document.getElementById('y2').innerText="The House Picked";
    document.getElementById('hidencolor').style.display="none";
    if(r==0){
        document.getElementById('pickedup').style.display="inline-block";
        document.getElementById('pickedup').style.float="right";
        document.getElementById('pickedup').disabled=true;
        
    }
    if(r==1){
        document.getElementById('pickedup1').style.display="inline-block";
        document.getElementById('pickedup1').style.float="right";
        document.getElementById('pickedup1').disabled=true;
        
    }
    if(r==2){
        document.getElementById('pickedup2').style.display="inline-block";
        document.getElementById('pickedup2').style.float="right";
        document.getElementById('pickedup2').disabled=true;
    }
    ee1=setTimeout(mkbtn1,1000)
}
function mkbtn1(){
    document.getElementById('mnpage').style.width="800px";
    document.getElementById('playagn').style.display="inline-block";
    document.getElementById('scrss').style.width="30%";
    document.getElementById('scrss').style.height="58%";
    document.getElementById('dabba').style.display="inline-block";
    document.getElementById('win').style.display="block";
    if(r==0){
        document.getElementById('pickedup').style.width="30%";
        document.getElementById('pickedup').style.height="58%";
        document.getElementById('win').innerText="You Lose";
        // document.getElementById('win').display="inline-block";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==1){
        document.getElementById('pickedup1').style.width="30%";
        document.getElementById('pickedup1').style.height="58%";
        document.getElementById('win').innerText="You Win";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        se=parseInt(se)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==2){
        document.getElementById('pickedup2').style.width="30%";
        document.getElementById('pickedup2').style.height="58%";
        document.getElementById('win').innerText="Draw";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        // su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
}

function pcchoice2(){
    document.getElementById('y2').innerText="The House Picked";
    document.getElementById('hidencolor').style.display="none";
    if(r==0){
        document.getElementById('pickedup').style.display="inline-block";
        document.getElementById('pickedup').style.float="right";
        document.getElementById('pickedup').disabled=true;

        
    }
    if(r==1){
        document.getElementById('pickedup1').style.display="inline-block";
        document.getElementById('pickedup1').style.float="right";
        document.getElementById('pickedup1').disabled=true;
    }
    if(r==2){
        document.getElementById('pickedup2').style.display="inline-block";
        document.getElementById('pickedup2').style.float="right";
        document.getElementById('pickedup2').disabled=true;
        
    }
    eeff=setTimeout(mkbtn2,1000)
}
function mkbtn2(){
    document.getElementById('mnpage').style.width="800px";
    document.getElementById('playagn').style.display="inline-block";
    document.getElementById('rckk').style.width="30%";
    document.getElementById('rckk').style.height="58%";
    document.getElementById('dabba').style.display="inline-block";
    document.getElementById('win').style.display="block";
    if(r==0){
        document.getElementById('pickedup').style.width="30%";
        document.getElementById('pickedup').style.height="58%";
        // document.getElementById('win').display="inline-block";
        document.getElementById('win').innerText="Draw";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        // su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==1){
        document.getElementById('pickedup1').style.width="30%";
        document.getElementById('pickedup1').style.height="58%";
        document.getElementById('win').innerText="You Lose";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        su=parseInt(su)+1;
        document.getElementById("scorr").innerText=se+su;
    }
    if(r==2){
        document.getElementById('pickedup2').style.width="30%";
        document.getElementById('pickedup2').style.height="58%";
        document.getElementById('win').innerText="You Win";
        ss=document.getElementById("scorr").innerText;
        su=ss.charAt(1)
        se=ss.charAt(0)
        se=parseInt(se)+1;
        document.getElementById("scorr").innerText=se+su;
    }
}
function letsagain(){
    document.getElementById('pickedup').style.display="none";
    document.getElementById('pickedup').style.width="38%";
    document.getElementById('pickedup').style.height="53%";
    document.getElementById('pickedup1').style.display="none";
    document.getElementById('pickedup1').style.width="38%";
    document.getElementById('pickedup1').style.height="53%";
    document.getElementById('pickedup2').style.display="none";
    document.getElementById('mnpage').style.marginTop="50px";
    document.getElementById('pickedup2').style.width="38%";
    document.getElementById('pickedup2').style.height="53%";
    document.getElementById('playagn').style.display="none";
    document.getElementById('round').style.display="none";
    document.getElementById('win').style.display="none";
    document.getElementById('y1').style.display="none";
    document.getElementById('y2').style.display="none";
    document.getElementById('y2').innerText="The House is Picking..."
    document.getElementById('mnpage').style.width="400px";
    document.getElementById('peprr').disabled=false;
    document.getElementById('peprr').style.display="";
    document.getElementById('peprr').style.marginTop="30px";
    document.getElementById('peprr').style.width="35%";
    document.getElementById('peprr').style.height="35%";
    document.getElementById('rckk').disabled=false;
    document.getElementById('rckk').style.display="";
    document.getElementById('rckk').style.marginTop="30px";
    document.getElementById('rckk').style.width="35%";
    document.getElementById('rckk').style.height="35%";
    document.getElementById('rckk').style.marginLeft="20%";
    document.getElementById('scrss').disabled=false;
    document.getElementById('scrss').style.display="";
    // document.getElementById('scrss').style.marginTop="0px";
    document.getElementById('scrss').style.width="35%";
    document.getElementById('scrss').style.height="35%";
    document.getElementById('scrss').style.marginLeft="30%";
    document.getElementById('mnpage').style.marginTop="30px";
}
function letsrefresh(){
    location.reload()
}

// var xz=window.matchMedia("(max-width:820px)")
// myfunt(xz)
// xz.addListener(myfunt)
// function myfunt(xz){
//     if(xz.matches){
//         document.getElementById('mnpage').style.width="400px";
//         document.getElementById('pickedup').style.width="35%";
//         document.getElementById('pickedup').style.height="35%";
//         document.getElementById('pickedup1').style.width="35%";
//         document.getElementById('pickedup1').style.height="35%";
//         document.getElementById('pickedup2').style.width="35%";
//         document.getElementById('pickedup2').style.height="35%";
//     }
// }