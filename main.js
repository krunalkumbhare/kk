// this way we dont have to keep trap of time and delay
var tl = gsap.timeline();
tl.from('.parts' , { 
    duration : 2 , 
    delay : .3  , 
    stagger : .1 , 
    x : 30 , 
    opacity : 0 , 
    ease : 'expo.inOut'}
    )
.from('#svgs h5' , {  
    duration : .3 , 
    scale : 1.1 , 
    y : 10 , 
    opacity : 0 , 
    ease : 'expo.inOut'}
    )
.to('#svgs' , {
    stagger : .2   , 
    duration : 1 ,
    delay : 1.3, 
    y : -120  , 
    opacity : 0 , 
    ease : 'expo.inOut'}
    )
.to('.parts' , {
    stagger : .05  ,
    duration : .5 , 
    delay : -0.5,
    y : '-100%'  , 
    opacity : 0 , 
    ease : 'expo.inOut'}
    )
.to('#overlay' , { 
    duration : 1 , 
    y : '-100%'  , 
    opacity : 0 , 
    ease : 'expo.inOut'}
    );