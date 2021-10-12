window.addEventListener('load' ,install ,false);
function intro(){
document.getElementById('intro').innerHTML = `        <h1>Welcome to Invento Crystal OS Documentation</h1><br><br>
I am Parambir Singh the owner and alone developer of the whole Crystal OS.
I have made this OS from HTML ,CSS and JavaScript.
I want to tell you that if you also want to join my os 
family just open this website and download the zip.
All the info on how to install it are on the another tab. Thank
You. Your's only Parambir Singh.`;
}
function install(){
document.getElementById('intro').innerHTML = `<h1>Installation guide</h1><br><br>
Let's see how to install Invento Crystal Cloud OS. You can take free
trial at <a href="https://sherry65-code.github.io/crystal.io/"> Crystal.io </a> also.
Now lets see how to download and install out OS. 
Install os from the Download button in <a href="https://sherry65-code.github.io/crystal.com/">This Website</a>
or download from the direct download link <a href="https://drive.google.com/u/0/uc?export=download&confirm=_GEs&id=1wAGrOdSJR7VFR5FDgxr1Iws8fIIMovF_">Download Now</a>
First unzip the file and open the app folder. Then click on the run file 
(Only if you have python installed) or you can open cmd in the folder and type
npm start. And it's ready
Easy Peasy.
For contacting me mail me at <a href="mailto:sparambir65@outlook.com">sparambir65@outlook.com</a>. Thank you
so much for supporting me.
<br><br>
<h4>Requirements for installing Invento Crystal OS Virtual Machine</h4>
<br>
<ol>
<li>Node.js (For Port Hosting)
<li>Python3 (For Automation)
</ol>
`;
}
function screen(){
document.getElementById('intro').innerHTML = `
<img src="https://sherry65-code.github.io/imgs/img1.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img2.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img3.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img4.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img5.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img6.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img7.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img8.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img9.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img10.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img11.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img12.png" class="img">
<img src="https://sherry65-code.github.io/imgs/img13.png" class="img">
`
}
window.addEventListener('resize' ,()=>{
if (innerWidth <= 642){
    document.querySelector('.menubar').style = "visibility: hidden;";
    document.querySelector('.menu').style = "visibility: visible;";
    document.querySelector('.main').style = "left: 0;";
}
else if (innerWidth > 642){
    document.querySelector('.menubar').style = "visibility: visible;";
    document.querySelector('.menu').style = "visibility: hidden;";
    document.querySelector('.main').style = "left: 15%;";
}
});
window.addEventListener('load' ,()=>{
    if (innerWidth <= 642){
        document.querySelector('.menubar').style = "visibility: hidden;";
        document.querySelector('.menu').style = "visibility: visible;";
        document.querySelector('.main').style = "left: 0;";
    }
    else if (innerWidth > 642){
        document.querySelector('.menubar').style = "visibility: visible;";
        document.querySelector('.menu').style = "visibility: hidden;";
        document.querySelector('.main').style = "left: 15%;";
    }
});
