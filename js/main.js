//Figura 1
// Obtener el elemento <canvas> del HTML mediante su ID
var canvas = document.getElementById("canvas");

// Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
var ctx = canvas.getContext("2d");

// Establecer el color de relleno usando el formato RGB (en este caso, un verde brillante)
ctx.fillStyle = "rgb(125, 138, 125)";  // RGB: Rojo = 0, Verde = 255, Azul = 0


window.onload = function () {
  draw();
  draw1();
  draw2();
  draw3();
  draw4();
  draw5();
  draw6();
  draw7();
  draw8();
};
// Dibujar un rectángulo relleno con las siguientes características:
// - La esquina superior izquierda está en las coordenadas (10, 10)
// - El ancho del rectángulo es de 1000 píxeles
// - La altura del rectángulo es de 100 píxeles
ctx.fillRect(10, 10, 100, 100);

//Figuras del ejemplo:

//Llamar las dos funciones para mostrar las figuras

// 1. Forma rectangular
// Función que dibuja en el canvas
function draw() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas0");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // Dibujar un rectángulo relleno en la posición (25, 25) con un ancho y alto de 100 píxeles
      ctx.fillRect(25, 25, 100, 100);
  
      // Limpiar un área dentro del rectángulo relleno, eliminando cualquier contenido en la región (45, 45) de 60x60 píxeles
      ctx.clearRect(45, 45, 60, 60);
  
      // Dibujar un rectángulo con solo el borde (sin relleno) en la posición (50, 50) con un ancho y alto de 50 píxeles
      ctx.strokeRect(50, 50, 50, 50);
    }
  }



//2. Triángulo
// Función que dibuja una forma en el canvas
function draw1() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas1");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // Iniciar un nuevo trazado para dibujar una forma personalizada
      ctx.beginPath();
  
      // Mover el lápiz a la posición inicial (75, 50)
      ctx.moveTo(75, 50);
  
      // Dibujar una línea desde la posición actual hasta (100, 75)
      ctx.lineTo(100, 75);
  
      // Dibujar otra línea desde la posición actual hasta (100, 25), formando un triángulo
      ctx.lineTo(100, 25);
  
      // Rellenar la forma con el color de relleno actual (por defecto, negro)
      ctx.fill();
    }
  }

  //3. Cara
  // Función que dibuja una cara sonriente en el canvas
function draw2() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas2");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // Iniciar un nuevo trazado para dibujar la cara sonriente
      ctx.beginPath();
  
      // Dibujar el círculo externo (cara)
      // Parámetros: (x, y, radio, ángulo inicial, ángulo final, sentido antihorario)
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
  
      // Dibujar la boca (semicírculo)
      ctx.moveTo(110, 75); // Mover el lápiz al inicio de la boca
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca orientada hacia arriba
  
      // Dibujar el ojo izquierdo
      ctx.moveTo(65, 65); // Mover el lápiz a la posición del ojo izquierdo
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Círculo para el ojo izquierdo
  
      // Dibujar el ojo derecho
      ctx.moveTo(95, 65); // Mover el lápiz a la posición del ojo derecho
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Círculo para el ojo derecho
  
      // Dibujar el contorno de la cara, ojos y boca con un trazo
      ctx.stroke();
    }
  }
  

  //4. Líneas
  // Función que dibuja dos triángulos en el canvas
function draw3() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas3");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // ------------------------------
      // DIBUJAR UN TRIÁNGULO RELLENO
      // ------------------------------
      ctx.beginPath(); // Inicia un nuevo trazado
      ctx.moveTo(25, 25);  // Mueve el lápiz a la coordenada (25, 25) - primer vértice
      ctx.lineTo(105, 25); // Traza una línea hasta (105, 25) - segundo vértice
      ctx.lineTo(25, 105); // Traza otra línea hasta (25, 105) - tercer vértice
      ctx.fill(); // Rellena el triángulo con el color de relleno actual (por defecto, negro)
  
      // ------------------------------
      // DIBUJAR UN TRIÁNGULO CONTORNEADO
      // ------------------------------
      ctx.beginPath(); // Inicia un nuevo trazado
      ctx.moveTo(125, 125); // Mueve el lápiz a la coordenada (125, 125) - primer vértice
      ctx.lineTo(125, 45);  // Traza una línea hasta (125, 45) - segundo vértice
      ctx.lineTo(45, 125);  // Traza otra línea hasta (45, 125) - tercer vértice
      ctx.closePath(); // Cierra el trazado, uniendo automáticamente el último punto con el primero
      ctx.stroke(); // Dibuja solo el contorno del triángulo
    }
  }


  //5. Curvas de Béizer
// Función que dibuja una matriz de arcos en el canvas
function draw4() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas4");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // Bucle anidado para generar una cuadrícula de arcos
      for (let i = 0; i < 4; i++) { // Itera 4 filas (i representa las filas)
        for (let j = 0; j < 3; j++) { // Itera 3 columnas (j representa las columnas)
          ctx.beginPath(); // Iniciar un nuevo trazado para cada arco
  
          // Calcular la posición del arco en la cuadrícula
          const x = 25 + j * 50; // Posición x del centro del arco
          const y = 25 + i * 50; // Posición y del centro del arco
          const radius = 20; // Radio del arco
  
          // Definir el ángulo inicial y final del arco
          const startAngle = 0; // El arco comienza en 0 radianes (derecha)
          const endAngle = Math.PI + (Math.PI * j) / 2; // El ángulo final varía según la columna j
  
          // Determinar la dirección del arco
          const counterclockwise = i % 2 !== 0; // Si i es impar, dibuja en sentido antihorario
  
          // Dibujar el arco con los parámetros calculados
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          // Si i > 1 (tercera y cuarta fila), rellena el arco; de lo contrario, solo dibuja el contorno
          if (i > 1) {
            ctx.fill(); // Rellenar el arco
          } else {
            ctx.stroke(); // Dibujar solo el contorno del arco
          }
        }
      }
    }
  }
  
  

  //6. Curva cuadrática de Béizer
  // Función que dibuja una figura usando curvas cuadráticas en el canvas
function draw5() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas5");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // ------------------------------
      // DIBUJAR UNA FORMA USANDO CURVAS CUADRÁTICAS
      // ------------------------------
      ctx.beginPath(); // Iniciar un nuevo trazado
  
      // Mover el lápiz al punto inicial (75, 25)
      ctx.moveTo(75, 25);
  
      // Primera curva cuadrática (esquina superior izquierda)
      // Control en (25, 25), punto final en (25, 62.5)
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
  
      // Segunda curva cuadrática (bajada izquierda)
      // Control en (25, 100), punto final en (50, 100)
      ctx.quadraticCurveTo(25, 100, 50, 100);
  
      // Tercera curva cuadrática (curva inferior izquierda)
      // Control en (50, 120), punto final en (30, 125)
      ctx.quadraticCurveTo(50, 120, 30, 125);
  
      // Cuarta curva cuadrática (curva inferior derecha)
      // Control en (60, 120), punto final en (65, 100)
      ctx.quadraticCurveTo(60, 120, 65, 100);
  
      // Quinta curva cuadrática (bajada derecha)
      // Control en (125, 100), punto final en (125, 62.5)
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
  
      // Última curva cuadrática (esquina superior derecha, cerrando la forma)
      // Control en (125, 25), punto final en (75, 25)
      ctx.quadraticCurveTo(125, 25, 75, 25);
  
      // Dibujar la forma con un trazo
      ctx.stroke();
    }
  }
  
  //7. Curva cúbica de Béizer
  // Función que dibuja una figura usando curvas Bézier cúbicas en el canvas
function draw6() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas6");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // ------------------------------
      // DIBUJAR UNA FIGURA USANDO CURVAS BÉZIER CÚBICAS
      // ------------------------------
      ctx.beginPath(); // Iniciar un nuevo trazado
  
      // Mover el lápiz al punto inicial (75, 40)
      ctx.moveTo(75, 40);
  
      // Primera curva Bézier cúbica (parte superior izquierda)
      // Control 1 en (75, 37), Control 2 en (70, 25), punto final en (50, 25)
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  
      // Segunda curva Bézier cúbica (lateral izquierdo)
      // Control 1 en (20, 25), Control 2 en (20, 62.5), punto final en (20, 62.5)
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  
      // Tercera curva Bézier cúbica (parte inferior izquierda)
      // Control 1 en (20, 80), Control 2 en (40, 102), punto final en (75, 120)
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  
      // Cuarta curva Bézier cúbica (parte inferior derecha)
      // Control 1 en (110, 102), Control 2 en (130, 80), punto final en (130, 62.5)
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  
      // Quinta curva Bézier cúbica (lateral derecho)
      // Control 1 en (130, 62.5), Control 2 en (130, 25), punto final en (100, 25)
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  
      // Sexta curva Bézier cúbica (parte superior derecha, cerrando la figura)
      // Control 1 en (85, 25), Control 2 en (75, 37), punto final en (75, 40)
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  
      // Rellenar la figura con el color predeterminado (negro si no se cambia `fillStyle`)
      ctx.fill();
    }
  }
  
  //8. Combinaciones juego de pacman
  // Función principal que dibuja una figura en el canvas
function draw7() {
    // Obtener el elemento <canvas> del HTML mediante su ID
    const canvas = document.getElementById("canvas7");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto de renderizado 2D del lienzo para dibujar sobre él
      const ctx = canvas.getContext("2d");
  
      // ------------------------------
      // DIBUJAR RECTÁNGULOS REDONDEADOS
      // ------------------------------
      roundedRect(ctx, 12, 12, 150, 150, 15); // Rectángulo externo grande
      roundedRect(ctx, 19, 19, 150, 150, 9);  // Rectángulo interno grande
      roundedRect(ctx, 53, 53, 49, 33, 10);   // Rectángulo pequeño a la izquierda
      roundedRect(ctx, 53, 119, 49, 16, 6);   // Rectángulo inferior izquierdo
      roundedRect(ctx, 135, 53, 49, 33, 10);  // Rectángulo pequeño a la derecha
      roundedRect(ctx, 135, 119, 25, 49, 10); // Rectángulo inferior derecho
  
      // ------------------------------
      // DIBUJAR UNA PEQUEÑA SONRISA
      // ------------------------------
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false); // Boca curva
      ctx.lineTo(31, 37); // Línea hasta el punto inicial
      ctx.fill(); // Rellenar la boca
  
      // ------------------------------
      // DIBUJAR PEQUEÑOS PUNTOS CUADRADOS
      // ------------------------------
      // Fila superior de 8 puntos cuadrados
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      // Columna lateral derecha de 6 puntos cuadrados
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      // Fila inferior de 8 puntos cuadrados
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
  
      // ------------------------------
      // DIBUJAR FORMA CENTRAL CON CURVAS BÉZIER
      // ------------------------------
      ctx.beginPath();
      ctx.moveTo(83, 116); // Punto inicial
      ctx.lineTo(83, 102); // Línea recta hacia arriba
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88); // Curva superior izquierda
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102); // Curva superior derecha
      ctx.lineTo(111, 116); // Línea recta hacia abajo
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill(); // Rellenar la forma
  
      // ------------------------------
      // DIBUJAR OJOS BLANCOS
      // ------------------------------
      ctx.fillStyle = "white"; // Cambiar color de relleno a blanco
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      // ------------------------------
      // DIBUJAR PUPILAS NEGRAS
      // ------------------------------
      ctx.fillStyle = "black"; // Cambiar color de relleno a negro
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true); // Pupila derecha
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true); // Pupila izquierda
      ctx.fill();
    }
  }
  
  // -----------------------------------------
  // FUNCIÓN AUXILIAR: DIBUJAR RECTÁNGULOS CON ESQUINAS REDONDEADAS
  // -----------------------------------------
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath(); // Iniciar un nuevo trazado
    ctx.moveTo(x, y + radius); // Mover el lápiz al punto inicial
  
    // Dibujar cada lado del rectángulo con esquinas redondeadas
    ctx.arcTo(x, y + height, x + radius, y + height, radius); // Esquina inferior izquierda
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius); // Esquina inferior derecha
    ctx.arcTo(x + width, y, x + width - radius, y, radius); // Esquina superior derecha
    ctx.arcTo(x, y, x, y + radius, radius); // Esquina superior izquierda
  
    ctx.stroke(); // Dibujar el contorno del rectángulo
  }
  

  //9. Path 2D
  // Función principal que dibuja un rectángulo y un círculo en el canvas
function draw8() {
    // Obtener el elemento <canvas> del documento HTML
    const canvas = document.getElementById("canvas8");
  
    // Verificar si el navegador soporta el contexto 2D del canvas
    if (canvas.getContext) {
      // Obtener el contexto 2D del canvas para realizar los dibujos
      const ctx = canvas.getContext("2d");
  
      // ------------------------------
      // CREACIÓN DE FORMAS CON Path2D
      // ------------------------------
  
      // Crear un nuevo objeto Path2D para el rectángulo
      const rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50); // Dibujar un rectángulo en (10,10) de 50x50 px
  
      // Crear un nuevo objeto Path2D para el círculo
      const circle = new Path2D();
      circle.arc(100, 35, 25, 0, 2 * Math.PI); // Dibujar un círculo con centro (100,35) y radio 25 px
  
      // ------------------------------
      // DIBUJAR LAS FORMAS EN EL CANVAS
      // ------------------------------
  
      ctx.stroke(rectangle); // Dibujar el contorno del rectángulo
      ctx.fill(circle); // Rellenar el círculo
    }
  }
  

  