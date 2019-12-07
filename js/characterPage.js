// flag to know if createPlayer1Text function was implemented or not
var createPlayer1TextFlag = 0;

// flag to know if createPlayer2Text function was implemented or not
var createPlayer2TextFlag = 0;

// flag to know if afterChooseBluePlayer1 function was implemented or not
var afterChooseBluePlayer1Flag = 0;

// flag to know if afterChooseYellowPlayer1 function was implemented or not
var afterChooseYellowPlayer1Flag = 0;

// flag to know if afterChooseBluePlayer2 function was implemented or not
var afterChooseBluePlayer2Flag = 0;

// flag to know if afterChooseYellowPlayer2 function was implemented or not
var afterChooseYellowPlayer2Flag = 0;

    
// global variables used in createPlayer1Text and printPlayer1Text functions
var countCharactersOfText1 = 0; //define var to count character of player1 text
var text1String = ""; // define empty string to put it in player1Text
var text1 = ["C","h","o","o","s","e"," ","P","l","a","y","e","r"," ","O","n","e"];
var player1Text = document.getElementById('player1Text');
var print1;

//function print choose player one and stop it after finished
function printPlayer1Text()
{
    print1 = setInterval(createPlayer1Text, 150);
}


//function to write choose player one
function createPlayer1Text()
{
    text1String = text1[countCharactersOfText1];
    player1Text.textContent += text1String;
    countCharactersOfText1++;

    if(countCharactersOfText1 == text1.length)
    {
        clearInterval(print1);
        createPlayer1TextFlag = 1;
    }
}


// global variables used in createPlayer2Text and printPlayer2Text functions
var countCharactersOfText2 = 0; //define var to count character of player1 text
var text2String = ""; // define empty string to put it in player1Text
var text2 = ["C","h","o","o","s","e"," ","P","l","a","y","e","r"," ","T","w","o"];
var player2Text = document.getElementById('player2Text');
var print2;

//function print choose player two and stop it after finished
function printPlayer2TextAfter5Sec()
{

    setTimeout
    (
        function()
        {
            print2 = setInterval(createPlayer2Text, 150);
        }, 5000
    
    );
    
}

//function to write choose player one
function createPlayer2Text()
{
    if(afterChooseBluePlayer1Flag == 1 || afterChooseYellowPlayer1Flag == 1)
    {
        text2String = text2[countCharactersOfText2];
        player2Text.textContent += text2String;
        countCharactersOfText2++;
    
        if(countCharactersOfText2 == text2.length)
        {
            clearInterval(print2);
            createPlayer2TextFlag = 1;
        }

        player1Image.removeEventListener('click', afterChooseBluePlayer1);
        player2Image.removeEventListener('click', afterChooseYellowPlayer1);
    }
}




var player1Image = document.getElementById('player1Image');
var player2Image = document.getElementById('player2Image');
var player1ShowDiv = document.getElementById('player1ShowDiv');
var player2ShowDiv = document.getElementById('player2ShowDiv');
var player1Show = document.getElementById('player1Show');
var player2Show = document.getElementById('player2Show');
var characterSound = document.getElementById("sound");


//create img show for player one and set class and id
var createImgTagPlayer1 = document.createElement("img");
createImgTagPlayer1.setAttribute('class', 'player1Show');
createImgTagPlayer1.setAttribute('id', 'player1Show');

//create img show for player two and set class and id
var createImgTagPlayer2 = document.createElement("img");
createImgTagPlayer2.setAttribute('class', 'player2Show');
createImgTagPlayer2.setAttribute('id', 'player2Show');


function afterChooseBluePlayer1()
{
    if(createPlayer1TextFlag == 1)
    {    
        if(afterChooseYellowPlayer1Flag == 1 || afterChooseBluePlayer1Flag == 1)
        {
            createImgTagPlayer1.setAttribute('src', 'images/goku_blue_left.png');
            characterSound.play();
        }

        else
        {
            createImgTagPlayer1.setAttribute('src', 'images/goku_blue_left1.png');
            player1ShowDiv.appendChild(createImgTagPlayer1);
            characterSound.play();
            afterChooseBluePlayer1Flag = 1; 
        } 
    }  
}

function afterChooseYellowPlayer1()
{
    if(createPlayer1TextFlag == 1)
    {
        if(afterChooseBluePlayer1Flag == 1 || afterChooseYellowPlayer1Flag == 1)
        {
            createImgTagPlayer1.setAttribute('src', 'images/goku_yellow_left.png');
            characterSound.play();
        }
        else
        {
            createImgTagPlayer1.setAttribute('src', 'images/goku_yellow_left.png');
            player1ShowDiv.appendChild(createImgTagPlayer1);
            characterSound.play();
            afterChooseYellowPlayer1Flag = 1;
        }
    }
}

function afterChooseBluePlayer2()
{
    if(createPlayer2TextFlag == 1)
    {
        if(afterChooseYellowPlayer2Flag == 1 || afterChooseBluePlayer2Flag == 1)
        {
            createImgTagPlayer2.setAttribute('src', 'images/goku_blue_right.png');
            characterSound.play();
        }
        else
        {
            createImgTagPlayer2.setAttribute('src', 'images/goku_blue_right.png');
            player2ShowDiv.appendChild(createImgTagPlayer2);
            characterSound.play();
            afterChooseBluePlayer2Flag = 1;
        }

        setTimeout(displayNextButton, 2000);
    }
}

function afterChooseYellowPlayer2()
{
    if(createPlayer2TextFlag == 1)
    {
        if(afterChooseBluePlayer2Flag == 1 || afterChooseYellowPlayer2Flag == 1)
        {
            createImgTagPlayer2.setAttribute('src', 'images/goku_yellow_right.png');
            characterSound.play();
        }
        else
        {
            createImgTagPlayer2.setAttribute('src', 'images/goku_yellow_right.png');
            player2ShowDiv.appendChild(createImgTagPlayer2);
            characterSound.play();
            afterChooseYellowPlayer2Flag = 1;
        }

        setTimeout(displayNextButton, 500);
    }
}

//global variables used in displayNextButton function
nextButton = document.getElementById('nextButton');
nextLink = document.getElementById('nextLink');

//function display next button
function displayNextButton()
{
    if(afterChooseBluePlayer2Flag == 1 || afterChooseYellowPlayer2Flag == 1)
    {
        nextButton.style.display = "inline-block";
        nextLink.textContent = "NEXT";
    }
}


//function store images of players as session variables
function storeSessionVariableOfPlayers()
{
    if(afterChooseBluePlayer1Flag == 1 && afterChooseYellowPlayer1Flag == 0)
    {
        sessionStorage.setItem("player1ImgInFooter", "images/goku9 (1).png");
        sessionStorage.setItem("player1ImgForInBody", "image/edit/goku_blue_left.png");
    }
    else
    {
        sessionStorage.setItem("player1ImgInFooter", "images/goku8 (2).png");
        sessionStorage.setItem("player1ImgForInBody", "image/edit/goku_yellow_left.png");
    }

    if(afterChooseBluePlayer2Flag == 1 && afterChooseYellowPlayer2Flag == 0)
    {
        sessionStorage.setItem("player2ImgInFooter", "images/goku9 (1).png");
        sessionStorage.setItem("player2ImgForInBody", "images/goku_blue_right.png");
    }
    else
    {
        sessionStorage.setItem("player2ImgInFooter", "images/goku8 (2).png");
        sessionStorage.setItem("player2ImgForInBody", "images/goku_yellow_right.png");

    }
}


//implementation and calling functions
window.addEventListener('load', printPlayer1Text);

player1Image.addEventListener('click', afterChooseBluePlayer1);
player2Image.addEventListener('click', afterChooseYellowPlayer1);

window.addEventListener('load', printPlayer2TextAfter5Sec);

player1Image.addEventListener('click', afterChooseBluePlayer2);
player2Image.addEventListener('click', afterChooseYellowPlayer2);

displayNextButton();

nextButton.addEventListener('click', storeSessionVariableOfPlayers)