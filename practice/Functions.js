// //triangle : 1/2 bh
// function triangle(b: number, h: number) {
//     console.log( (1/2)*b*h , "triangle")
// }
// //circle : pi r r
// function circle(r: number) {
//     console.log( (Math.PI)*r*r , "circle" )
// }
// //squre : d*d
// function squre(d: number) {
//     console.log(d*d , "squre")
// }
// triangle(22, 34);
// circle(22);
// squre(9)
//---------------------------------------------------------------------------------------------------------------------
// function Aera() {
//     let triangle = (a: number, b: number) => { return ((1 / 2) * b * a) };
//     let circle = (a: number) => { return ((Math.PI) * a * a) };
//     let squre = (a: number) => { return (a * a) }
//     return { triangle, circle, squre };
// }
// console.log(Aera().triangle(2, 4))
// console.log(Aera().circle(2))
// console.log(Aera().squre(4))
//---------------------------------------------------------------------------------------------------------------------
var Shapes;
(function (Shapes) {
    Shapes["Circle"] = "circle";
    Shapes["Sqaure"] = "square";
    Shapes["Triangle"] = "triangle";
})(Shapes || (Shapes = {}));
/**
 * to get area of given shape
 * @param shapeName name of the given shape for @example squre, rectangle etc.
 * @param dimension dimension of the given shape
 * @returns
 */
function getArea(shapeName, dimension) {
    switch (shapeName) {
        case Shapes.Sqaure:
            var height = dimension.height;
            return height ? height * height : 0;
        case Shapes.Triangle:
            var T_height = dimension.height;
            var T_width = dimension.width;
            return T_height && T_width ? ((1 / 2) * T_height * T_width) : 0;
        case Shapes.Circle:
            var redius = dimension.radius;
            return redius ? ((Math.PI) * redius * redius) : 0;
    }
}
console.log(getArea(Shapes.Sqaure, { height: 10 }));
