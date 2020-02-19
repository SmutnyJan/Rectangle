class math {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    perimeter = function() {
        let perim = parseFloat(this.width) * 2 + parseFloat(this.height) * 2;

        return perim;

    }
    volume = function() {
        let vol = parseFloat(this.width) * parseFloat(this.height);
    
        return vol;
    }
}