dialog = [
    {
        "AI": "Hello Zaphod, we are a new startup company called Horizontal Tech Solutions. We reviewed your profile and believe that you are a perfect candidate for our company. This is a work-from-home position with a starting salary of $3,500/month, flexible hours, and great benefits such as free healthcare and 3 weeks paid vacation. If you are interested, please fill out an application. PLEASE NOTE: This is a limited-time offer, and there are a lot of other applicants. –Dan Ryder, Horizontal Tech Solutions", 
        "victim": "Oh wow, this sounds great! Where is the application?"
    },

    {
        "AI": "Glad to see you are interested! Please fill this out: FULL NAME: DATE OF BIRTH: HOME ADDRESS: PHONE NUMBER: EMAIL ADDRESS: SOCIAL SECURITY NUMBER: DRIVERS LICENSE OR PASSPORT NUMBER (ATTACH A COPY): BANK NAME AND ACCOUNT NUMBER (FOR DIRECT DEPOSIT):",
        "victim": "Okay, thank you. Here is the form: (INFO)"
    },

    {
        "AI": "Ok great! We will be back to you shortly regarding this position.",
        "victim": "Sounds good, thank you"
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



