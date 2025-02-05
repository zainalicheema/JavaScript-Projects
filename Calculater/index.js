function appendToDisplay(value){
    document.getElementById('display').value+=value;
    // value=value+1
}
function clearDisplay(){
    document.getElementById('display').value='';
}

function calculateResult(){
    const A=document.getElementById('display').value;
    try{
        const result=eval(A);
        document.getElementById('display').value=result;
    }
    catch(error){
        document.getElementById('display').value='Error';
    }
}
