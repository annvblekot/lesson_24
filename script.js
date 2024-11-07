function cleanTeeth() {
    console.log("Взять щетку");
    console.log("Нанести пасту");
    console.log("Почистить зубы");
}

cleanTeeth();

function makeSandwich(ingredient) {
    console.log("Берем хлеб");
    console.log("Кладем " + ingredient);
    console.log("Накрываем другим куском хлеба");
}

makeSandwich("сыр"); // Сделает бутерброд с сыром.
makeSandwich("ветчина"); // Сделает бутерброд с ветчиной.

function countApples() {
    return 5;  // Эта функция "вернет" число 5
}

let apples = countApples(); // Сохраняем результат в переменную
console.log(apples); // Выведет 5


function sayHello() {
    console.log("Привет!");
}

function greetUser() {
    sayHello();  // Эта функция вызывает другую функцию
    console.log("Как дела?");
}

greetUser();
