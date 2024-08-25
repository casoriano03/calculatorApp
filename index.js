var numberstring ="";

display()

function display() {
    showScreen()
    showKeypad()
}


function showScreen() {
    document.getElementById('screenDiv').innerHTML += /*html*/ `
    <div id="innerScreen">
    <h3 id="numberTyped">0</h3>
    <h1 id="total">0</h1>
    </div>
    `;    
}

function showKeypad() {
    showNumber("pads","key","1")
    showNumber("pads","key","2")
    showNumber("pads","key","3")
    showNumber("pads","key","4")
    showNumber("pads","key","5")
    showNumber("pads","key","6")
    showNumber("pads","key","7")
    showNumber("pads","key","8")
    showNumber("pads","key","9")
    showNumber("pads","key","0")
   
    document.getElementById('keypadDiv').innerHTML += /*html*/ `
    <div id="add" class="pads" onclick="typeNum('+')">+</div>
    <div id="minus" class="pads" onclick="typeNum('-')">-</div>
    <div id="multiply" class="pads" onclick="typeNum('*')">*</div>
    <div id="divide" class="pads" onclick="typeNum('/')">/</div>
    <div id="equals" class="pads" onclick="calculate()">=</div>
    `;
}

function showNumber(common, id, text) {
    document.getElementById('keypadDiv').innerHTML += /*html*/ `
    <div id="${id}${text}" class="${common}" onclick="typeNum(${text})">${text}</div>
    `;
}



const input = document.getElementById('numberTyped')

function typeNum(text) {
    numberstring += text
    input.innerHTML = numberstring
}

function calculate() {
    const total = eval(numberstring)
    document.getElementById('total').innerHTML = total 
    numberstring = "";
    input.innerHTML = "0";
}