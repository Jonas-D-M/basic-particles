const generate = (function () {
  const drawParticles = (amount) => {
    const gutters = {
      x: window.innerWidth / (amount + 2),
      y: window.innerHeight / (amount + 2),
    };

    for (let index = 0; index < amount; index++) {
      draw.circle(index * gutters.x, index * gutters.y, {
        size: 20,
        color: 'black',
      });
    }
  };

  const repeatingPattern = (interval, maxParticles = 200) => {
    let particlesAmount = 1;
    const timer = setInterval(() => {
      if (particlesAmount >= maxParticles) {
        particlesAmount = 1;
      }
      drawParticles(particlesAmount);
      particlesAmount * 2;
    }, interval);
  };

  const setup = (canvasElement) => {
    window.addEventListener('resize', function () {
      findCenterPoint(canvasElement);
    });
  };

  return { repeatingPattern };
})();
