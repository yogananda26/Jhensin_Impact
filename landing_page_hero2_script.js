const sub_swipper = document.querySelectorAll(".sub_swipper_hero")

var counter = 0
//this is for sliding 
sub_swipper.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)

const go_next = () =>{
    if(counter == 0 || counter < sub_swipper.length-1){
        counter++;
        slide_image()
    }
    else{
        return;
    }
}
const go_prev = () =>{
    if(counter <= 0){ 
        return;
    }
    else {
        counter--
        slide_image()
    }
}

const slide_image = () =>{
    sub_swipper.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`

        }
    )
}