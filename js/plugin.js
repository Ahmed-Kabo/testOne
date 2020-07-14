/* global $, alert, console,window */
$(function(){

'use strict'
// start a navigation active
  $('.linkes li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
// end  a navigation active
                            /*****************************/
//////// start header/////
    var myheight = $('.header');
    var slider = $('.slider');
    myheight.height($(window).height());


    $(window).resize(function(){
        $('.navbar').height($(window).height());
      myheight.height($(window).height());
      slider.each(function(){
        $(this).css('padding',( $(window).height() - $('.slider div').height()) /2);
      });

    });

//------------------ make the slid center ----------------//
    slider.each(function(){
      $(this).css('padding',( $(window).height() - $('.slider div').height()) /2);
    });



    /////// start the slider //////

    $('.slider').bxSlider({
      pager:false
    });


//////// end header/////
                            /*****************************/


//***** ------- start service ------*****//
    
    $('.linkes li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000);
        
    });
    
    
    $(' .info').mouseenter(function(){
        $('.info i, h3').css("color","#00CC9E")
    });

 /*
$('.box ').mouseenter(function(){
    $(this).first().addClass('overlay').slideDown(500,function(){
        $(this).firstChild('h4').fadeIn(500)
    }).siblings().removeClass('overlay');
});
*/
    
    
    
    
//***** ------- start service ------*****//

//------- !!!!!!!! saert test !!!!!!!! -------//
 
    
   
    $(function slid(){
        $('.test .active').each(function (){
                 if (!$(this).is(':last-child'))
                {
                    $(this).delay(2000).fadeOut(2000,function (){
                        $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                        slid();
                    });
                }else{
                    
                    $(this).delay(2000).fadeOut(2000,function(){
                        $(this).removeClass('active');
                        $('.test .container div').eq(0).addClass('active');
                         slid();
                    });
                }
        });
   
        
    });
    
  
    
    
    
    
    
    
//------- !!!!!!!! e n d test !!!!!!!! -------//
/**** start shuffle ****/
    

    
    $('#Container').mixItUp();
    
/**** e n d  shuffle ****/

$('.gallary .ul li'). click(function(){
   $(this).addClass('active').siblings().removeClass('active') 
});

    
 /**********************/
    
    
    $(window).scroll(function(){
     var Scrollbuttom =  $(window).scrollTop();
       if (Scrollbuttom >= 460 ) 
           {
               $('.button').show(400);
           }else{
               $('.button').hide(400);
           }
    });
    
    
  $('.button').on('click',function(){
      $('html,body').animate({scrollTop:0},800);
  });  
    
   /***********************/ 
    $("body").niceScroll({
        cursorcolor:'#00CC9E',
        cursorborder:'none',
        cursorwidth:'10px'
    });
    
    
    
   /*****************/
    $('.navbar').width($(window).width());
    
    $(window).scroll(function(){
        var Scrollbuttom =  $(window).scrollTop();
       if ( Scrollbuttom >= 700)
           {
               $('.navbar').css({
                   height:'75PX',
                   width:'100%',
                   background:'rgb(0,0,0,0.8)',
                   color:'#FFF',
                   paddingBottom:'20px',
               });
           }
        
    });
    
    
    
    
});
