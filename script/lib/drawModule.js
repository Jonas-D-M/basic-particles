const draw = (function () {
  // deze iife maakt een 'state' aan en is dus een closure
  let ctx = null;

  const matchCanvasToWindow = (canvasElement) => {
    canvasElement.width = document.documentElement.clientWidth;
    canvasElement.height = document.documentElement.clientHeight;
  };

  const setup = (canvasElement) => {
    window.addEventListener("resize", function () {
      matchCanvasToWindow(canvasElement);
    });
    matchCanvasToWindow(canvasElement);
    ctx = canvasElement.getContext("2d");
    return ctx;
  };

  const circle = (x, y, { size, color }) => {
    //   TODO: draw circle
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
  };

  const clearArea = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  return { setup, circle, clearArea };
})();
