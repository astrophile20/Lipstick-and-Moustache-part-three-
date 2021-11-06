noseX = 0;
noseY = 0;
noseXaxis = 0;
noseYaxis = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(moustache, noseX, noseY, 100, 45);
    image(lipstick, noseXaxis, noseYaxis, 70, 40);
}

function modelLoaded() {
    console.log("Pose Net is initialized!");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y + 2;
        noseXaxis = results[0].pose.nose.x - 33;
        noseYaxis = results[0].pose.nose.y + 25;
    }
}

function takeSnapshot() {
    save("myPicture.png");
}
