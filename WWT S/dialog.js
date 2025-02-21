dialog = [
    {
       "AI": "Congratulations! You just won a $500 Amazon gift card! Verify your account number/address/other personal information within the next ten minutes to redeem.",
     "victim": "Ok here {information}",
    },
    
    
    
    
    
    {
       "AI": "Congratulations! You just won a $500 Amazon gift card! Verify your account number/address/other personal information within the next ten minutes to redeem.",
    "victim": "Will I actually get a gift card?",
    },
      
    
    {
    "AI": "Yes! This is a limited-time Amazon event for loyal customers! Respond within ten minutes to redeem!",
      "victim": "I don’t know…",
    },
    
    
    {
       "AI": "That’s okay! We completely understand your hesitation. To reassure you, we are an official Amazon partner, and this is a secure verification process used for all rewards. But hurry, there are only 2 gift cards left now!",
     "victim": "Oh, okay {information}",
    },
    
    
    
    
    
    {
       "AI": "Hello, this is a representative from your bank. It appears that there is an issue with your account.",
       "victim": "Oh no, what is the issue?",
    },
    
    
    {
       "AI": "It seems that there has been a mild glitch in the system. It isn’t too bad, but it does put you at risk of security breaches, which leads to theft and identity fraud. If you provide your PIN, I can get it all fixed up for you right now.",
       "victim": "Okay please fix it. My PIN is ****",
    },
    
    
    {
       "AI": "Okay, thank you. We will update you when the problem is resolved.",
       "victim": "Thank you",
    },
    
    
    
    
    
    {
       "AI": "Hello, this is a representative from your bank. It appears that there is an issue with your account.",
       "victim": "What is the issue? This is not normally how my bank reaches out to me.",
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
       "victim": "Okay, I understand now. Here is my PIN ****",
    },
    
    
    
    
    
    {
       "AI": "Hello (name), we are a new startup company called Horizon Tech Solutions. We reviewed your profile and believe that you are a perfect candidate for our company. This is a work-from-home position with a starting salary of $3,500/month, flexible hours, and great benefits such as free healthcare and 3 weeks paid vacation. If you are interested, please fill out an application. PLEASE NOTE: This is a limited-time offer, and there are a lot of other applicants. –Dan Ryder, Horizon Tech Solutions",
    "victim": "Oh wow, this sounds great! Where is the application?",
    },
    
    
    {
       "AI": "Glad to see you are interested! Please fill this out: FULL NAME: DATE OF BIRTH: HOME ADDRESS: PHONE NUMBER: EMAIL ADDRESS: SOCIAL SECURITY NUMBER: DRIVERS LICENSE OR PASSPORT NUMBER (ATTACH A COPY): BANK NAME AND ACCOUNT NUMBER (FOR DIRECT DEPOSIT):",
    "victim": "Okay, thank you. Here is the form: (INFO)",
    },
    
    
    {
       "AI": "Ok great! We will be back to you shortly regarding this position.",
       "victim": "Ok thank you."
    },
    
    
    
    
    
    {
       "AI": "Hello! This is Taylor Swift, the singer and songwriter! I’m on tour, and my bus broke down! And to make matters worse, I lost my wallet somewhere, so I am completely stranded! If you can send me $450 to get my bus fixed, I will give you free VIP concert passes for life! So please hurry!",
       "victim": "OMG TAYLOR! Ofc I will help you! Here!",
    },
    
    
    {
       "AI": "Thank you! You are a true Swifty! Love you <3",
     "victim": "Yesss queen ofc!! Where are my VIP tickets tho?",
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


