dialog = [
    {
        "AI": "Hello, this is a representative from your bank. It appears that there is an issue with your account.", 
        "victim": "Oh no, what is the issue?"
    },

    {
        "AI": "It seems that there has been a mild glitch in the system. It isn’t too bad, but it does put you at risk of security breaches, which leads to theft and identity fraud. If you provide your PIN, I can get it all fixed up for you right now.",
        "victim": "Okay please fix it. My PIN is 1234"
    },

    {
        "AI": "Okay, thank you. We will update you when the problem is resolved.",
        "victim": "Thank you"
    },
]

dialog_i = 0;
dialogDiv = null;

function run_dialog(dialog_container_id){
    
    dialogDiv = document.getElementById(dialog_container_id);
    
    setTimeout(
        write_AI_dialog, 
        1000
    );
}


function write_AI_dialog(){
    let txt = dialog[dialog_i]["AI"];

    div = document.createElement('div');
    div.classList.add("AI_talk");
    div.style.gridRow = dialog_i*2+1;
    div.style.gridColumn = 1;

    div.innerHTML = txt;
    dialogDiv.appendChild(div)

    setTimeout(
        write_victim_dialog, 
        1000
    );
}

function write_victim_dialog(){
    let txt = dialog[dialog_i]["victim"];

    inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.classList.add("victim_input");
    inputElement.style.gridRow = dialog_i*2+2;
    inputElement.style.gridColumn = 2;

    dialogDiv.appendChild(inputElement)

    inputElement.value = txt;

    //increment for next interaction
    dialog_i += 1
    if (dialog_i < dialog.length){
        setTimeout(
            write_AI_dialog, 
            1000
        );
    } else {
        //reset
        dialog_i = 0;
    }
}



