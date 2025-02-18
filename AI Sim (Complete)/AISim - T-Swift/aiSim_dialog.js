dialog = [
    {
        "AI": "Hello! This is Taylor Swift, the singer and songwriter! I’m on tour, and my bus broke down! And to make matters worse, I lost my wallet somewhere, so I am completely stranded! If you can send me $450 to get my bus fixed, I will give you free VIP concert passes for life! So please hurry!", 
        "victim": "OMG TAYLOR! Ofc I will help you! Here!"
    },

    {
        "AI": "Thank you! You are a true Swifty! Love you <3",
        "victim": "Yesss queen ofc!! Where are my VIP tickets tho?"
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



