different=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.postion(560,150);
     poseNet = ml5.poseNet(nideo,modelLoaded);
     poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    different=floor(leftWristX - rightWristX);
}
}
function draw(){
    background('#6C91C2');

    document.getElementById("font_size").innerHTML="font size of the text will be = " + difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Peter',50,400);
}