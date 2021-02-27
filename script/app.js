(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const canvasElement = document.querySelector(".js-canvas");
    if (!canvasElement) throw new Error("The canvas could not be loaded!");

    // Oefening 1: Dots renderen om de x ms.
    // draw.setup(canvasElement);
    // generate.repeatingPattern(200, 'rectangular'); // circle, square

    // Oefening 2: Particles renderen op ons scsherm.
    const ctx = draw.setup(canvasElement);
    const particles = sparks.generate(ctx, 200);
    sparks.render(particles);
    sparks.animate(ctx, particles);
    sparks.enableMouseLIstener();
  });
})();
