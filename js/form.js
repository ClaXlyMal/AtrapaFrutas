class Form{
    constructor(){
        this.input = createInput("Agrega Tu Nombre");
        this.input.mouseClicked(function() {
          this.value("");
        });
        this.input.attribute('maxlength', '10'); // establece el límite de caracteres
        this.input.input(function() {
    if (this.value().length > 10) { // verifica la longitud del valor
        this.value(this.value().slice(0, 10)); // corta el valor a 10 caracteres
    }
});

        
       this.button = createButton('Jugar');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reiniciar');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("ATRAPA FRUTA");
        this.title.position(680, 150);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(850,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(868,450);
        this.button.style('width', '180px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            if (this.input.value()) { // verifica si se ha ingresado un valor
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html("Hola, " + player.name)
                this.greeting.position(665,250);
                this.greeting.style('color', 'white');
                this.greeting.style('font-size', '90px');
            } else {
                alert("Antes de empezar Ingresa tu usuario");
            }
        });
        
        

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        
            location.reload();
        });
        

    }
}
