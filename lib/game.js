let wall_image = new Image();
wall_image.src = "images/wall_0.png"
wall_image.onload = () => {
    drawTransformedImage(
        wall_image,
        {x: 0, y: -100},           // ul
        {x: 270, y: 0},           // ur
        {x: 0, y: 960},           // bl
        {x: 270, y: 500},          // br
    )
    drawTransformedImage(
        wall_image,
        {x: 270, y: 0},           // ul
        {x: 1010, y: 0},           // ur
        {x: 270, y: 500},           // bl
        {x: 1010, y: 500},          // br
    )
    drawTransformedImage(
        wall_image,
        {x: 1010, y: 0},           // ul
        {x: 1280, y: -100},           // ur
        {x: 1010, y: 500},           // bl
        {x: 1280, y: 960},          // br
    )
    drawTransformedImage(
        wall_image,
        {x: 270, y: 500},           // ul
        {x: 1010, y: 500},           // ur
        {x: 0, y: 960},           // bl
        {x: 1280, y: 960},          // br
    )
}
