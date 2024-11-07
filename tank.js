// Описание танков
let redTank = {
    name: "Танк Красных",
    health: 100,
    armor: 50
};

let blueTank = {
    name: "Танк Синих",
    health: 100,
    armor: 30
};

// Функция атаки
function attack(attacker, defender, attackPower) {
    console.log(attacker.name + " атакует " + defender.name + " с силой " + attackPower);

    // Считаем урон: броня ослабляет атаку
    let damage = attackPower - defender.armor;

    // Урон не может быть меньше нуля
    if (damage < 0) {
        damage = 0;
    }

    console.log(defender.name + " теряет " + damage + " здоровья!");

    // Уменьшаем здоровье танка-защитника
    defender.health -= damage;

    // Проверяем, не уничтожен ли танк
    if (defender.health <= 0) {
        console.log(defender.name + " уничтожен! БУМ 💥");
    } else {
        console.log(defender.name + " теперь имеет " + defender.health + " здоровья.");
    }
}

// Игра: танки атакуют друг друга по очереди
attack(redTank, blueTank, 60); // Танк Красных атакует Танк Синих
attack(blueTank, redTank, 40); // Танк Синих атакует Танк Красных
attack(redTank, blueTank, 80); // Еще одна атака Танк Красных
attack(blueTank, redTank, 50); // И ответный удар Танк Синих
