/* ============================================
   SKETCH GALERIA - ANIMAÇÃO INTERATIVA COM p5.js
   ============================================ */

let sketchGaleria = (p) => {
    let gatos = [];
    let particles = [];
    const GATO_COUNT = 5;
    const GRAVIDADE = 0.1;

    p.setup = function() {
        const container = document.getElementById('p5-container-galeria');
        if (!container) return;

        const w = Math.min(800, p.windowWidth - 40);
        const h = 600;
        const canvas = p.createCanvas(w, h);
        canvas.parent('p5-container-galeria');

        initGatos();
        p.noStroke();
    };

    function initGatos() {
        for (let i = 0; i < GATO_COUNT; i++) {
            gatos.push({
                x: p.random(50, p.width - 50),
                y: p.random(50, p.height - 100),
                vx: p.random(-2, 2),
                vy: p.random(-1, 1),
                size: p.random(30, 50),
                color: p.random([
                    [255, 100, 0],      // Laranja
                    [100, 100, 255],    // Azul
                    [255, 200, 100],    // Bege
                    [200, 100, 255],    // Roxo
                    [100, 255, 150]     // Verde
                ]),
                rotation: 0,
                energy: 100
            });
        }
    }

    p.draw = function() {
        // Fundo com degradado
        const gradient = p.drawingContext.createLinearGradient(0, 0, 0, p.height);
        gradient.addColorStop(0, '#16213e');
        gradient.addColorStop(1, '#0a0e27');
        p.drawingContext.fillStyle = gradient;
        p.rect(0, 0, p.width, p.height);

        // Atualizar e desenhar gatos
        gatos.forEach(gato => {
            updateGato(gato);
            drawGato(gato);
            drawEnergyBar(gato);
        });

        // Desenhar e atualizar partículas
        particles.forEach((particle, index) => {
            updateParticle(particle);
            drawParticle(particle);
            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });

        // Informações
        drawInfo();
    };

    function updateGato(gato) {
        // Movimento com aceleração
        gato.vx += p.random(-0.1, 0.1);
        gato.vy += GRAVIDADE;

        // Limite de velocidade
        gato.vx = p.constrain(gato.vx, -3, 3);
        gato.vy = p.constrain(gato.vy, -3, 4);

        // Atualizar posição
        gato.x += gato.vx;
        gato.y += gato.vy;

        // Colisão com paredes
        if (gato.x - gato.size < 0 || gato.x + gato.size > p.width) {
            gato.vx *= -0.8;
            gato.x = p.constrain(gato.x, gato.size, p.width - gato.size);
        }

        if (gato.y - gato.size < 0 || gato.y + gato.size > p.height) {
            gato.vy *= -0.7;
            gato.y = p.constrain(gato.y, gato.size, p.height - gato.size);
            
            // Criar partículas ao tocar o chão
            if (gato.y + gato.size >= p.height) {
                for (let i = 0; i < 5; i++) {
                    particles.push({
                        x: gato.x,
                        y: gato.y,
                        vx: p.random(-2, 2),
                        vy: p.random(-3, -1),
                        life: 255,
                        color: gato.color,
                        size: p.random(3, 8)
                    });
                }
            }
        }

        // Rotação
        gato.rotation += p.atan2(gato.vy, gato.vx) * 0.1;

        // Consumir energia
        gato.energy -= 0.3;
        if (gato.energy < 0) gato.energy = 0;
    }

    function drawGato(gato) {
        p.push();
        p.translate(gato.x, gato.y);
        p.rotate(gato.rotation);

        // Corpo principal
        p.fill(...gato.color);
        p.ellipse(0, 0, gato.size * 0.8, gato.size);

        // Cabeça
        p.fill(...gato.color);
        p.circle(gato.size * 0.35, -gato.size * 0.2, gato.size * 0.5);

        // Orelhas
        p.triangle(
            gato.size * 0.2, -gato.size * 0.45,
            gato.size * 0.35, -gato.size * 0.3,
            gato.size * 0.5, -gato.size * 0.4
        );
        p.triangle(
            gato.size * 0.45, -gato.size * 0.45,
            gato.size * 0.6, -gato.size * 0.3,
            gato.size * 0.5, -gato.size * 0.4
        );

        // Olhos brilhantes
        p.fill(255);
        p.circle(gato.size * 0.25, -gato.size * 0.25, gato.size * 0.15);
        p.circle(gato.size * 0.45, -gato.size * 0.25, gato.size * 0.15);

        // Pupilas
        p.fill(0);
        const pupilOffset = 0.05;
        p.circle(
            gato.size * 0.25 + gato.vx * pupilOffset,
            -gato.size * 0.25 + gato.vy * pupilOffset,
            gato.size * 0.08
        );
        p.circle(
            gato.size * 0.45 + gato.vx * pupilOffset,
            -gato.size * 0.25 + gato.vy * pupilOffset,
            gato.size * 0.08
        );

        // Nariz
        p.fill(255, 150, 180);
        p.triangle(
            gato.size * 0.35, -gato.size * 0.08,
            gato.size * 0.3, gato.size * 0.05,
            gato.size * 0.4, gato.size * 0.05
        );

        // Boca
        p.stroke(0);
        p.strokeWeight(1);
        p.noFill();
        p.arc(
            gato.size * 0.35,
            gato.size * 0.1,
            gato.size * 0.15,
            gato.size * 0.1,
            0,
            p.PI
        );
        p.noStroke();

        // Capacete (astronauta)
        p.noFill();
        p.stroke(100, 200, 255);
        p.strokeWeight(2);
        p.circle(gato.size * 0.35, -gato.size * 0.15, gato.size * 0.65);

        // Reflexo do capacete
        p.stroke(150, 220, 255, 100);
        p.strokeWeight(1);
        p.arc(
            gato.size * 0.1,
            -gato.size * 0.35,
            gato.size * 0.3,
            gato.size * 0.25,
            p.PI,
            p.PI + p.PI * 0.7
        );

        p.pop();
    }

    function drawEnergyBar(gato) {
        p.push();
        
        // Barra de fundo
        p.fill(50);
        p.rect(gato.x - gato.size * 0.4, gato.y + gato.size + 10, gato.size * 0.8, 6);

        // Barra de energia
        const energyWidth = p.map(gato.energy, 0, 100, 0, gato.size * 0.8);
        const energyColor = p.lerpColor(
            p.color(255, 50, 50),
            p.color(50, 255, 100),
            gato.energy / 100
        );
        p.fill(energyColor);
        p.rect(gato.x - gato.size * 0.4, gato.y + gato.size + 10, energyWidth, 6);

        p.pop();
    }

    function updateParticle(particle) {
        particle.vy += GRAVIDADE * 0.5;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 5;
    }

    function drawParticle(particle) {
        p.fill(...particle.color, particle.life);
        p.circle(particle.x, particle.y, particle.size);
    }

    function drawInfo() {
        p.fill(255);
        p.textSize(12);
        p.textAlign(p.LEFT);
        p.text('Clique para ativar gatos 🚀', 10, p.height - 10);
    }

    p.mousePressed = function() {
        // Ativar gatos próximos ao clique
        if (p.mouseX > 0 && p.mouseX < p.width &&
            p.mouseY > 0 && p.mouseY < p.height) {
            
            gatos.forEach(gato => {
                const dist = p.dist(gato.x, gato.y, p.mouseX, p.mouseY);
                if (dist < 150) {
                    gato.vx = (gato.x - p.mouseX) * 0.05;
                    gato.vy = (gato.y - p.mouseY) * 0.05;
                    gato.energy = 100;

                    // Criar explosão de partículas
                    for (let i = 0; i < 8; i++) {
                        particles.push({
                            x: gato.x,
                            y: gato.y,
                            vx: p.random(-3, 3),
                            vy: p.random(-3, 0),
                            life: 255,
                            color: gato.color,
                            size: p.random(4, 10)
                        });
                    }
                }
            });
        }
    };

    p.windowResized = function() {
        const container = document.getElementById('p5-container-galeria');
        if (container && p.width !== Math.min(800, p.windowWidth - 40)) {
            const w = Math.min(800, p.windowWidth - 40);
            p.resizeCanvas(w, 600);
        }
    };
};

// Inicializar sketch
new p5(sketchGaleria);