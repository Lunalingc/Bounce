class NummerBal extends Bal {
   x;
    y;
    speedX;
    speedY;
    nummer;
  
    constructor (_x, _y, _speedX, _speedY, _nummer) {
        this.x = _x;
        this.y = _y;
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.nummer = _nummer;

    }

    show() {
        fill(255, 255, 255);
        ellipse(this.x, this.y, 50, 50);

        fill(255,255,255);
        textSize(15);
        textSize(this.nummer, this.x, this.y);
      }
  
  
  
  
  
    
  }