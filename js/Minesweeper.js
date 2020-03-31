class House{
    constructor(address, floors, window, doors, roof){
        this.address = address;
        this.floors = floors;
        this.window = window;
        this.doors = doors;
        this.roof = roof;

        // this.init();
    }
    // init(){
    //     this.kiekTuriAukstu();
    //     this.arDegaStogas();
    // }

    arDegaStogas(){
        return console.log(`Namas adresu ${this.address} nedega`);
    }
    kiekTuriAukstu(){
        return console.log(`Namas adresu ${this.address} turi ${this.floors} aukstu`);
        
    }
    nugriautiAuksta(){
        if( this.floors === 0 ){
            return console.log('Namas nugriautas iki pamatu');
        } else {
            this.floors--;
        }
    }
    pastatytiAuksta(){
        this.floors++
    }
}

// House: adresas, aukstu kiekis, langu kiekis, duru kiekis ar turi stoga
const pirmasNamas = new House(`Gedimino pr.`, 3, 30, 1, true);
// console.log(pirmasNamas);

const antrasNamas = new House(`Pakalniskes`, 1, 1, 1, true);
// console.log(antrasNamas);

// pirmasNamas.arDegaStogas();
// antrasNamas.arDegaStogas();
// pirmasNamas.kiekTuriAukstu();
// antrasNamas.kiekTuriAukstu();
antrasNamas.nugriautiAuksta();
antrasNamas.nugriautiAuksta();