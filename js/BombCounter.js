class BombCounter {
    constructor( parentHeader, bombCount ) {
        this.parentHeader = parentHeader;
        this.bombCount = bombCount;

        this.render();
    }

    render() {
        const HTML = `<div class="counter bombs">${this.convert(this.bombCount)}</div>`;
        this.parentHeader.insertAdjacentHTML('beforeend', HTML);
    }

    convert( number ) {
        if ( number < 100 ) {
            return '0'+number;
        }
        if ( number < 10 ) {
            return '00'+number;
        }
        return number;
    }

    // convert( number ) {
    //     let newNumber = number;
    //     if ( number < 100 ) {
    //         newNumber = '0'+newNumber;
    //     }
    //     if ( number < 10 ) {
    //         newNumber = '0'+newNumber;
    //     }
    //     return newNumber;
    // }

    // convert( number ) {
    //     const maxLength = 3;
    //     const numberLength = (''+number).length;
    //     return '0'.repeat(maxLength-numberLength) + number;
    // }
}

export default BombCounter;