const rightButton = $('.slider-right');
const leftButton = $('.slider-left');
const imageOne = $('.image1')
const imageTwo = $('.image2')
const imageThree = $('.image3')

function image2Hidden(){
    imageTwo.addClass('hidden')    
}
function image3Hidden(){
    imageThree.addClass('hidden')    
}

function sliderAnimationForSecondImage(){
document.getElementsByClassName('image2')[0].style.position = 'absolute'
document.getElementsByClassName('image1')[0].style.marginLeft = '-1600px'
document.getElementsByClassName('image2')[0].style.marginLeft = '00px'
imageTwo.removeClass('hidden')
document.getElementsByClassName('image3')[0].style.marginLeft = '1600px'
document.getElementsByClassName('slider-circle2')[0].style.backgroundColor = 'darkslategray';
        document.getElementsByClassName('slider-circle1')[0].style.backgroundColor = 'gray';
        document.getElementsByClassName('slider-circle3')[0].style.backgroundColor = 'gray';
}
function sliderAnimationForFirstImage(){
    document.getElementsByClassName('image1')[0].style.marginLeft = '00px'
    imageThree.addClass('hidden')
    imageTwo.removeClass('hidden')
    document.getElementsByClassName('slider-circle1')[0].style.backgroundColor = 'darkslategray';
            document.getElementsByClassName('slider-circle2')[0].style.backgroundColor = 'gray';
            document.getElementsByClassName('slider-circle3')[0].style.backgroundColor = 'gray';
}

function sliderAnimationForThirdImage(){
    document.getElementsByClassName('image2')[0].style.marginLeft = '-1600px'
    document.getElementsByClassName('image3')[0].style.marginLeft = '00px'
    document.getElementsByClassName('image2')[0].style.position = 'relative'
    imageThree.removeClass('hidden')
    document.getElementsByClassName('slider-circle3')[0].style.backgroundColor = 'darkslategray';
            document.getElementsByClassName('slider-circle1')[0].style.backgroundColor = 'gray';
            document.getElementsByClassName('slider-circle2')[0].style.backgroundColor = 'gray';
}

rightButton.click(function(){
        if(imageTwo.hasClass('hidden') && imageThree.hasClass('hidden')){
        sliderAnimationForSecondImage()
        return none
        }
        if(!imageTwo.hasClass('hidden')){
            sliderAnimationForThirdImage()
            return none
        }
        if(!imageThree.hasClass('hidden')){
            sliderAnimationForSecondImage()
            return none
        }
})

leftButton.click(function(){
    if(!imageTwo.hasClass('hidden')&& imageThree.hasClass('hidden')){
        sliderAnimationForFirstImage()
        setTimeout(image2Hidden, 1001)
        return none
    }
    if(!imageThree.hasClass('hidden')){
       sliderAnimationForSecondImage()
       setTimeout(image3Hidden, 1001) 
       return none
    }
})
var splide = new Splide( '.splide' );
splide.mount();



