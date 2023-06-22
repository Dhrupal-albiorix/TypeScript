//Numeric enums
enum Level {
    High,
    Medium,
    Low
}
console.log(Level.High)
console.log(Level.Low)

//Level.High = 5; //error // readonly

// By default, enums are numeric enums, i.e.Fruit.Apple is 0, Fruit.Orange is 1, Fruit.Peach is 2, and Fruit.Pear is 3.
// The number can also be initialized freely:

// enum Fruit {
//     Apple,
//     Orange,
//     Peach,
//     Pear,
// }

enum Fruit {
    Apple = 5,
    Orange = -1,
    Peach,
    Pear,
}

console.log(JSON.stringify(Fruit))

//--------------------------------------------------------String Enums----------------------
enum AppStatus {
    ACTIVE = 'ACT',
    INACTIVE = 'INACT',
    ONHOLD = 'HLD',
    ONSTOP = 'STOP'
}
function checkStatus(status: AppStatus): void {

    console.log(status);
}
checkStatus(AppStatus.ONSTOP);

enum Level2 {
    High = "H",
    Medium = "M",
    Low = "L"
}
// Level2 = "VH"; //error can not ressign to enum
console.log(Level2)

//---------------------------------------------------------Heterogeneous Enums-------------------

enum AppStatus2 {
    ACTIVE = 'Yes',
    INACTIVE = 1,
    ONHOLD = 2,
    ONSTOP = 'STOP'
}
console.log(AppStatus2.ACTIVE);
console.log(AppStatus2.ONHOLD);

//-------------------------------------------------------computed values.---------------------------
enum Weekend {
    Friday = 1,
    Saturday = getDate('Dominoz'),
    Sunday = Saturday * 40 //3*40 ...as sunday will assign to 3
}

function getDate(day: string): number {
    if (day === 'Dominoz') {
        return 3;
    } else {
        return 0;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);  