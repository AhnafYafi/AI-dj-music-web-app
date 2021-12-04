song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
    
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();

  video = createCapture(VIDEO);
  video.hide(); 

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        leftWrist = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWrist = "+leftWristY);

        rightWrist = results[0].pose.rightWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWrist = "+rightWristY);
    }
}

function draw()
{
    image(video,0,0,600,500);
    fill("#ff0303");
    stroke("#ff0303")

    InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InInNumberleftWristY);
volume = remove_decimals/500;
}

function isPLaying()
{
    if(leftWristY > 0 <= 700)
    {
        song1 = play()
    }
    if(rightWristY > 0 <= 700)
    {
        song2 = play()
    }

}

function stop()
{
if(song_variable.stop())
{
    song1 = stop()
    song2 = stop()
}else{
    song1 = play()
    song2 = play()
}
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}