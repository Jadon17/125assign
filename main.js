leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    
    canvas= createCanvas(550,500);
    canvas.position(514,150);
    video = createCapture(VIDEO);
    video.size(550, 500);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposses);


}

function modelloaded() {
    console.log("MODEL HAS LOADED !!!");
}

function gotposses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
    
        difference = floor(leftWristX - rightWristX);
    }
    

}
    
function draw(){
    background('#26619c');
    textSize( difference );
    fill('white');
    text('Jadon', 50, 400);

}