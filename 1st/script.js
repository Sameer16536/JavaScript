var rect = document.querySelector("#center")

rect.addEventListener("mousemove",(details)=>{
    //To get location:
    var rectLocation = rect.getBoundingClientRect()
    var insiderectVal = details.clientX-rectLocation.left
//     bottom: 539.2000274658203
// height: 404.8000183105469
// left: 100.4000015258789
// right:905.1999893188477
// top: 134.40000915527344
// width: 804.7999877929688
// x: 100.4000015258789
// y: 134.40000915527344
    if(insiderectVal < rectLocation.width/2){
        console.log("Left side of the rectangle");
        var redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insiderectVal)
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })
    }else{
        console.log("Right side of the rectangle");
        var greenColor = gsap.utils.mapRange(rectLocation.width,rectLocation.width/2,255,0,insiderectVal)
        gsap.to(rect,{
            backgroundColor:`rgb(0,${greenColor},0)`,
            ease:Power4
        })
    }

})


rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:'white'
    })
})



//Gsap
// mapRange(inMin,inMax,outMin,outMax,valueToMap)