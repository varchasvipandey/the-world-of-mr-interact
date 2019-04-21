//Services script
function readThemFirst(){
    alert('Please take some time out to check the big sections below the description of this page because I strongly believe that the developer of this website is not a fool to waste his time to create these sections. Read them and then click one of them.');
}

function buyNowSimple(){
    var x = prompt('Enter the number of packs you want: ');
    if(x){
        var xSell = 10*x;
        var y = confirm('Total cost will be 10 into ' + x + ' Rupees. Are you sure you want to buy this for ' + xSell + ' Rupees?');
        if(y){
            alert('Thankyou for wasting your money.');
        } else{
            alert('Thankyou for wasting our time.');
        }
    }
}

function buyNowAdvance(){
    var x = prompt('Enter the number of packs you want: ');
    if(x){
        var xSell = 100*x;
        var y = confirm('Total cost will be 10 into ' + x + ' Rupees. Are you sure you want to buy this for ' + xSell + ' Rupees?');
        if(y){
            alert('Thankyou for wasting your money.');
        } else{
            alert('Thankyou for wasting our time.');
        }
    }
}

function cryNow(){
    alert('My condolence....');
}


//About script
function yeahSure(){
    var x = document.getElementById('first-message');
    x.innerHTML = "Thats nice!!";
    setTimeout(question_one => {
        var name = prompt('What is your name?');
        if(name){
            x.innerHTML = "Oh Hi! " + name;
            setTimeout(question_two => {
                var age = prompt("What's your age " + name + " ?");
                if(age){
                    x.innerHTML = "Hmm...so you are " + age + " years old...";
                    setTimeout(taunt => {
                        if(age!=0 && age<18){
                            x.innerHTML = "You are just a kid. An irresponsible person. Quickly explore rest of the site and go take some responsibilities. Urgh!! Kids these days....";  
                        } else if(age == 0){
                            x.innerHTML = "Okay....so you mean that you are talking to me from your mom's womb?..Isn't it?"
                        } else{
                            x.innerHTML = "I guess then you are mature enough to open the source code of this website.."
                        }
                    }, 3000)
                } else{
                    x.innerHTML = "Okay " + name + ". I know you are an insecure person. Go ahead and explore the rest of the site. I won't bother your again unless you want me to."
                }
            }, 2000);
        } else{
            x.innerHTML = "I know I'm boring.....Okay, go ahead and explore other pages. You may like INTERACT page."
        }
        
    }, 1000);

}

function nah(){
    var x = document.getElementById('first-message');
    x.innerHTML = "Okay... :-( ..... But don't forget to enter your name on our INTERACT page. You will get better experience."
}



//Interact script
var interactCounter = 0;
var annoyCounter = 0;

//__________Messages_______________
var messageSetOne = ["nice choice", "hmm....cool", "yeah...nice", "will look good, I guess", "hm..nice choice", "looks colourful", 
"this one is cool too", "all of them are good", "see more options also", "awesome one, ins't it?"];

var messageSetTwo = ["come on!! Select one and move on quick", "girls take lesser time to get ready", "okay just select that!!!", "man...you're so annoying", 
"I don't have much patience", "don't piss me off now", "see color don't really matter", "you got so much time to waste, isn't it?", "DAMN IT! move on", 
"wow, annoying kid detected"];

var sendMessage;

//________Display message__________
function displayMessage(){
    annoyCounter++;
    var x = document.getElementById('message-display');
    if(annoyCounter <= 8){
        sendMessage = messageSetOne[Math.floor(Math.random()*10)];
    } else {
        x.style.color = "red";
        sendMessage = messageSetTwo[Math.floor(Math.random()*10)];
    }
    x.innerHTML = sendMessage;
}


//___________Themes_________________
function theme_default(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #000428, #004e92)";
    }
}

function theme_one(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #f953c6, #b91d73)";
    }
}
function theme_two(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)";
    }
}
function theme_three(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #c31432, #c31432)";
    }
}
function theme_four(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #f12711, #f12711)";
    }
}
function theme_five(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #009FFF, #ec2F4B)";
    }
}
function theme_six(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #FF416C, #FF4B2B)";
    }
}
function theme_seven(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
    }
}
function theme_eight(){
    interactCounter++;
    var interact_body = document.getElementsByClassName('interact-body');
    for(var i = 0; i<interact_body.length; i++){
        interact_body[i].style.backgroundImage = "linear-gradient(to right, #00B4DB, #0083B0)";
    }
}

//_____________Introduce_________________

function introduce(){
    interactCounter++;
    var x = document.getElementById('message-display');
    var y = document.getElementById('user');
    var username = prompt("What's your name?");
    var userage;

    if(username){
        userage = prompt("How old are you?");
    } else{
        x.innerHTML = "You are so boring...";
        username = "user"
    }

    y.innerHTML = username + ": ";

    if(userage){
        x.innerHTML = "Oh hi " + username + "!!!" + " Thanks for at least introducing yourself without wasting my time...";
    } else{
        x.innerHTML = "Okay...I'm being operated by a woman..... if you know what I mean...";
    }

}

var botGoodMessages = ["Hey!", "Hey there!", "Hi!! How are you pal?", "Hello dear", "Hello my friend"];
var botBadMessages = ["-_- hey you, boring person", "I really don't want to talk", "Get lost dude", "Bad morning fri-END", "Buzz off"];
var userGoodMessages = ["Hello Mr.Interact!", "Hello! How are you", "Hey there!", "Hiiii friend", "Hola owner's creation!"];
var userBadMessages = ["I don't like you and Varchasvi", "I'm also pissed, I don't like your website", "I hate you", "You are boring", "Ask Varchasvi to delete you ASAP"];


function saySomethingGood(){
    interactCounter++;
    var usertext = document.getElementById('user-text');
    var bottext = document.getElementById('bot-text');
    var buttontext = document.getElementById('chat-button').innerHTML;
    buttontext = "Chat coming soon...";

    usertext.innerHTML = userGoodMessages[Math.floor(Math.random()*5)];

    setTimeout(botReady => {
        bottext.style.fontStyle = 'italic';
        bottext.innerHTML = "bot is typing......";

        setTimeout(botReply => {
            bottext.style.fontStyle = 'normal';
            bottext.innerHTML = botGoodMessages[Math.floor(Math.random()*5)];
        }, 3000);
    }, 1000);    
}

function saySomethingBad(){
    interactCounter++;
    var usertext = document.getElementById('user-text');
    var bottext = document.getElementById('bot-text');
    var buttontext = document.getElementById('chat-button').innerHTML;
    buttontext = "Chat coming soon...";

    usertext.innerHTML = userBadMessages[Math.floor(Math.random()*5)];

    setTimeout(botReady => {
        bottext.style.fontStyle = 'italic';
        bottext.innerHTML = "bot is typing......";

        setTimeout(botReply => {
            bottext.style.fontStyle = 'normal';
            bottext.innerHTML = botBadMessages[Math.floor(Math.random()*5)];
        }, 3000);
    }, 1000);    
}

function goodbye(){
    interactCounter++;
    var usertext = document.getElementById('user-text');
    var bottext = document.getElementById('bot-text');
    
    usertext.innerHTML = "Goodbye bot. I enjoyed a lot!";

    if(interactCounter == 1){
        bottext.innerHTML = "You interacted only " + interactCounter + " time with this page. Am I that bad.... :-(";
    } else if(interactCounter > 1 && interactCounter <= 10){
        bottext.innerHTML = "Thankyou and goodbye. You interacted " + interactCounter + " times with this page. Thankyou so much!";
    } else{
        bottext.innerHTML = "Goodbye friend but you interacted " + interactCounter + " times with this page. Are you crazy!! I mean...You could have done some productive work in your life instead of wasting your time here.";
    }
}

function badbye(){
    interactCounter++;
    var usertext = document.getElementById('user-text');
    var bottext = document.getElementById('bot-text');
    
    usertext.innerHTML = "I'm bored....I'm going...Stay with your boring owner!!";

    if(interactCounter == 1){
        bottext.innerHTML = "Don't you dare to say a word about Varchasvi. Anyways, your interaction count is just " + interactCounter + ", I got my time saved.";
    } else if(interactCounter > 1 && interactCounter <= 10){
        bottext.innerHTML = "Don't you dare to say a word about Varchasvi. He made me so well that you click " + interactCounter + " times on this page. Now go to hell. I don't care. I never did.";
    } else{
        bottext.innerHTML = "Varchasvi is not boring. He made me and you interacted with me for " + interactCounter + " times. That means I'm freaking amazing and so is he. You can go and waste rest of your time, just like you did while interacting with me.";
    }
}