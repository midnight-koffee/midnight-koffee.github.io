// Fractal Animation Script

// Function to draw Mandelbrot set on a canvas
function drawMandelbrot(canvas, maxIterations) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // Iterate through each pixel
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Map canvas coordinates to Mandelbrot set coordinates
      const zx = (x - width / 2) * 4 / width;
      const zy = (y - height / 2) * 4 / width;
      
      let zx2 = zx;
      let zy2 = zy;
      let iteration = 0;
      
      // Iterate until max iterations or escape condition
      while (zx2 + zy2 <= 4 && iteration < maxIterations) {
        const temp = zx2 * zx2 - zy2 * zy2 + zx;
        zy2 = 2 * zx2 * zy2 + zy;
        zx2 = temp;
        iteration++;
      }
      
      // Set pixel color based on iteration count
      const color = iteration < maxIterations ? iteration * 255 / maxIterations : 0;
      ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Initialize Mandelbrot set animation
function initializeFractalAnimation() {
  const canvas = document.getElementById('fractal-canvas');
  canvas.addEventListener('click', () => {
    drawMandelbrot(canvas, 100); // Adjust maxIterations as needed
  });
}

// Initialize fractal animation on page load
document.addEventListener('DOMContentLoaded', initializeFractalAnimation);
