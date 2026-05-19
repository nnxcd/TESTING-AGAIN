// just copy this in
//Sketch 7 - Source 7 credits to https://openprocessing.org/@u110137/2722921
        const sketch7 = (p) => {
            let page;
            let strips = [];
            let num = 1;
            let offset = 0;
            let toff = 0;
            let tilt = 0;
            let ttilt = 0;
            let shadows = true;

            function makeStrips() {
                page.background('ivory');
                page.fill(0);
                page.textSize(p.height / 4);
                page.textAlign(p.CENTER, p.CENTER);
                page.text('week', page.width / 2, page.height / 5);
                page.text('4', page.width / 2, 2 * page.height / 5);
                page.text('activ-', page.width / 2, 3 * page.height / 5);
                page.text('-ities', page.width / 2, 4 * page.height / 5);
                page.rectMode(p.CENTER);
                strips = [];
                for (let i = 0; i < num; i++) {
                    let y = i * page.height / num;
                    let strip = page.get(0, y, page.width, Math.floor(page.height / num));
                    strips.push({
                        x: p.width / 2,
                        y: y + page.height / (2 * num) + (p.height / 2 - page.height / 2),
                        img: strip,
                        a: 0
                    });
                }
            }

            p.setup = function() {
                p.createCanvas(p.windowWidth / 4, p.windowHeight / 2);
                p.background(255, 182, 193);
                page = p.createGraphics(Math.floor(p.height * 0.95), Math.floor(p.height * 0.95));
                makeStrips();
            }

            p.draw = function() {
                offset = p.lerp(offset, toff, 0.1);
                tilt = p.lerp(tilt, ttilt, 0.2);
                p.background('ivory');
                p.imageMode(p.CENTER);
                for (let s of strips) {
                    s.a = tilt * (0.5 - p.noise(p.frameCount / 60 + s.y / 300));
                }
                if (shadows) {
                    for (let s of strips) {
                        p.push();
                        p.translate(s.x + offset * (0.5 - p.noise(p.frameCount / 180 + s.y / 50)), s.y);
                        p.rotate(s.a);
                        p.fill(0, 180);
                        p.rect(4, 4, s.img.width, s.img.height);
                        p.pop();
                    }
                    p.filter(p.BLUR, 2);
                }
                for (let s of strips) {
                    p.push();
                    p.translate(s.x + offset * (0.5 - p.noise(p.frameCount / 180 + s.y / 50)), s.y);
                    p.rotate(s.a);
                    p.image(s.img, 0, 0);
                    p.pop();
                }
            }

            p.mouseMoved = function() {
                if (num == 1) {
                    num = 40;
                    makeStrips();
                }
                toff = p.map(p.mouseX, p.width / 8, 7 * p.width / 8, -p.height, p.height, true);
                if (Math.abs(toff) < p.height / 8) {
                    toff = 0;
                }
                ttilt = p.map(p.mouseY, p.height / 8, 7 * p.height / 8, 0, p.PI / 4, true);
            }

            p.mousePressed = function() {
                num = Math.floor(p.random(20, 120));
                makeStrips();
            }

            p.keyPressed = function() {
                shadows = !shadows;
            }
        }
        new p5(sketch7, 'sketch7');