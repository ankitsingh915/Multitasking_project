// Tic tac toe

let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.res');
let btns = document.querySelectorAll('.btn1');
let conditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const ticTacToe = (element, index) => {
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? '0' : 'X';
    result.innerHTML  = `Player ${currentPlayer} Turn`;

    for (let i=0; i< conditions.length; i++){
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        // let d = cells[condition[3]];
        // let e = cells[condition[4]];
        // let f = cells[condition[5]];

        // let g = cells[condition[6]];
        // let h = cells[condition[7]];
        // let i = cells[condition[8]];

        if(a=='' || b=='' || c==''){
            continue;
        }
        if((a==b) && (b==c)){
            result.innerHTML= `Player ${a} Won🎉🎊`;
            btns.forEach((btn1) => btn1.disabled = true);
        }
        // if((a && b && c && d && e && f && g && h && i) != "" ){
        //     result.innerHTML= "Match Draw";
        // }
        
    }
};

function reset(){
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn1) =>{
        btn1.value='';
    });
    currentPlayer= 'X';
    result.innerHTML= `Player X Turn`;
    btns.forEach((btn1) => btn1.disabled = false);
};

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((btn1, i)=> {
    btn1.addEventListener('click', ()=> ticTacToe(btn1, i));
});
