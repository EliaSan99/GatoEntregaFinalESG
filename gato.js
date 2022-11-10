function app() {
    
    var canvas = document.getElementById("lienzo");

    canvas.setAttribute("width", 800);
    canvas.setAttribute("height", 500);

    
    canvas.style.border = "solid 2px black"
    canvas.style.background = "#6054de"

    var context = canvas.getContext("2d");

    
    const gato =
    {
        estados: 
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        turno: 0,
        validarMovimiento: false,
        casilla: 0,
        ganador: 0,
        img: new Image(),
        imgAvatarGato: new Image(),
        imgAvatarRaton: new Image(),
        regilla: function () {
            var rejaA = 100;

            context.strokeStyle = "black";

            for (var n = 0; n < 4; n++) {

                context.setLineDash([4, 14]);

                context.moveTo(0, rejaA);
                context.lineTo(500, rejaA);
                context.stroke();

                context.moveTo(rejaA, 0);
                context.lineTo(rejaA, 500);
                context.stroke();

                rejaA += 100;
            }
        },
        escenario: function () {
            var gatoA = 200;

            for (a = 0; a < 2; a++) {
                context.setLineDash([]);

                context.beginPath();
                context.strokeStyle = "#000";
                context.lineWidth = 3;

                context.moveTo(400, gatoA);
                context.lineTo(100, gatoA);
                context.stroke();

                context.moveTo(gatoA, 100);
                context.lineTo(gatoA, 400);
                context.stroke();

                gatoA += 100;
            }
        },
        seleccionar: function (e) {
            gato.casilla = 0;

            var x = e.offsetX;
            var y = e.offsetY;

            var coordenadas = document.getElementById("coordenadas");
            coordenadas.innerHTML = "coordenadas:  X: " + x + " Y: " + y;

            context.drawImage(gato.imgAvatarGato, 670, 120, 70, 70);
            context.drawImage(gato.imgAvatarRaton, 670, 200, 70, 60);

            let impImg = (x, y) => {
                context.drawImage(gato.img, x, y, 95, 95);
            };

            let elimImg = (x, y) => {
                context.clearRect(x, y, 95, 95);
            };

            if (x > 100 & x < 200 & y > 100 & y < 200 & gato.estados[0][0] == 0) {
                impImg(102, 102);
                gato.casilla = 0;
            }
            else if (gato.estados[0][0] == 0) {
                elimImg(102, 102);
            };

            if (x > 200 & x < 300 & y > 100 & y < 200 & gato.estados[0][1] == 0) {
                impImg(202, 102);
                gato.casilla = 1;
            }
            else if (gato.estados[0][1] == 0) {
                elimImg(202, 102);
            };

            if (x > 300 & x < 400 & y > 100 & y < 200 & gato.estados[0][2] == 0) {
                impImg(302, 102);
                gato.casilla = 2;
            }
            else if (gato.estados[0][2] == 0) {
                elimImg(302, 102);
            }

            if (x > 100 & x < 200 & y > 200 & y < 300 & gato.estados[1][0] == 0) {
                impImg(102, 202);
                gato.casilla = 3;
            }
            else if (gato.estados[1][0] == 0) {
                elimImg(102, 202);
            };

            if (x > 200 & x < 300 & y > 200 & y < 300 & gato.estados[1][1] == 0) {
                impImg(202, 202);
                gato.casilla = 4;
            }
            else if (gato.estados[1][1] == 0) {
                elimImg(202, 202);
            };

            if (x > 300 & x < 400 & y > 200 & y < 300 & gato.estados[1][2] == 0) {
                impImg(302, 202);
                gato.casilla = 5
            }
            else if (gato.estados[1][2] == 0) {
                elimImg(302, 202);
            };

            if (x > 100 & x < 200 & y > 300 & y < 400 & gato.estados[2][0] == 0) {
                impImg(102, 302);
                gato.casilla = 6;
            }
            else if (gato.estados[2][0] == 0) {
                elimImg(102, 302);
            };

            if (x > 200 & x < 300 & y > 300 & y < 400 & gato.estados[2][1] == 0) {
                impImg(202, 302);
                gato.casilla = 7;
            }
            else if (gato.estados[2][1] == 0) {
                elimImg(202, 302);
            };

            if (x > 300 & x < 400 & y > 300 & y < 400 & gato.estados[2][2] == 0) {
                gato.casilla = 8;
                impImg(302, 302);
            }
            else if (gato.estados[2][2] == 0) {
                elimImg(302, 302);
            };
            if (x > 100 & x < 400 & y > 100 & y < 400) {
                this.validarMovimiento = true;
            }
            else {
                this.validarMovimiento = false;
            };

            if (x > 570 & x < 770 & y > 335 & y < 370 & gato.ganador > 0) {
                canvas.addEventListener("mousedown", gato.activarEstados, false);
                this.validarMovimiento = true;
                gato.casilla = 9; 
            } else if (gato.ganador != 0) {
                canvas.removeEventListener("mousedown", gato.activarEstados, false);
            }

        },
        activarEstados: function () {
            if (this.validarMovimiento) {
                switch (gato.casilla) {
                    case 0:
                        gato.turno == 0 ? gato.estados[0][0] = 1 : gato.estados[0][0] = 2;
                        break;
                    case 1:
                        gato.turno == 0 ? gato.estados[0][1] = 1 : gato.estados[0][1] = 2;
                        break;
                    case 2:
                        gato.turno == 0 ? gato.estados[0][2] = 1 : gato.estados[0][2] = 2;
                        break;
                    case 3:
                        gato.turno == 0 ? gato.estados[1][0] = 1 : gato.estados[1][0] = 2;
                        break;
                    case 4:
                        gato.turno == 0 ? gato.estados[1][1] = 1 : gato.estados[1][1] = 2;
                        break;
                    case 5:
                        gato.turno == 0 ? gato.estados[1][2] = 1 : gato.estados[1][2] = 2;
                        break;
                    case 6:
                        gato.turno == 0 ? gato.estados[2][0] = 1 : gato.estados[2][0] = 2;
                        break;
                    case 7:
                        gato.turno == 0 ? gato.estados[2][1] = 1 : gato.estados[2][1] = 2;
                        break;
                    case 8:
                        gato.turno == 0 ? gato.estados[2][2] = 1 : gato.estados[2][2] = 2;
                        break;
                    case 9:
                        gato.limpiar();
                        break;
                }                
                context.fillStyle = "#92FAC1"
                context.fillRect(625, 303, 70, 30);
                context.fillStyle = "#960DF0"
                context.font = "bold 22px sans-serif";

                if (gato.turno == 0) {
                    gato.img.src = "./Jerry.jpg";
                    gato.turno = 1;
                    context.fillText("Ratón", 624, 323);
                }
                else {
                    gato.img.src = "./Tom.png";
                    gato.turno = 0;
                    context.fillText("Gato", 629, 323);
                }
                gato.definirGanador();
            }
        },
        tarjetaDatos: function () {

            context.fillStyle = "#861EDF"
            context.fillRect(500, 0, 300, 500);

            context.fillStyle = "black"
            context.font = "bold 25px sans-serif";


            context.fillStyle = "black"
            context.font = "15px fantasy";

            context.fillText("Jugadores", 610, 100);
            context.fillText("Gato:", 600, 170);
            context.fillText("Ratón:", 600, 240);

            context.fillText("Turno:", 630, 300);

            context.fillStyle = "black"
            context.font = "bold 22px sans-serif";
            context.fillText("Gato", 629, 323);

            context.fillStyle = "#861EDF"
            context.fillRect(570, 335, 180, 30);
            context.fillStyle = "black"
            context.font = "15px fantasy";
            context.fillText("reiniciar", 630, 355);

        },
        definirGanador: function () {

            let btnReiniciar = () => {
                context.fillStyle = "green"
                context.fillRect(580, 335, 140, 30);
                context.fillStyle = "Black"
                context.font = "15px fantasy";
                context.fillText(">>>REINICIAR<<<", 593, 358);

                canvas.removeEventListener("mousedown", gato.activarEstados, false);
            }
            // funcion del Sweetalert
/*             let alertGanador =()=>{
                    "El ganador es: " + ganadorAlert
            }; */
            let ganadorGato = () => {
                btnReiniciar();
                gato.ganador = 1;
                context.fillStyle = "#861EDF"
                context.fillRect(677, 393, 20, 25);
                context.fillStyle = "black"
                context.font = "15px fantasy";
                gato.img.src = "";
/*                 ganadorAlert = "Gato"
                alertGanador(); */
                // aqui va la funcion del sweetAlert
                
            };

            let ganadorRaton = () => {
                btnReiniciar();
                gato.ganador = 2;
                
                context.fillStyle = "#861EDF"
                context.fillRect(677, 413, 20, 25);
                context.fillStyle = "black"
                context.font = "15px Fantasy";
                gato.img.src = "";
            }

            let empate =()=>
            {
                btnReiniciar();
                gato.ganador = 3;
            }
            
            if (gato.estados[0][0] == 1 & gato.estados[0][1] == 1 & gato.estados[0][2] == 1) {
                ganadorGato();
                context.strokeStyle = "red";
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(150,150);
                context.lineTo(350,150);
                context.stroke();
                } else if (gato.estados[0][0] == 2 & gato.estados[0][1] == 2 & gato.estados[0][2] == 2) {
                ganadorRaton();
                context.strokeStyle = "red";
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(150,150);
                context.lineTo(350,150);
                context.stroke();
            }

            else if (gato.estados[1][0] == 1 & gato.estados[1][1] == 1 & gato.estados[1][2] == 1) {
                ganadorGato();
            } else if (gato.estados[1][0] == 2 & gato.estados[1][1] == 2 & gato.estados[1][2] == 2) {
                ganadorRaton();
            }
            if (gato.estados[2][0] == 1 & gato.estados[2][1] == 1 & gato.estados[2][2] == 1) {
                 ganadorGato();
            } else if (gato.estados[2][0] == 2 & gato.estados[2][1] == 2 & gato.estados[2][2] == 2) {
                ganadorRaton();
            }

            else if (gato.estados[0][0] == 1 & gato.estados[1][0] == 1 & gato.estados[2][0] == 1) {
                ganadorGato();
            } else if (gato.estados[0][0] == 2 & gato.estados[1][0] == 2 & gato.estados[2][0] == 2) {
                ganadorRaton();
            }

            else if (gato.estados[0][1] == 1 & gato.estados[1][1] == 1 & gato.estados[2][1] == 1) {
                ganadorGato();
            } else if (gato.estados[0][1] == 2 & gato.estados[1][1] == 2 & gato.estados[2][1] == 2) {
                ganadorRaton();
            }

            else if (gato.estados[0][2] == 1 & gato.estados[1][2] == 1 & gato.estados[2][2] == 1) {
                ganadorGato();
            } else if (gato.estados[0][2] == 2 & gato.estados[1][2] == 2 & gato.estados[2][2] == 2) {
                ganadorRaton();
            }

            else if (gato.estados[0][0] == 1 & gato.estados[1][1] == 1 & gato.estados[2][2] == 1) {
                ganadorGato();
            } else if (gato.estados[0][0] == 2 & gato.estados[1][1] == 2 & gato.estados[2][2] == 2) {
                ganadorRaton();
            }

            else if (gato.estados[0][2] == 1 & gato.estados[1][1] == 1 & gato.estados[2][0] == 1) {
                ganadorGato();
            } else if (gato.estados[0][2] == 2 & gato.estados[1][1] == 2 & gato.estados[2][0] == 2) {
                ganadorRaton();
            }
            if(gato.estados[0][0] != 0 & gato.estados[0][1] != 0 & gato.estados[0][2] != 0 &
                gato.estados[1][0] != 0 & gato.estados[1][1] != 0 & gato.estados[1][2] != 0 &
                gato.estados[2][0] != 0 & gato.estados[2][1] != 0 & gato.estados[2][2] != 0){
                    empate();

                }
          
        },
        limpiar: function () {
            for (a = 0; a < 3; a++) {
                for (b = 0; b < 3; b++) {
                    gato.estados[a][b] = 0;
                }
            };

            for(x=102;x<=302;x+=100){
                for(y=102;y<=302;y+=100){
                context.clearRect(x, y, 95, 95);
                }
            }

            context.fillStyle = "#DBFAFD"
            context.fillRect(570, 335, 180, 30);
            context.fillStyle = "#422E64"
            context.font = "15px Verdana";
            context.fillText("reiniciar", 630, 355);
            gato.play();
            gato.turno = 1;

        },
        play: function (pintarRegilla) {

            if (pintarRegilla)

                this.regilla();
            this.escenario();
            this.tarjetaDatos();
            this.img.src = "./Tom.png";
            this.imgAvatarGato.src = "./Tom.png";
            this.imgAvatarRaton.src = "./Jerry.jpg";
            this.ganador = 0;
            canvas.addEventListener("mousedown", gato.activarEstados, false);
            context.drawImage(gato.imgAvatarGato, 670, 120, 70, 70);
            context.drawImage(gato.imgAvatarRaton, 670, 200, 70, 60);
        }
    }
    canvas.addEventListener("mousemove", gato.seleccionar);
    gato.play(true);
}

window.onload = function () {
    app();
}