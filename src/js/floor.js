class Floor {

  constructor(ctx) {
    this.width = 1000;
    this.height = 200;

    this.image3 = new Image();
    this.image3.src = "/src/img/floor.jpg";

    this.posX = 0;
    this.posY = 400;

    this.velX = 5;
    this.ctx = ctx
  }

  draw() {


    this.ctx.drawImage(this.image3, this.posX, this.posY, this.width, this.height);
    this.ctx.drawImage(this.image3, this.posX + this.width, this.posY, this.width, this.height);
    this.move()
  }

  move() {
    if (this.posX <= -this.width) {
      this.posX = 0;
    }
    this.posX -= this.velX;
  }
}