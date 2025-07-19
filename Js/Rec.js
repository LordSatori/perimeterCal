function recCal(){
            let v1 = document.querySelector('.width');
            let v2 = document.querySelector('.length');
            const num1 = v1.value;
            const num2 = v2.value;

            document.querySelector('.result').innerHTML = 2 * (parseFloat(num1) + parseFloat(num2));
        }