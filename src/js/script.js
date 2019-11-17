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
