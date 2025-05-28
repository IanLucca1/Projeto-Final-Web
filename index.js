    const logo = document.getElementById('dvd-logo');
    const container = document.querySelector('.container');
    const speed = 1; 

    let dx = speed, dy = speed;
    let x = 0, y = 0;
    let maxX, maxY;

    function updateBounds() {
      const rect = container.getBoundingClientRect();
      maxX = rect.width  - logo.offsetWidth;
      maxY = rect.height - logo.offsetHeight;
    }

    function animate() {
      x += dx;
      y += dy;

      if (x <= 0 || x >= maxX) {
        dx = -dx;    
      }
      if (y <= 0 || y >= maxY) {
        dy = -dy;        
      }

      logo.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    }

    window.addEventListener('load', () => {
      updateBounds();
      requestAnimationFrame(animate);
    });

    window.addEventListener('resize', () => {
      updateBounds();
      x = Math.min(x, maxX);
      y = Math.min(y, maxY);
    });