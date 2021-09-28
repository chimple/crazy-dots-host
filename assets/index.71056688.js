var e=Object.defineProperty,t=("undefined"!=typeof require&&require,(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s));import{P as i}from"./vendor.c2cc9365.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class s extends Phaser.Scene{constructor(){super("Game"),t(this,"mainBall"),t(this,"ball"),t(this,"ballType",["ballBlue","ballPink"]),t(this,"ontapStatus",!0),t(this,"gameOver",!1),t(this,"score",0),t(this,"scoreBoard"),t(this,"gameOverText"),t(this,"directionSelection"),t(this,"tween"),t(this,"width",540),t(this,"height",960),t(this,"speed",1500),t(this,"highScore")}preload(){this.load.image("mainBallBlue","./assets/blue.png"),this.load.image("mainBallpink","./assets/pink80.png"),this.load.image("ballBlue","./assets/blue60.png"),this.load.image("ballPink","./assets/pink.png")}create(){console.log("Enter Create Method"),this.mainBall=this.add.image(this.width/2,this.height/2,"mainBallBlue"),this.mainBall.data="Blue",this.scoreBoard=this.add.text(this.width/2.5,.06*this.height,`Score: ${this.score}`,{fontFamily:"agencyr",fontSize:"52px",fontStyle:"bold",color:"#fffff"}),this.highScore=null==localStorage.getItem("highestScore")?0:localStorage.getItem("highestScore"),this.ballsTween(),this.createBall(),this.input.on("pointerdown",(()=>{this.gameOver||(console.log("pointerdown Enterd"),this.ontapStatus?(this.mainBall.setTexture("mainBallpink"),this.mainBall.data="Pink",console.log("pointerdown Enterd and mainBall changed to pink")):(this.mainBall.setTexture("mainBallBlue"),this.mainBall.data="Blue",console.log("pointerdown Enterd and mainBall changed to blue")),this.ontapStatus=!this.ontapStatus)}),this),console.log(this)}createBall(){console.log("Enter CreateBall Method");let e=Phaser.Math.Between(0,1);this.directionSelection=Phaser.Math.Between(1,2),console.log("this.ballType[ballColorType] ",this.ballType[e]),1==this.directionSelection?this.ball=this.add.image(Phaser.Math.Between(0,this.width),0,this.ballType[e]):2==this.directionSelection&&(this.ball=this.add.image(Phaser.Math.Between(0,this.width),this.height,this.ballType[e])),"ballBlue"==this.ballType[e]?(this.ball.data="Blue",console.log("this.ballType[ballColorType] ",this.ballType[e]," this.ball.data ",this.ball.data)):(this.ball.data="Pink",console.log("this.ballType[ballColorType] ",this.ballType[e]," this.ball.data ",this.ball.data)),this.incomingBall()}incomingBall(){this.tween=this.tweens.add({targets:this.ball,x:{value:this.mainBall.x},y:{value:this.mainBall.y},duration:this.speed,onComplete:()=>{this.gameOver||(console.log("OnEnd"),this.onCollition())}})}ballsTween(){this.tweens.add({targets:this.mainBall,onComplete:()=>{this.ballsTween(),this.tween.play},props:{x:{value:this.randomNumberPicker(this.width/1.75,this.width/2.25),duration:2e3},y:{value:this.randomNumberPicker(this.height/1.75,this.height/2.25),duration:1500}}}).play}randomNumberPicker(e,t){return Math.floor(Math.random()*(t-e+1))+e}onCollition(){console.log("OnCollition Method Enterd"),this.ball.setActive(!1).setVisible(!1),this.mainBall.data==this.ball.data?(this.score++,console.log("this.score++ ",this.score),this.scoreBoard.setText(`Score: ${this.score}`),(this.speed>=850||this.speed>=500&&this.score>=50)&&(this.speed=this.speed-40),this.createBall()):(console.log("diff color"),this.gameOver=!0,console.log("GameOver setted ",this.gameOver),this.gameOver&&Number(this.highScore)<this.score&&(localStorage.setItem("highestScore",this.score.toString()),this.highScore=this.score),console.log("Game over ",this.gameOver),this.gameOverText=this.add.text(this.width/2,.7*this.height,"\t\t\tGame Over\n\t\tYour score: "+this.score).setFontSize(50).setColor("#000000").setFontStyle("bold").setFontFamily("Zekton").setOrigin(.5),this.tween.stop(),console.log("tween stoped and gameovertext displayed"),setTimeout((()=>{console.log("setTimeout Entered"),this.scene.start("StartScreen",{score:this.score,isGameOver:!0}),console.log("StartScreen Loaded"),this.scene.remove("Game"),console.log("Game Scence removed")}),1e3))}}class a extends Phaser.Scene{constructor(){super("StartScreen"),t(this,"width",540),t(this,"height",960),t(this,"score"),t(this,"isGameOver")}init(e){var t;this.score=e.score,this.isGameOver=null!=(t=e.isGameOver)&&t}preload(){this.load.image("gameName","./assets/GameName.png"),this.load.image("playButton","./assets/PlayButton.png")}create(){var e,t;this.add.image(.5*this.width,.02*this.height,"gameName").setOrigin(.5,0).setScale(.4),this.add.text(.5*this.width,.45*this.height,"Score").setFontSize(60).setColor("#000000").setFontFamily("agencyr").setOrigin(.5,0),this.add.text(.5*this.width,.51*this.height,null!=(e=this.score)?e:"00").setFontSize(50).setFontFamily("agencyr").setColor("#000000").setOrigin(.5,0),this.add.text(.5*this.width,.65*this.height,"Best Score").setFontSize(40).setColor("#000000").setFontFamily("agencyr").setOrigin(.5,0),this.add.text(.5*this.width,.7*this.height,null!=(t=localStorage.getItem("highestScore"))?t:"0").setFontSize(40).setFontFamily("agencyr").setColor("#000000").setOrigin(.5,0),this.add.image(.5*this.width,.84*this.height,"playButton").setOrigin(.5,0).setScale(.4).setInteractive().on("pointerdown",(()=>{this.isGameOver&&(console.log("Game Scence Loaded"),this.scene.add("Game",s)),console.log("Game Scence Started"),this.scene.start("Game")}),this),this.add.text(.5*this.width,.85*this.height,`Tap to ${!0===this.isGameOver?"Re":""}start`).setFontSize(45).setColor("#FFFFFF").setFontFamily("agencyr").setOrigin(.5,0)}}var o={type:Phaser.AUTO,width:540,height:960,backgroundColor:"#F3F4C0",scale:{mode:Phaser.Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH,autoCenter:Phaser.Scale.Center.CENTER_BOTH},scene:[a,s]};new i.Game(Object.assign(o,{}));
