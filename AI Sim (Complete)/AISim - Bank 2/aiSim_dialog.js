dialog = [
    {
        "AI": "Hello, this is a representative from your bank. It appears that there is an issue with your account.", 
        "victim": "What is the issue? This is not normally how my bank reaches out to me."
    },

    {
        "AI": "We had to contact you more directly due to the nature of the issue. There was a small glitch in our system, which could lead to a data leak, putting you at risk of identity theft or other problems. Please provide your PIN, and I can fix it for you right now.",
        "victim": "I don’t know about this. Something seems off."
    },

    {
        "AI": "I understand your hesitation, but please understand that I am only trying to help. If we don’t get this issue resolved, you could lose thousands of dollars. Please send your PIN number so we can access your account and solve this problem before it gets any worse.",
        "victim": "If this is an issue on your end, shouldn’t you be able to solve it without my PIN?",
     },

    {
        "AI": "Unfortunately, this issue has already spread beyond our control, and we are now scrambling to get access to the accounts of everyone involved. We really need to hurry before this gets any more dangerous.",
        "victim": "Okay, I understand now. Here is my PIN: 1234"
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



