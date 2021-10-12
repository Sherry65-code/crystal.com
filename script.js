document.getElementById('img1').addEventListener('mouseover' ,()=>{
    document.getElementById('img1').src = "https://sherry65-code.github.io/imgs/img2.png";
});
window.addEventListener('scroll' ,()=>{
    document.body.style('    background: linear-gradient(rgb(127, 146, 255) ,rgb(159, 107, 255));')
})
document.querySelector('.doc').addEventListener('click' ,()=>{
    window.open('doc.html');
})
window.addEventListener('load' ,()=>{
    if (innerWidth <= 642){
document.body.innerHTML = `  <div class="unas" style="text-align: left;">
<img alt="" class="logo"></div>
<h1 class="a">Invento Crystal OS</h1>
<a href="https://drive.google.com/u/0/uc?export=download&confirm=_GEs&id=1wAGrOdSJR7VFR5FDgxr1Iws8fIIMovF_" download> 
<button class="download">Download</button></a><br><br><br>
<h1>Bringing Technologies to Cloud. <br> We are <span> Invento </span>.We believe in <br>
     cloud more than in local.</h1><br><br><br><br><br><br><br><br><br><img src="https://sherry65-code.github.io/imgs/img1.png" alt="" class="dis1" style="position:relative;width:90%;"><br><br><br>
     <button onclick="window.open('doc.html')">View Documentation</button>
<script src="./script.js"></script>`;
}});
