
// setup canvas

const canvas = document.querySelector('canvas');
// ctx representa a área de desenho em tela
const ctx = canvas.getContext('2d');  //pega o contexto atual a ser usado em tela (2d)

// Igualar altura e largura da viewport do navegador com a do canvas
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function para gerar um número aleatório no intervalo entre os 2
function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// Modelando uma bola
// Construtor
class Ball {
  constructor(x, y, velX, vleY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.vleY = vleY;
    this.color = color;
    this.size = size; //raio em pixels
  }
  // Adição do método draw() ao protótipo de Ball
  draw() {
    ctx.beginPath(); //desenhar uma forma
    ctx.fillStyle = this.color; //fillStyle: define a cor da forma
    //arc(): traçar o formato de um arco
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, true); //parâmetros: posição x e y do centro do arco; raio do arco (size); 2 últimos: nº inicial e final de graus em volta do círculo em que o arco é desenhado ( 0º e 2 * PI(eq 360º) )
    ctx.fill(); //termina de "desenhar" o que começou em beginPath() e preenche a área com a cor especificada acima
  }

  // Atualizar o posicionamento da bola
  update() {
    // Se bola alcançou a borda da tela
    if((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    
    if((this.y + this.size) >= height) {
      this.vleY = -(this.vleY);
    }

    if((this.y - this.size) <= 0) {
      this.vleY = -(this.vleY);
    }

    this.x += this.velX;
    this.y += this.vleY;
  }
}

let testeball = new Ball(50, 100, 4, 4, 'blue', 10);

console.log(
  testeball.x,
  testeball.size,
  testeball.color,
  testeball.draw()
);
