var canvas = document.querySelector('canvas')
;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'rgba(0, 0, 255, 0.5)';
//c.fillRect(400, 100, 100, 100);
//c.fillStyle = 'rgba(0, 255, 0, 0.5)';
//c.fillRect(300, 300, 100, 100);
//console.log(canvas);

// line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle ="blue";
//c.stroke();

// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();

//for (var i=0; i < 100; i++) {
    //var x = Math.random() * window.innerWidth;
    //var y = Math.random() * window.innerHeight;
    //c.beginPath();
    //c.arc(x, y, 30, 0, Math.PI * 2, false);
    //c.strokeStyle = 'blue';
    //c.stroke();
//}


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

this.draw = function() {
c.beginPath();
c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
c.strokeStyle = '#ff99ff';
c.stroke();
c.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circle = new Circle(200, 200, 3, 3, 30);

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
} 

    function animate() {
        requestAnimationFrame(animate); 
     c.clearRect(0, 0, innerWidth, innerHeight);

     for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
     }
    
  }
    
animate();