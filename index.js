// Your code here
// function Polygon(side){
//     this.side = side 
//     this.countSides = function countSides(){
//        this.side.length
//     }
//     this.perimeter = function perimeter(){
//          this.side.forEach(side=>{
//             let value =0;
//             return value += side
//         })
//     }
// }


class Polygon{
    constructor(sides){
      this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        let v = 0
        this.sides.forEach(side =>{
            v+=side
            
        })
        return v
    }
}

class Triangle extends Polygon{
   get isValid(){
       let e1 = this.sides[0]
       let e2 = this.sides[1]
       let e3 = this.sides[2]
       if(e1+e2 > e3 && e1+e3 > e2 && e2+e3 >e1){

           return true
       }else{
           return false
       }
   }
}

class Square extends Polygon{
    get isValid(){
        let e1 = this.sides[0]
        let e2 = this.sides[1]
        let e3 = this.sides[2]
        let e4 = this.sides[3]
        if(e1===e2 && e2=== e3 && e3 === e4 && e4===e1){
 
            return true
        }else{
            return false
        }
    }
    get area(){
        let e1 = this.sides[0]
        let e2 = this.sides[1]
        let e3 = this.sides[2]
        let e4 = this.sides[3]
        return e1 * e2 
    }

}