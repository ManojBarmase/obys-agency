function loadingAnimation(){
  
var tl=gsap.timeline()
tl.from(".line h1",{
  // niche se aawo
  y:150,
  //ek ek karke lagane ka kam kartaa hai
  stagger:0.25,
  duration:0.6,
  delay:0.5
})
tl.from("#line1-part1",{
  opacity:0,
  // jaise hi ye start hoga andar wala part chalne lagega
  onStart:function(){
         // 100 ki counting karne ke liye
        var h5timer=document.querySelector("#line1-part1 h5");
        var grow=0;
        // apke koi bhi work ko ek particular interval ke bad karti hai .ye particular time ke bad loop create karta hai
        setInterval(function(){
          if(grow<100){
            h5timer.innerHTML=grow++;
          }else{
            h5timer.innerHTML=grow;
        }
        },33);                     
  },
});
tl.to('.line h2',{
  animationName:"anime",
  opacity:1
})

tl.to("#loader",{
  opacity:0,
  duration:0.2,
  // delay itna do ki counting puri ho jaye 
  delay:4
})

tl.from("#page1",{
  delay:0.2,
  y:1600,
  opacity:0,
  duration:0.6,
  ease:Power4
})

tl.to("#loader",{
  display:"none",
});
tl.from("#nav",{
 opacity:0
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
  y:140,
  stagger:0.2
})
}

function cursorAnimation(){
// isne gol wala cursor bnaya
document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
  })
})
// magnet effect apply nhi huwa hai
Shery.makeMagnet("#nav-part2 h4" ,{});
}
loadingAnimation();
cursorAnimation()