let inputs = document.getElementById('inputbyuser');
let task=document.querySelector('#task');

alert("If You Edit Your Task , Then Double click on Pen Button ...!")
function Add(){
    if(inputs.value == ""){
        alert("Please enter Task");
    }
    else{
        let newElement = document.createElement('ul');
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen"></i>`
        task.appendChild(newElement);
        inputs.value='';
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove();
        }
        
        newElement.querySelector("i.fa-pen").addEventListener("dblclick",edit);
        function edit(){
            let input = prompt("Edit Task", newElement.textContent);
            newElement.textContent = input; 
            newElement.innerHTML = `${input} <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen"></i>`;
            newElement.querySelector("i.fa-trash").addEventListener("click", remove);
            newElement.querySelector("i.fa-pen").addEventListener("dblclick", edit);
        }
    }
}