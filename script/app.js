(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const canvasElement = document.querySelector('.js-canvas');
    if (!canvasElement) throw new Error('The canvas could not be loaded!');

    draw.setup(canvasElement);
    generate.repeatingPattern(200, 'rectangular'); // circle, square
  });
})();
