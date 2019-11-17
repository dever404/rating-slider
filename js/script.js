(function( $ ) {
 
    $.fn.RangeReviewSmiley = function(options,theme) {
        //variable range
        var range   = $(this),
            nbrIcons ,
            rangeBullet ,
            reviewsFill ,
            rangeMaxValue ,
            rangeValue ,
            widthFill ;

        function initVariable(value) {
            nbrIcons        = options.length;
            rangeSlider     = $(value).find('.reviews-range');
            rangeMaxValue   = rangeSlider.prop('max');
            rangeBullet     = $(value).find('.reviews-label');
            reviewsFill     = $(value).find('.reviews-fill');
            rangeValue      = rangeSlider.val();
        }    

        function reviewChange(value){

            initVariable(value);

            //Change Position Icon
            rangeBullet.css({"left":pors(rangeValue)+"%","transform": "translateX(-"+pors(rangeValue)+"%)"});

            //Change Color Range
            if (theme === 'satisfied') {
                if(rangeValue > (rangeMaxValue/2)) {
                    widthFill = pors(rangeValue  - (rangeMaxValue/2));
                    reviewsFill.css({"left":"50%","right":"auto","width": "calc("+widthFill+"% - 4px)"});
                }else {
                    widthFill = pors((rangeMaxValue/2) - rangeValue );
                    reviewsFill.css({"left":"auto","right":"50%","width": "calc("+widthFill+"% - 4px)"});
                }
            }

            //Change Icon 
            for(i = 0 ; i < nbrIcons ; i++){
                if(rangeValue>=options[i].min && rangeValue<=options[i].max) {
                    rangeBullet.removeClass().addClass('reviews-label');
                    rangeBullet.addClass(options[i].icon);
                }
            }

        }
        
        function satisfiedIcon(value){
            initVariable(value);

            $(value).find(".range" ).addClass('range-satisfied');
            for(i = 0 ; i < nbrIcons ; i++){
                console.log(options[i].icon);
                $(value).find(".range" ).append( "<span class='satisfied-label "+options[i].icon+"'></span>" ).find(".satisfied-label:last" ).css({"left":""+pors((options[i].min))+"%","transform": "translate(-"+pors((options[i].min))+"%,-50%)"});
            }
        }
        //Convert px to %
        function pors(value){
            return ((value * 100) /(rangeMaxValue));
        }

        function init() {
            range.each(function (index, value) {
                    reviewChange(value);
                if (theme === 'review') 
                    satisfiedIcon(value)   
                //Onchange value range
                rangeSlider.on("input change",function(){
                    reviewChange(value);
                });

                $('.satisfied-label').on('click',function(){
                    var position = $(this).position();
                    reviewChange(value);
                });
            });
        }

        init();
        
    };
    
 
}( jQuery ));
"use strict";

$(document).ready(function () {

    var optionRangeSmiley = [
        {min:0,max:30,icon:'icon-frown'},
        {min:30,max:70,icon:'icon-meh'},
        {min:70,max:100,icon:'icon-smiley'}
    ],
    theme = 'satisfied';
    $('.statisfied').RangeReviewSmiley(optionRangeSmiley,theme);
    
    optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:25,max:25,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:75,max:75,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ];
    theme = 'review';
    $('.statisfied-review').RangeReviewSmiley(optionRangeSmiley,theme);
});
