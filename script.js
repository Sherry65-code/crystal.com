document.getElementById('img1').addEventListener('mouseover' ,()=>{
    document.getElementById('img1').src = "https://sherry65-code.github.io/imgs/img2.png";
});
window.addEventListener('scroll' ,()=>{
    document.body.style('    background: linear-gradient(rgb(127, 146, 255) ,rgb(159, 107, 255));')
})
document.querySelector('.doc').addEventListener('click' ,()=>{
    window.open('doc.html');
})