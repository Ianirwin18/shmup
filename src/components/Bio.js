import chadbio from "../assets/img/Chad-Final.jpg";
import nickbio from "../assets/img/Erik-Final.jpg";
import erikbio from "../assets/img/Nick-Final.jpg";
import python from "../assets/img/pythonab.png";
import web from "../assets/img/web.png";
import ship from "../assets/img/logoshipbio.png";
import non from "../assets/img/ue.png";
import bugs from "../assets/img/bugs.png";



export const Bio = () => {
    return(
    <div class="bio">
    <div class="card">
  <img src={ chadbio } alt="Chad" class='card-img'></img>
  <h1>Chad</h1>
  <p class="title">Space Commander</p>
  <p>Space Commander Chad official designation C.T.9532 is one of the three major leaders for the S.H.I.P.  program he's responsible for training the new recruits. He's well known for his easy going attitude and light hearted nature many of the new recruits are known to warm up to him quickly. His success rates for teaching new recruits were exceptionally high which is why he was brought onboard to the S.H.I.P. program. </p>

</div>
<div class="card">
  <img src={ nickbio } alt="Nick" class='card-img'></img>
  <h1>Nick</h1>
  <p class="title">Lt. Colonel</p>
  <p>Warrant Officer Nick official designation N.G.8434 is one of the three major leaders for the S.H.I.P. program the combat expert of the three. He's most known for his idea to have the upgradable weapons be able to disengage from the  S.H.I.P.. He's most known among the team for constant promotion of Apple products and playful teasing of Chad.  He's always willing to help new recruits when they ask him for help.</p>

</div>
<div class="card">
  <img src={ erikbio } alt="Erik" class='card-img'></img>
  <h1>Erik</h1>
  <p class="title">Warrant Officer</p>
  <p>Lt. Colonel Erik official designation E.H.7634 is one of the three major leaders for the S.H.I.P. program the “tech” guy of the three. He’s most known for modifying the S.H.I.P.s onboard weapon system with the capability of overcharging the system to fire larger shots. He also created the attachable weapon upgrade for the  S.H.I.P.. Personnel on many occasions have noted how easy to approach Erik is and have stated if you get him talking he will always gush about his child.</p>

</div>
<div class="card">
  <img src={ ship } alt="Ship" class='card-img'></img>
  <h1>S.H.I.P.</h1>
  <p class="title">The actual ship </p>
  <p> {`stands for £#*<]£ $3@:) *}%{*#£~+{€* +{€,£~!|¥{! and its a brand new way to fight back against the evil Bugs. It uses experimental AI programs to help the pilot insure maximum efficiency while piloting the S.H.I.P..`}</p>

</div>
<div class="card">
  <img src={ web } alt='web' class='card-img'></img>
  <h1>Web Siblings</h1>
  <p class='title'>AI</p>
  <p>The Web Siblings AI was originally created with one personality but for some unknown reason it fractured into three personalities and calls each other their siblings, our engineers haven't been able to find any reason as to why it would hinder their abilities. We are keeping a close eye to monitor their progress and will send further updates.</p>

</div>
<div class="card">
  <img src={ python } alt="Snakes" class='card-img'></img>
  <h1>The Snakes</h1>
  <p class='title'>AI</p>
  <p> The Snakes Ai started out as two separate personalities but one consumed the other and took on traits of the other. This hasn't caused any issues with the AIs performance to this date. Our engineers are keeping an eye on the program to make sure it doesn't consume any other AIs. But strangely it does seem to love to consume the data fragments left behind from the destroyed bugs.</p>

</div>
<div class="card">
  <img src={ non } alt='web' class='card-img'></img>
  <h1 class="non">The Nonexistent</h1>
  <p class='title'>AI</p>
  <p>The Nonexistent AI is an anomaly that showed up in our database one day.He's extremely aggressive to the Bugs and is constantly looking for a fight to in his words better himself. The engineering team is extremely wary of this AI and have paired him with operator N.G.8434 to keep a close eye on him. Further updates will be added.</p>

</div>
<div class="card">
  <img src={ bugs } alt="Snakes" class='card-img'></img>
  <h1>The Bugs</h1>
  <p class='title'>AI</p>
  <p> The Bugs are the greatest threat to humanity; they infect our major infrastructure and cause catastrophes. They are the reason the S.H.I.P. program was created to fight back against the Bugs. Most information about the Bugs such as their origin and motives are still unkown to the originzation further observations are being done by agent P.H.0404. The picture displayed for the Bugs is the best picture that we were able to capture of their leader who refers to himself as The Final Syntax. Many agents were lost in the attempt of gaining knowledge on them they are highly dangerous if you encounter any in the field take extreme percations.</p>

</div>
</div>
    )
}