function cirCal(){
            let v = document.querySelector('.radius');
            const num = v.value;

            document.querySelector('.result').innerHTML =  3.14 * 2 * num;
    }