canvas = document.getElementById("myCanvas").value;
color = red;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 20 * Math-PI);
ctx.stroke();

mouse_x = e.clientX;
mouse_y = e.clientY;

 canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetUp;

    console.log = ("X = "+mouse_x+",Y ="+mouse_y);
    circle(mouse_x, mouse_y);
}