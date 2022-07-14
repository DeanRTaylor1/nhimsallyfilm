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
    let newSliderIndexLeft = sliderIndex - 0.25;
    let newSliderIndexRight = sliderIndex + 0.25;
    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", newSliderIndexLeft)
    }
    if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", newSliderIndexRight)
    }
    
}