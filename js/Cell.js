class Cell {
    constructor( index, x, y, parent ) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.PARENT = parent;
        this.parentDOM = parent.DOMfield;
        this.DOM = null;
        this.hasBomb = false;
        this.opened = false;
        this.flaged = false;

        this.init();
    }

    init() {
        const HTML = `<div id="c_${this.index}" class="cell"></div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);

        this.DOM = this.parentDOM.querySelector(`#c_${this.index}`);
        this.DOM.addEventListener( 'click', (e) => this.click(e), {once: true} );

        this.DOM.addEventListener('contextmenu', (e) => this.rightClick(e))
    }

    rightClick( event ){
        event.preventDefault();
        if ( this.flaged ){
            this.DOM.classList.remove('flag'); 
            this.PARENT.updateBombCounter( 1 );
        } else {
            this.DOM.classList.add('flag'); 
            this.PARENT.updateBombCounter( -1 );
        }
        this.flaged = !this.flaged;
    }

    click( event ) {
        if ( this.PARENT.canPlay && !this.opened && !this.flaged) {
            this.DOM.classList.add('open');
            if ( this.hasBomb ) {
                this.DOM.classList.add('bomb');
            }
            this.PARENT.checkCell( this.index );
        }
    }

    addBomb() {
        this.hasBomb = true;
        // this.DOM.innerText = 'B';
    }

    showNumber( number ) {
        this.opened = true;
        if ( number > 0 ) {
            this.DOM.innerText = number;
        }

        // this.DOM.innerText = number > 0 ? number : '';
    }
}

export default Cell;