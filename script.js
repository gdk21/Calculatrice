document.addEventListener("DOMContentLoaded", function() {

    var allInput = document.querySelectorAll('input');
    var input = Array.prototype.slice.call(allInput);
    var clavier = input.splice(2,15);
    var btnSuppr = clavier.splice(3,1);
    var operator = [clavier[6],clavier[10],clavier[12],clavier[13]];
    var signe = "";
    var mémoire = 0;
    var mémoire = 0;



    clavier.forEach( function (clavier,i,clavier){
        clavier[i].addEventListener('click',function() {
           input[1].value += clavier[i].value;
           mémoire = input[1].value;
           console.log(mémoire);
        });
    });

    operator.forEach( function (operator,i,operator){
      operator[i].addEventListener('click', function(){
        signe = operator[i].value;
        switch(signe) {
          case '+':
            mémoire ;
            mémoire = parseInt(mémoire);
            console.log(parseFloat('2'/'10'));
            break;
          case '-':
            mémoire = parseInt(input[1].value);
            mémoire2 = mémoire;
            mémoire = mémoire2 - "";
            break;
          case '*':
            alert('faire opération multiplier');
            break;
          case '/':
            alert('faire opération diviser');
            break;
          default : alert('shit');
        }
      });
    });


      input[2].addEventListener('click',function() {
      input[0].value = parseInt(mémoire);
    });

      btnSuppr[0].addEventListener('click',function() {
        var saisie = input[1];
        var result = input[0];
        saisie.value = "";
        result.value = "";
        mémoire.value = "";

      });



console.log(operator);



  });



