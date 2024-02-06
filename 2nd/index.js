window.addEventListener("mousemove",(details)=>{
    var rect = document.querySelector("#rect")
    // console.log(details.clientX)
     var half_width = rect.getBoundingClientRect().width/2
     var half_height = rect.getBoundingClientRect().height/2

    var xval = gsap.utils.mapRange(0,window.innerWidth,100 + half_width,window.innerWidth- (100 + half_width),details.clientX)
    var yval = gsap.utils.mapRange(0,window.innerHeight, 100 + half_height, window.innerHeight - (100 + half_height),details.clientY)
    gsap.to('#rect',{
            // left:details.clientX+"px",
            left: xval + 'px',
            // top:details.clientY+ "px",
            top: yval + 'px',
            ease:Power3
    })
})