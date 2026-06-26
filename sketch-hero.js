/* ============================================
   SKETCH HERO - ANIMAÇÃO DO ESPAÇO COM p5.js
   ============================================ */

let sketchHero = (p) => {
    let stars = [];
    let spaceships = [];
    const STAR_COUNT = 100;
    const SPACESHIP_COUNT = 3;

    p.setup = function() {
        const container = document.getElementById('p5-container-hero');
        if (!container) return;
        
        const w = p.windowWidth;
        const h = p.windowHeight;
        const canvas = p.createCanvas(w, h);
        canvas.parent('p5-container-hero');
        
        initStars();
        initSpaceships();
        p.noStroke();
    };

    function initStars() {
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: p.random(p.width),
                y: p.random(p.height),
                size: p.random(0.5, 3),
                opacity: p.random(100, 255),
                twinkleSpeed: p.random(0.02, 0.08),
                phase: p.random(p.TWO_PI)
            });
        }
    }

    function initSpaceships() {
        for (let i = 0; i < SPACESHIP_COUNT; i++) {
            spaceships.push({
                x: p.random(p.width),
                y: p.random(p.height * 0.3, p.height * 0.7),
                vx: p.random(-1, 1) * 0.5,
                vy: p.random(-0.5, 0.5) * 0.3,
                size: p.random(20, 40),
                angle: 0,
                trail: []
            });
        }
    }

    p.draw = function() {
        // Fundo gradiente (efeito espaço)
        const gradient = p.drawingContext.createLinearGradient(0, 0, 0, p.height);
        gradient.addColorStop(0, '#0a0e27');
        gradient.addColorStop(0.5, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        p.drawingContext.fillStyle = gradient;
        p.rect(0, 0, p.width, p.height);

        // Desenhar e animar estrelas
        p.fill(255);
        stars.forEach(star => {
            const twinkle = p.sin(p.frameCount * star.twinkleSpeed + star.phase);
            const opacity = p.map(twinkle, -1, 1, 50, 255);
            p.fill(255, opacity);
            p.ellipse(star.x, star.y, star.size);
        });

        // Desenhar e animar naves
        spaceships.forEach(ship => {
            updateSpaceship(ship);
            drawSpaceship(ship);
            drawTrail(ship);
        });
    };

    function updateSpaceship(ship) {
        // Movimento com flutuação suave
        ship.x += ship.vx + p.sin(p.frameCount * 0.01) * 0.1;
        ship.y += ship.vy + p.cos(p.frameCount * 0.01) * 0.1;

        // Envolvimento na tela
        if (ship.x < -50) ship.x = p.width + 50;
        if (ship.x > p.width + 50) ship.x = -50;
        if (ship.y < -50) ship.y = p.height + 50;
        if (ship.y > p.height + 50) ship.y = -50;

        // Adicionar ao trail
        ship.trail.push({ x: ship.x, y: ship.y });
        if (ship.trail.length > 15) ship.trail.shift();

        // Atualizar ângulo para apontar na direção do movimento
        ship.angle = p.atan2(ship.vy, ship.vx);
    }

    function drawSpaceship(ship) {
        p.push();
        p.translate(ship.x, ship.y);
        p.rotate(ship.angle);

        // Corpo da nave (gato astronauta)
        p.fill(233, 69, 96);
        p.ellipse(0, 0, ship.size * 0.8, ship.size);

        // Cabeça (círculo frontal)
        p.fill(240, 100, 120);
        p.circle(ship.size * 0.3, 0, ship.size * 0.6);

        // Olhos
        p.fill(255);
        p.circle(ship.size * 0.5, -ship.size * 0.15, ship.size * 0.15);
        p.circle(ship.size * 0.5, ship.size * 0.15, ship.size * 0.15);

        p.fill(0);
        p.circle(ship.size * 0.55, -ship.size * 0.15, ship.size * 0.08);
        p.circle(ship.size * 0.55, ship.size * 0.15, ship.size * 0.08);

        // Foguete (cauda)
        p.fill(255, 200, 0);
        p.triangle(
            -ship.size * 0.4, -ship.size * 0.25,
            -ship.size * 0.4, ship.size * 0.25,
            -ship.size * 0.8, 0
        );

        // Chama do foguete
        const flameLength = p.random(ship.size * 0.2, ship.size * 0.5);
        p.fill(255, 150, 0, 200);
        p.triangle(
            -ship.size * 0.8, -ship.size * 0.12,
            -ship.size * 0.8, ship.size * 0.12,
            -ship.size * 0.8 - flameLength, 0
        );

        p.pop();
    }

    function drawTrail(ship) {
        p.stroke(233, 69, 96, 50);
        p.strokeWeight(1);
        p.noFill();
        p.beginShape();
        ship.trail.forEach((point, i) => {
            p.vertex(point.x, point.y);
        });
        p.endShape();
        p.noStroke();
    }

    p.windowResized = function() {
        const container = document.getElementById('p5-container-hero');
        if (container && p.width !== container.offsetWidth) {
            const w = p.windowWidth;
            const h = p.windowHeight;
            p.resizeCanvas(w, h);
        }
    };
};

// Inicializar sketch
new p5(sketchHero);