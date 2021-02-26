const draw = (function () {
  // deze iife maakt een 'state' aan en is dus een closure
  let ctx = null;

  const matchCanvasToWindow = (canvasElement) => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
  };

  const setup = (canvasElement) => {
    window.addEventListener('resize', function () {
      matchCanvasToWindow(canvasElement);
    });
    matchCanvasToWindow(canvasElement);
    ctx = canvasElement.getContext('2d');
  };

  const circle = (x, y, { size, color }) => {
    //   TODO: draw circle
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
  };

  const clearArea = () => {
    ctx.clear();
  };

  return { setup, circle, clearArea };
})();
