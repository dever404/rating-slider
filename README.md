range reviews
-------

the plugin jquery for range slider reviews

#### Demo 

[https://errafaiy.github.io/range-reviews/] (https://errafaiy.github.io/range-reviews/)

#### Settings

Option | Type |  Description
------ | ---- |  -----------
min    | int  |  value of begin range slide icon reviews
max    | int  |  value of end range slide icon reviews
icon   | string |  class name of icon 
theme  | string | type theme range slider tow theme ( satisfied / review )

#### Example satisfied range

```javascript
    var optionRangeSmiley = [
        {min:0,max:30,icon:'icon-frown'},
        {min:30,max:70,icon:'icon-meh'},
        {min:70,max:100,icon:'icon-smiley'}
    ],
    theme = 'satisfied';
    $('.statisfied').RangeReviewSmiley(optionRangeSmiley,theme);
``` 

#### Example reviews range

```javascript
    var optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:25,max:25,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:75,max:75,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ];
    theme = 'review';
    $('.statisfied-review').RangeReviewSmiley(optionRangeSmiley,theme);
``` 

####  Browser support
 Works on IE11+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

####  Dependencies
jQuery 3.4.1

####  License
Copyright (c) 2019 

Licensed under the MIT license.

Free as in Bacon.