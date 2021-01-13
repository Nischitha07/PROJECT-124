noseX = 0;
noseY = 0;
difference = 0;
leftWrist = 0;
rightWrist = 0;

function preload()
{

}

function setup()
{
video = createCapture(VIDEO);
video.size(500 , 300);
video.position(100 , 200);
canvas = createCanvas(400 , 350 , );
canvas.position(800 , 150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPose);
}
function draw()
{
    background('#f26b6b');
fill('#f26b6b');

}
function modelLoaded()
{
    console.log("PoseNet initialized");

}

function gotPose(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
    
}