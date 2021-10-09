window.addEventListener('load' ,intro ,false);
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
Now lets see how to download and install out OS. First you should have an os alerdy installed in your local machine.
Then you have to go to <span onclick="window.open('https://sherry65-code.github.io/crystal.com/');">https://sherry65-code.github.io/crystal.com/</span> And click
on the Download button. Now as your os zip file is downloaded 
you have to extract the zip file and open the file and find the index.html or index file 
or you can open the setup file and open the readMe after it.
setup file opening works only in devices with Python3 installed
. And you are ready with your OS. Easy Peasy.
For contacting me mail me at <a href="mailto:sparambir65@outlook.com">sparambir65@outlook.com</a>. Thank you
so much for supporting me.

`
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