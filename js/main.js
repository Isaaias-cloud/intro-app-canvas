// Obtener el elemento <canvas> del HTML mediante su ID
var canvas = document.getElementById("canvas");

// Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
var ctx = canvas.getContext("2d");

// Establecer el color de relleno usando el formato RGB (en este caso, un verde brillante)
ctx.fillStyle = "rgb(125, 138, 125)";  // RGB: Rojo = 0, Verde = 255, Azul = 0


// Dibujar un rectángulo relleno con las siguientes características:
// - La esquina superior izquierda está en las coordenadas (10, 10)
// - El ancho del rectángulo es de 1000 píxeles
// - La altura del rectángulo es de 100 píxeles
ctx.fillRect(10, 10, 1000, 100);
