const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const PLAYER_SCALE = 0.15;

class Player {
    constructor() {

        this.velocity = {
            x:0,
            y:0
        }

        const image = new Image();
        image.src = './img/spaceship.png';
        image.onload = () => {
            this.image = image;
            this.width = image.width * PLAYER_SCALE;
            this.height = image.height * PLAYER_SCALE;

            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 40
            }
        }
    }

    draw() {
        // c.fillStyle = 'red';
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.image) {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        if (this.image) {
            this.draw();
            this.position.x += this.velocity.x;
        }
    }
}

const player = new Player();

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();

    if (keys.a.pressed) {
        player.velocity.x = -5;
    } else if (keys.d.pressed) {
        player.velocity.x = 5;
    } else {
        player.velocity.x = 0;
    }

}

animate();

addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
        case ' ':
            break;
    }
})

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        case ' ':
            break;
    }
})