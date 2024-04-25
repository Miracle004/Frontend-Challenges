
//-----------------IMAGE SLIDER ---------------
let img = document.getElementById("img-holder");

//Used an array to store the images i want to slide through
let slides =['image-2.jpg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-1.jpg'];

let start = 0;

//Uses the start variable value to pick an image from the array to display 
function slider(){
    //increases the value of start by 1 as long as its less than the length of the array
    if(start<slides.length){
        start +=1;
    }
    else{
        start = 1;
    }
    img.innerHTML = '<img id="sliderImg" src=' +slides[start-1]+ '>';
}

setInterval(slider, 2000);

//-----------------END--------------------------