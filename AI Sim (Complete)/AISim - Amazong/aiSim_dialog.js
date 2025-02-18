dialog = [
    {
        "AI": "Congratulations! You just won a $500 Amazong gift card! Verify your account number/address/other personal information within the next ten minutes to redeem", 
        "victim": "Woohoo! Okay, will I actually get a gift card?"
    },

    {
        "AI": "Yes! This is a limited-time Amazong event for loyal customers! Respond within ten minutes to redeem!",
        "victim": "I don’t know…"
    },

    {
        "AI": "That’s okay! We completely understand your hesitation. To reassure you, we are an official Amazong partner, and this is a secure verification process used for all rewards. But hurry, there are only 2 gift cards left now!",
        "victim": "Alright, sounds legit, here: 123-456-7890, 42 Vogon Road, zbeeblebrox@galacticgov.gov"
    },

    {
        "AI": "Thanks for providing your personal details. Expect to see your gift card appear shortly.",
        "victim": "Bye"
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



