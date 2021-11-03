noseX = 0;
noseY = 0;

function preload() { 
    iimage = loadImage("https://i.postimg.cc/KYGYvFKN/clown-nose-png-12.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    // fill(255, 0, 0);
    // stroke(255, 0, 0);
    // circle(noseX, noseY, 30);
    image(iimage, noseX, noseY, 30, 30);
}

function modelLoaded() {
    console.log("Pose Net is initialized!");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-12;
        noseY = results[0].pose.nose.y-10;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}

function takeSnapshot() {
    save("myPicture.png");
}