function calculateResult() {
    let obt1 = parseInt(document.getElementById("obt1").value);
    let obt2 = parseInt(document.getElementById("obt2").value);
    let obt3 = parseInt(document.getElementById("obt3").value);
    let obt4 = parseInt(document.getElementById("obt4").value);
    let obt5 = parseInt(document.getElementById("obt5").value);
    let shows=document.getElementById("show").innerHTML=Result;
    let stdTmMarks=document.getElementById("tm").value ;
    let totalObtainedMarks = obt1 + obt2 + obt3 + obt4 + obt5;
    let Result=(totalObtainedMarks/stdTmMarks)*100;
    // Grade Calculation
    if(Result===100){
        console.log("A+ Grade");
    }
    else if(Result>=90 && Result<100){
        console.log("A Grade");
    }
    else if(Result>=70 && Result<89){
        console.log("B Grade");
    }
    else if(Result>=50 && Result<69){
        console.log("C Grade");
    }
    else if(Result>=40 && Result<49){
        console.log("D Grade");
    }
    else{
        console.log("F Grade");
    }
}