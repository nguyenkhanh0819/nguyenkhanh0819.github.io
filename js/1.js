//Javascript

// function sc() {
//     // nhap vung du lieu tu thanh alert
//     var rng = prompt('Enter the range');

//     res = rng.split("-");
//     // kiem tra res -> so dau, so cuoi ( 2 so)
//     if (res.length != 2) {
//         alert("invalid range ");
//         return;
//     }
//     first = parseInt(res[0]);
//     second = parseInt(res[1]);

//     //Kiem tra so dau phai nho hon so cuoi
//     if (first > second) {
//         alert("invalid range ");
//         return;
//     }
//     // chuoi tao html table
//     str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

//     //vong lap i tu first den second (number, square = number*number, cube = number*number*number)
//     //voi moi i tao mot dong table hien thi phep tinh tinh duoc -> noi vao str

//     for (i = first; i <= second; i++) {
//         str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
//     }

//     // Tra ve chuoi html hien thi bang tinh
//     document.write(str);
// }


//JQuery
$( document ).ready(function() {
        // nhap vung du lieu tu thanh alert
    var rng = prompt('Enter the range');

    res = rng.split("-");
    // kiem tra res -> so dau, so cuoi ( 2 so)
    if (res.length != 2) {
        alert("invalid range ");
        return;
    }
    first = parseInt(res[0]);
    second = parseInt(res[1]);

    //Kiem tra so dau phai nho hon so cuoi
    if (first > second) {
        alert("invalid range ");
        return;
    }
    // chuoi tao html table
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

    //vong lap i tu first den second (number, square = number*number, cube = number*number*number)
    //voi moi i tao mot dong table hien thi phep tinh tinh duoc -> noi vao str

    for (i = first; i <= second; i++) {
        str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }

    str += '</table><a href="./index.html"><h1>Về trang chủ</h1></a>';

    // Tra ve chuoi html hien thi bang tinh
    document.write(str);
});