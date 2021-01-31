class Character {
  constructor(imageSrc, action, x, y) {
    this.width = 256;
    this.height = 256;
    this.x = x;
    this.y = y;
    this.yForOrder = this.y + this.height - 24;
    this.action = action;
    this.image = new Image();
    this.image.src = imageSrc;
    this.setAction();
  }

  setAction() {
    switch (this.action) {
      case "attack":
        this.startFrame = 0;
        this.endFrame = 1;
        break;
      case "underAttack":
        this.startFrame = 2;
        this.endFrame = 3;
        break;
      default:
        this.startFrame = 0;
        this.endFrame = 0;
    }
    this.frame = this.startFrame;
  }
  updateAction(action) {
    this.action = action;
    this.setAction();
  }
  draw() {
    if (cm.playedFrame % 20 === 0) {
      if (this.frame < this.endFrame) {
        this.frame++;
      } else {
        this.frame = this.startFrame;
      }
    }

    cm.context.drawImage(
      this.image,
      this.frame * 256,
      0,
      256,
      256,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
