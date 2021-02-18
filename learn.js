gsap.from('.parts' , { 
    duration : 2 , 
    delay : .3  , 
    stagger : .1 , 
    x : 30 , 
    opacity : 0 , 
    ease : 'expo.inOut'});

gsap.from('#svgs h5' , { 
    delay : 4 , 
    duration : .3 , 
    scale : 1.1 , 
    y : 10 , 
    opacity : 0 , 
    ease : 'expo.inOut'});

gsap.to('#svgs' , {
    stagger : .2  , 
    delay : 5.2 , 
    duration : 1 , 
    y : -120  , 
    opacity : 0 , 
    ease : 'expo.inOut'});

gsap.to('.parts' , {
    stagger : .05  , 
    delay : 5.9 , 
    duration : 1 , 
    y : '-100%'  , 
    opacity : 0 , 
    ease : 'expo.inOut'});

gsap.to('#overlay' , { 
    delay : 6.2 , 
    duration : 1 , 
    y : '-100%'  , 
    opacity : 0 , 
    ease : 'expo.inOut'});