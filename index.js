function formatMask() {
    IMask(
        document.getElementById("bd"),
        {
            mask: Date,
            min: new Date(1900, 0, 1),
            max: new Date(2100, 0, 1),
            lazy: false
        });
}

function calcMatrix() {
    let matrix = {};
    const date = document.querySelector("#bd").value;
    const [day, month, year] = date.split(".").map(i => Number(i));

    const numArr = num => num.toString().split('').map(i => Number(i));
    const energy3 = year => sum22(numArr(year).reduce((i, g) => i + g));
    const sum22 = num => {
        if (num > 22) {
            const [one, two] = numArr(num);
            num = one + two;
        }
        return +num;
    };

    matrix.c1 = sum22(day);
    matrix.c2 = sum22(month);
    matrix.c3 = energy3(year);
    matrix.c4 = sum22(matrix.c1 + matrix.c2 + matrix.c3);
    matrix.c5 = sum22(matrix.c1 + matrix.c2);
    matrix.c6 = sum22(matrix.c3 + matrix.c2);
    matrix.c7 = sum22(matrix.c3 + matrix.c4);
    matrix.c8 = sum22(matrix.c1 + matrix.c4);
    matrix.c9 = sum22(matrix.c1 + matrix.c2 + matrix.c3 + matrix.c4);
    matrix.c10 = sum22(matrix.c5 + matrix.c6 + matrix.c7 + matrix.c8);
    matrix.c11 = sum22(sum22(matrix.c1 + matrix.c3) + sum22(matrix.c2 + matrix.c4));
    matrix.c12 = sum22(matrix.c9 + matrix.c2);
    matrix.c13 = sum22(matrix.c9 + matrix.c1);
    matrix.c14 = sum22(matrix.c13 + matrix.c12);
    matrix.c15 = sum22(matrix.c12 + matrix.c2);
    matrix.c16 = sum22(matrix.c1 + matrix.c13);
    matrix.c17 = sum22(matrix.c9 + matrix.c4);
    matrix.c18 = sum22(matrix.c9 + matrix.c3);
    matrix.c19 = sum22(matrix.c18 + matrix.c17);
    matrix.c20 = sum22(matrix.c4 + matrix.c17);
    matrix.c21 = sum22(matrix.c3 + matrix.c18);
    matrix.c22 = sum22(matrix.c21 + matrix.c20);
    matrix.c23 = sum22(matrix.c16 + matrix.c15);
    matrix.c24 = sum22(matrix.c10 + matrix.c9);

    console.log(matrix);

    Object.keys(matrix).forEach(i => document.querySelectorAll(`#${i}`).forEach(j => j.innerText = matrix[i]));
    document.querySelector(".numbers").classList.add("show");
    document.querySelectorAll("#table > tbody > td").forEach(i => i.classList.add("show"));
}