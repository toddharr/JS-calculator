let count = 0;
var total_list = [];
var equals_list = [];

const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('one')) {
            total_list.push(1);
        } else if (styles.contains('two')) {
            total_list.push(2);
        } else if (styles.contains('three')) {
            total_list.push(3);
        } else if (styles.contains('four')) {
            total_list.push(4);
        } else if (styles.contains('five')) {
            total_list.push(5);
        } else if (styles.contains('six')) {
            total_list.push(6);
        } else if (styles.contains('seven')) {
            total_list.push(7);
        } else if (styles.contains('eight')) {
            total_list.push(8);
        } else if (styles.contains('nine')) {
            total_list.push(9);
        } else if (styles.contains('plus')) {
            equals_list.push(total_list.join(''));
            total_list = [];
            console.log(equals_list);
        } else if (styles.contains('minus')) {
            equals_list.push(total_list.join(''), "-");
            total_list = [];
            console.log(equals_list);
        } else if (styles.contains('equals')) {
            equals_list.push(total_list.join(''));
            total_list = [];
            minus = 0;
            for (index = 0; index < equals_list.length; index++) {
                if (minus == 1) {
                    equals_list[index] = "-" + equals_list[index];
                    minus = 0;
                }
                if (equals_list[index] == "-") {
                    minus = 1;
                } else {
                    equals_list[index] = parseInt(equals_list[index]);
                    total_list.push(equals_list[index]);
                }
            }
            var sum = total_list.reduce(function(a, b){
                return a + b;
            });
            total_list = [sum]
        } else if (styles.contains('clear')) {
            total_list = [];
            equals_list = [];
        }
        
        
        value.textContent = total_list.join('');
    });
});