function Table(){
    const num=parseInt(document.getElementById("num").value);
    const show=document.getElementById("show");
    show.innerHTML="";
    if(num==""){
        alert("Please enter a number");
        return;
    }else if(num<0){
        alert("Number should be greater than or equal to 1");
        num=="1";
        return;
    }
    for(let i=0;i<=10;i++){
        show.innerHTML+=(`${num} X ${i} = ${num*i}</br>`);
        show.innerHTML+=`<hr>`;
    }
}