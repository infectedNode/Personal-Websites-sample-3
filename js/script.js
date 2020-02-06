// Copyright (c) 2020 Shivam Sharma
// 
// Licensed under the MIT License (the "License"); 
// you may not use this program except in compliance with the License.
// 
// The above copyright notice and this permission notice shall be 
// included in all copies or substantial portions of the program.
// 


// This template is developed by Shivam Sharma.
// GitHub: https://github.com/Shivamdot
// Twitter: https://twitter.com/infectedNode
// Linkedin: https://www.linkedin.com/in/infectednode/ 
// 

$('.main .left .option').click(function(){
    let id = $(this).attr('id');

    $('.main .left .option').removeClass('active');
    $(`.main .left #${id}`).addClass('active');

    $('.main .middle .views .view').removeClass('active');
    $(`.main .middle .views .${id}`).addClass('active');
});