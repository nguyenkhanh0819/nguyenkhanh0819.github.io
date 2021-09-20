
// Java script
// // Tim nguyen am
// function findLMV() {
//     //Lay chuoi tu input co id la t1
//     var str = $("#t1").val();

//     // Vong lap 
//     for (i = 0; i < str.length; i++) {
//         //Duyet tung ki tu trong chuoi neu co "a, e, i, o, u" thi tra ve nguyen am do va vi tri cua no
//         if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
//             || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
//             return ("Left most vowel of " + str + " is at location " + (i + 1));
//     }
//     //Khong tim thay
//     return ("No vowels found for string " + str);
// }

// //Dao so
// function reverse(num) {
//     rnum = 0;
//     temp = num;

//     //kiem tra du lieu nhap vao co phai so
//     if (isNaN(num)) {
//         return "invalid number";
//     }


//     //vong lap VD: 123
//     while (num != 0) {
//         rnum *= 10;
//         //rnum = 0       rnum = 30     rnum = 320
//         rnum += num % 10;
//         //rnum = 3       rnum = 32     rnum = 321
//         num -= num % 10;
//         //num = 120      num = 10
//         num = Math.floor(num / 10);
//         //lam tron
//         //num = 12       num = 1
//     }
//     return "Reverse of num " + temp + " is " + rnum;
// }


// JQuery

$(document).ready(function () {
    $("#btn1").click(function () {

        //Lay chuoi tu input co id la t1
        var str = $("#t1").val();

        // Vong lap 
        for (i = 0; i < str.length; i++) {
            //Duyet tung ki tu trong chuoi neu co "a, e, i, o, u" thi tra ve nguyen am do va vi tri cua no
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
                || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
                alert("Left most vowel of " + str + " is at location " + (i + 1));
                return;
            }

        }
        //Khong tim thay
        alert("No vowels found for string " + str);
    });


    $("#btn2").click(function () {
        num = $("#t2").val();
        rnum = 0;
        temp = num;

        //kiem tra du lieu nhap vao co phai so
        if (isNaN(num)) {
            alert("invalid number");
            return;
        }


        //vong lap VD: 123
        while (num != 0) {
            rnum *= 10;
            //rnum = 0       rnum = 30     rnum = 320
            rnum += num % 10;
            //rnum = 3       rnum = 32     rnum = 321
            num -= num % 10;
            //num = 120      num = 10
            num = Math.floor(num / 10);
            //lam tron
            //num = 12       num = 1
        }
        alert("Reverse of num " + temp + " is " + rnum);
    })
});