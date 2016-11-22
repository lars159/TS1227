 
class Rect {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    area () {
        const self = this;
        return new Promise(function(resolve, reject) { 
            setTimeout(function() { resolve(self.a * self.b); }, 3000);
        })  
    }
    
     toString () {
        return "rect";
    }
}


const r = new Rect(2,2);

r.area().then(function(result) {
	console.log(result);
});