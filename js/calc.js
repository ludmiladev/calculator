    function plus(){
        let num1, num2, result; // визначила двы змінні, куди буду класти числа, що треба додати
        num1 = document.getElementById('n1').value;// отримую число по його ідентифікатору, те число, що ввів користувач щоб записалося
        num1 = parseInt(num1);// перевырить вміст інпута, і якщо його потрібно перетворити на число, то перетворить

        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);

        result = num1 + num2;
        console.log(result);
        // document.getElementById('result').value;
        document.getElementById('result').value = result;

}
          
function subtraction() {
          let num1, num2, result; // визначила двы змінні, куди буду класти числа, що треба додати
        num1 = document.getElementById('argument1').value;// отримую число по його ідентифікатору, те число, що ввів користувач щоб записалося
        num1 = parseInt(num1);// перевырить вміст інпута, і якщо його потрібно перетворити на число, то перетворить

        num2 = document.getElementById('argument2').value;
        num2 = parseInt(num2);

        result = num1 - num2;
        console.log(result);
        // document.getElementById('result').value;
  document.getElementById('result').value = result;
  
}