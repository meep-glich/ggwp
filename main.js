noseX = 0;
noseY = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/pVCYJ9Ft/m.png');
}
function setup(){
canvas = createCanvas(350, 350);
canvas.center();
video = createCapture(VIDEO);
video.size(350, 350);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 350, 350);
image(clown_nose, noseX, noseY, 50, 50);
}
function take_snapshot(){
save("yeeeet.png");
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+6;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }

}
