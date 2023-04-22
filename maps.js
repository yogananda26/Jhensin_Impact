const map_showing = document.querySelector(".more_detail_maps1")
const map_showing2 = document.querySelector(".more_detail_maps2")
const map_showing3 = document.querySelector(".more_detail_maps3")
const map_showing4 = document.querySelector(".more_detail_maps4")

console.log(map_showing)
const stop_scrolling = document.querySelector("body")
// var wrap = $("#wrap");  
//this is for adding some 

let is_clicked = true
// this is for first page
let show = function() {
    if(is_clicked){
        map_showing.style.opacity = 1
        map_showing.style.zIndex = 3
        is_clicked = false
        stop_scrolling.style.overflow = "hidden"
    }
    else{ 
        map_showing.style.opacity = 0
        map_showing.style.zIndex = -1
        is_clicked = true;
        stop_scrolling.style.overflowX= "hidden"
        stop_scrolling.style.overflowY = "scroll"
    }
}

//this is for second page
let show2 = () =>{ 
    if(is_clicked){
        map_showing2.style.opacity = 1
        map_showing2.style.zIndex = 3
        is_clicked = false
        stop_scrolling.style.overflow = "hidden"
    }
    else{ 
        map_showing2.style.opacity = 0
        map_showing2.style.zIndex = -1
        is_clicked = true;
        stop_scrolling.style.overflowX= "hidden"
        stop_scrolling.style.overflowY = "scroll"
    }
}

let show3 = () =>{ 
    if(is_clicked){
        map_showing3.style.opacity = 1
        map_showing3.style.zIndex = 3
        is_clicked = false
        stop_scrolling.style.overflow = "hidden"
    }
    else{ 
        map_showing3.style.opacity = 0
        map_showing3.style.zIndex = -1
        is_clicked = true;
        stop_scrolling.style.overflowX= "hidden"
        stop_scrolling.style.overflowY = "scroll"
    }
}

let show4 = () =>{ 
    if(is_clicked){
        map_showing4.style.opacity = 1
        map_showing4.style.zIndex = 3
        is_clicked = false
        stop_scrolling.style.overflow = "hidden"
    }
    else{ 
        map_showing4.style.opacity = 0
        map_showing4.style.zIndex = -1
        is_clicked = true;
        stop_scrolling.style.overflowX= "hidden"
        stop_scrolling.style.overflowY = "scroll"
    }
}


