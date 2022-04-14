/* Quadrilateral Transform - (c) Ken Nilsen, CC3.0-Attr */

function drawTransformedImage(image, upperLeft, upperRight, bottomLeft, bottomRight) {
  var me = image,
      // stepEl = document.querySelector("input"),
      // stepTxt = document.querySelector("span"),
      c = document.querySelector("canvas"),
      ctx = c.getContext("2d"),
      corners = [
          {x: upperLeft.x, y: upperLeft.y},           // ul
          {x: upperRight.x, y: upperRight.y},         // ur
          {x: bottomRight.x, y: bottomRight.y},       // br
          {x: bottomLeft.x, y: bottomLeft.y}          // bl
      ],
      step = 4;                    // resolution

  update();

  // render image to quad using current settings
  function render() {

    var p1, p2, p3, p4, y1c, y2c, y1n, y2n,
        w = image.width - 1,         // -1 to give room for the "next" points
        h = image.height - 1;

    for(y = 0; y < h; y += step) {
      for(x = 0; x < w; x += step) {
        y1c = lerp(corners[0], corners[3],  y / h);
        y2c = lerp(corners[1], corners[2],  y / h);
        y1n = lerp(corners[0], corners[3], (y + step) / h);
        y2n = lerp(corners[1], corners[2], (y + step) / h);

        // corners of the new sub-divided cell p1 (ul) -> p2 (ur) -> p3 (br) -> p4 (bl)
        p1 = lerp(y1c, y2c,  x / w);
        p2 = lerp(y1c, y2c, (x + step) / w);
        p3 = lerp(y1n, y2n, (x + step) / w);
        p4 = lerp(y1n, y2n,  x / w);

        ctx.drawImage(image, x, y, step, step,  p1.x, p1.y, // get most coverage for w/h:
            Math.ceil(Math.max(step, Math.abs(p2.x - p1.x), Math.abs(p4.x - p3.x))) + 1,
            Math.ceil(Math.max(step, Math.abs(p1.y - p4.y), Math.abs(p2.y - p3.y))) + 1)
      }
    }
  }

  function lerp(p1, p2, t) {
    return {
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t}
  }

  function update() {render()}
}
