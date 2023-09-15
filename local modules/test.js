class SuperHero {
    constructor(name){
        this.name = name;
    }

    logName(){
        console.log(this.name);
    }
    
    setName(name){
        this.name = name;
    }
}

module.exports = new SuperHero('Iron Man');