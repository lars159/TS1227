class Rect {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    area () {
        return (this.a * this.b) ; 
    }
    
     toString () {
        return "rect";
    }
}

const r = new Rect(3,2);

console.log(r.area());
console.log("this is a  " +r );

console.log(` this rectangel have a : ${r.a}  and b ${r.b}`);
