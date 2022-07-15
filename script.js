/*const leftHandle = document.querySelectorAll(".handle left-handle")
const nslider =  handle.closest(".gallery").querySelector(".slider");
let nsliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")
    )*/
const hamburger = document.querySelector(".hamburger");
let indexValue = 1;
let width = window.innerWidth;
console.log(width < 551);

hamburger.addEventListener('click', e => {
    navBar();
});

window.addEventListener('resize', (event) => {
    let width = window.innerWidth;
    let x = document.querySelector(".navsmall");
    if(width > 550){
        x.style.display = "none";
         x.style.opacity = "0";

    }
});

function navBar() {
    let x = document.querySelector(".navsmall");
    let opacity = window.getComputedStyle(x).getPropertyValue("opacity");
    console.log(opacity);

    if (x.style.display === "inline-block") {
      x.style.display = "none";
      x.style.opacity = "0";

    } else {
      x.style.display = "inline-block";
      x.style.opacity = "1";
    }
  }
  

document.addEventListener("click", e => {
    let handle;
    if (e.target.matches("handle")){
        handle = e.target;
    } else {handle = e.target.closest(".handle")
}
if (handle != null) onHandleClick(handle)
})

function onHandleClick(handle) {
    const slider =  handle.closest(".gallery").querySelector(".slider");
    let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    

    console.log("current slider index" + sliderIndex);

    let newSliderIndexLeft = indexValue - 0.25;

    let newSliderIndexRight = indexValue + 0.25;

    console.log(indexValue, newSliderIndexLeft ,newSliderIndexLeft );
    if (handle.classList.contains("left-handle") && width < 551) {
        slider.style.setProperty("--slider-index", -5)        
    }
    if (handle.classList.contains("right-handle") && width < 551) {
        slider.style.setProperty("--slider-index", 5)        
    }

    if (handle.classList.contains("left-handle") && indexValue > -0.25) {
        slider.style.setProperty("--slider-index", newSliderIndexLeft)
        indexValue -= 0.25;
    }
    if (handle.classList.contains("right-handle") && indexValue < 2.5) {
        slider.style.setProperty("--slider-index", newSliderIndexRight)
        indexValue += 0.25;

    } if(handle.classList.contains("right-handle") && indexValue === 2.5){
        slider.style.setProperty("--slider-index", 1.5)
        indexValue = 1.5;
        
    }if(handle.classList.contains("left-handle") && indexValue === -0.25){
        slider.style.setProperty("--slider-index", 1.25)
        indexValue = 1.25;}
        else {return;}

}