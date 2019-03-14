'use strict';



//функция создания шахматной доски
function createTable () {

    let container = document.querySelector('.container'),
    table = document.createElement('table'),
    tableBorderNum = [1,2,3,4,5,6,7,8],
    tableBorderLetter = ['A','B','C','D','E','F','G','H'];

    container.appendChild(table); //вставляем таблицу

    for (let i = 0; i < 10; i++) {  //создаем строки
        let tr = document.createElement('tr');
    
        if (i === 0) { //добавляем классы
            tr.classList.add('chess-header'); 
        } else if (i >=1 && i <= 8) { 
            tr.classList.add('chess-tr-body');
        } else {
            tr.classList.add('chess-footer');
        }
        
        table.appendChild(tr); //вставляем строки
    
        for (let j = 0; j < 10; j++ ) { //создаем столбцы
            let td = document.createElement('td');
    
            if (j === 0) { //добавляем классы и нумерацию
                td.classList.add('chess-left-side');
                td.textContent = tableBorderNum[tableBorderNum.length - i];
            } else if ( (i === 0 ) &&  (j >=1 && j <= 8) ) {
                td.classList.add('chess-head-side');
                td.textContent = tableBorderLetter[j - 1];
            } else if ( (i === 9 ) &&  (j >=1 && j <= 8) ) {
                td.classList.add('chess-footer-side');
                td.textContent = tableBorderLetter[j - 1];
            } else if (j >=1 && j <= 8) { 
                td.classList.add('chess-td-body');
            } else {
                td.classList.add('chess-right-side');
                td.textContent = tableBorderNum[tableBorderNum.length - i];
            }
    
            tr.appendChild(td); //вставляем столбцы
        }
    }
    
}

//функция расставления шахматных фигур
function setChessPieces () {

    let chessPieces = document.querySelectorAll('.chess-td-body'),
    chessPieceBox = {
        whiteChessKing : '&#9812;',
        whiteChessQueen : '&#9813;',
        whiteChessRook: '&#9814;',
        whiteChessBishop: '&#9815;',
        whiteChessKnight: '&#9816;',
        whiteChessPawn: '&#9817;',
        blackChessKing: '&#9818;',
        blackChessQueen: '&#9819;',
        blackChessRook: '&#9820;',
        blackChessBishop: '&#9821;',
        blackChessKnigh: '&#9822;',
        blackChessPawn: '&#9823;'
    };

    for (let i = 0; i < chessPieces.length; i++) { //расставляем фигуры в зависимости от номера в узле
        
        if ( (i == 0) || (i == 7) ) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessRook;
        } else if ( (i == 1) || (i == 6) ) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessKnigh;
        } else if ( (i == 2) || (i == 5) ) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessBishop;
        } else if (i == 3) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessQueen;
        } else if (i == 4) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessKing;
        } else if ( (i >= 8) && (i <= 15) ) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessPawn;
        } else if ( (i >= 48) && (i <= 55) ) {
            chessPieces[i].innerHTML = chessPieceBox.whiteChessPawn;
        } else if ( (i == 56) || (i == 63) ) {
            chessPieces[i].innerHTML = chessPieceBox.whiteChessRook;
        } else if ( (i == 57) || (i == 62) ) {
            chessPieces[i].innerHTML = chessPieceBox.whiteChessKnight;
        } else if ( (i == 58) || (i == 61) ) {
            chessPieces[i].innerHTML = chessPieceBox.whiteChessBishop;
        } else if (i == 59) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessQueen;
        } else if (i == 60) {
            chessPieces[i].innerHTML = chessPieceBox.blackChessKing;
        }

    }

}

createTable ();
setChessPieces ();