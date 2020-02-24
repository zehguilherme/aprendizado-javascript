const paragraph = document.querySelector('p');

// setup canvas

const canvas = document.querySelector('canvas');

// ctx representa a área de desenho em tela
const ctx = canvas.getContext('2d'); //pega o contexto atual a ser usado em tela (2d)

// Igualar altura e largura da viewport do navegador com a do canvas
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// função para gerar um número aleatório no intervalo entre os 2
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// Modelando a forma da bola
class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX; //velocidade eixo X
    this.velY = velY; //velocidade eixo Y
    this.exists = exists; //rastreia se as bolas existem (se não foram eliminadas pela bola maligna)
  }
};

// Modelando a bola
class Ball extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
    super(x, y, velX, velY, exists);

    this.color = color;
    this.size = size; //raio em pixels
  }

  // Método para desenhar
  draw() {
    ctx.beginPath(); //desenhar uma forma
    ctx.fillStyle = this.color; //fillStyle: define a cor da forma
    //arc(): traçar o formato de um arco
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, true); //parâmetros: posição x e y do centro do arco; raio do arco (size); 2 últimos: nº inicial e final de graus em volta do círculo em que o arco é desenhado ( 0º e 2 * PI(eq 360º) )
    ctx.fill(); //termina de "desenhar" o que começou em beginPath() e preenche a área com a cor especificada acima
  };

  // Atualizar o posicionamento da bola (movimentação)
  update() {
    // Se bola alcançou a borda da tela, é invertido a polaridade da velocidade relevante para fazer a bola ir na direção oposta

    // Verf se coord. x (centro da bola) é maior que largura da tela (bola está saindo da borda direita)
    // size da bola é incluído no cálculo
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    // Verf se coord. x (centro da bola) é menor que 0 (bola está saindo da borda esquerda)
    // size da bola é incluído no cálculo
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    // Verf se coord. y (centro da bola) é maior que a altura da tela (bola está saindo da borda inferior)
    // size da bola é incluído no cálculo
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    // Verf se coord. y (centro da bola) é menor que 0 (bola está saindo da borda superior)
    // size da bola é incluído no cálculo
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    // Adição da velocidade á varíavel correspondente
    this.x += this.velX;
    this.y += this.velY;
  };

  // Detecção de colisão
  collisionDetect() {
    // Percorrer array de bolas
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) { //verifica se a bola atual do loop não é a mesma que está sendo verificada no momento (collisionDetect())
        // verifica se alguma das áreas dos 2 círculos se sobrepõem
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // se detectar colisão
        if (distance < this.size + balls[j].size) {
          // muda-se a cor de ambos os círculos para uma cor aleatória
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
        }
      }
    }
  }
};

// Construção da bola maligna
class EvilCircle extends Shape {
  constructor(x, y, exists) {
    super(x, y, 20, 20, exists);

    this.color = 'white';
    this.size = 20;
  }

  // Desenha instância do objeto na tela
  draw() {
    ctx.beginPath(); //desenhar uma forma
    ctx.lineWidth = 3; //torna o traço um pouco mais espesso
    ctx.strokeStyle = this.color; //fillStyle: define apenas um traço externo com a cor
    //arc(): traçar o formato de um arco
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, true); //parâmetros: posição x e y do centro do arco; raio do arco (size); 2 últimos: nº inicial e final de graus em volta do círculo em que o arco é desenhado ( 0º e 2 * PI(eq 360º) )
    ctx.stroke(); //termina de "desenhar" o que começou em beginPath() e faz o traço com a cor especifica em strokeStyle acima
  }

  // Fará a mesma coisa que a primeira parte da função update() de Ball()
  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x = -(this.size);
    }

    // Verf se coord. x (centro da bola) é menor que 0 (bola está saindo da borda esquerda)
    // size da bola é incluído no cálculo
    if ((this.x - this.size) <= 0) {
      this.x = -(this.size);
    }

    // Verf se coord. y (centro da bola) é maior que a altura da tela (bola está saindo da borda inferior)
    // size da bola é incluído no cálculo
    if ((this.y + this.size) >= height) {
      this.y = -(this.size);
    }

    // Verf se coord. y (centro da bola) é menor que 0 (bola está saindo da borda superior)
    // size da bola é incluído no cálculo
    if ((this.y - this.size) <= 0) {
      this.y = -(this.size);
    }
  }

  // Adicionará um ouvinte de evento 'onkeydown' ao objeto 'window' para que quando determinadas teclas do teclado forem pressionadas, possamos mover o círculo maligno ao redor
  setControls() {
    let _this = this;

    // 65, 68, 87, 83: códigos que representam determinadas teclas
    //assim que uma tecla é pressionada, a prop. keyCode é consultada pra ver qual tecla é
    onkeydown = function (e) {
      if (e.key == 'a' || e.key == 'A') { //tecla A
        _this.x -= _this.velX;
      } else if (e.key === 'd' || e.key === 'D') { //tecla D
        _this.x += _this.velX;
      } else if (e.key === 'w' || e.key === 'W') { //tecla W
        _this.y -= _this.velY;
      } else if (e.key === 's' || e.key === 'S') { //tecla S
        _this += _this.velY;
      }
    }
  }
  

  // Irá agir de forma muito semelhante ao método collisionDetect() do Ball()
  collisionDetect() {
    // Percorrer array de bolas
    for (let j = 0; j < balls.length; j++) {
      if ((balls[j].exists)) { //verifica se a bola atual existe
        // verifica se alguma das áreas dos 2 círculos se sobrepõem
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // se detectar colisão com a bola do mal
        if (distance < this.size + balls[j].size) {
          // bola atual é deletada
          balls[j].exists = this.exists = false;
        }
      }
    }
  }
};

// Animar bola
const balls = []; //vetor para armazenar todas as bolas

// Valores aleatórios são gerados e adicionados no final do array de bolas (apenas quando tiver menos que 25 bolas)
// Quando há 25 bolas na tela, não aparecem mais
while (balls.length < 25) {
  const size = random(10, 20);
  var ball = new Ball(
    // a posição da bola sempre é desenhada a pelo menos uma largura da borda da tela para evitar erros de desenho
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
    size
  );
  balls.push(ball);
}

let evilcircle = new EvilCircle(
random(0, width),
random(0, height),
true
);

evilcircle.setControls();

// Função loop de animação - atualizar as informações no programa e renderizar a visualização resultado em cada quadro da animação
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //cor de preenchimento da tela
  ctx.fillRect(0, 0, width, height); //desenha retangulo da mesma cor na largura, altura da tela

  // Percorre todo o array de bolas
  for (let i = 0; i < balls.length; i++) {
    // Verifica se a bola atual existe
    if (balls[i].exists) {
      balls[i].draw(); //desenha cada uma das bolas
      balls[i].update(); //atualiza a posição e velocidade no tempo para o próximo quadro
      balls[i].collisionDetect(); //detecção de colisão
    }
  }

  // bola do mal
  evilcircle.draw();
  evilcircle.checkBounds();
  evilcircle.collisionDetect();

  // cria uma animação suave ao executar a função 'loop' um número determinado de vezes por segundo (recursivamente)
  requestAnimationFrame(loop);
}

loop();