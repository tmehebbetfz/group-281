console.log("Выберите действие:1 - Показать фрукты 2 - Добавить фрукт 3 - Показать корзину 4 - Выйти");
let korzina = [];
let otvetPolzovatela = 2;
if (otvetPolzovatela == 1) {
    console.log("0: apple, 1: mango, 2: banana, 3:orange");
} else if (otvetPolzovatela == 2) {
    let otvet = 1
    console.log("viberi frukt");
    if (otvet == 0) {
        korzina.push("apple");
    } else if (otvet == 1) {
        korzina.push("mango");
    } else if (otvet == 2) {
        korzina.push("banana");
    } else if (otvet == 3) {
        korzina.push("orange");
    }
} else if (otvetPolzovatela == 3) {
    console.log(korzina);
} else if (otvetPolzovatela == 4) {
    console.log("poka");
}