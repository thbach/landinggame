let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let app = new PIXI.Application({
    width: winWidth, 
    height: winHeight,
    forceCanvas: true

});
var renderer = PIXI.autoDetectRenderer(winWidth, winHeight, {
    forceCanvas: true,
    transparent : true
});

document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture = PIXI.Texture.fromImage('icon.png');

// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

bunny.position.x = winWidth/4;
bunny.position.y = winHeight/4;

stage.addChild(bunny);

console.log("hello");
// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}