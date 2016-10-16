"use strict";

// Chosen
$(function() {
    $(".header-filter select").chosen({
        disable_search: true
    });
});

$(document).ready(function(){      
   resizeChosen();
   jQuery(window).on('resize', resizeChosen);
});

function resizeChosen() {
   $(".chosen-container").each(function() {
       $(this).attr('style', 'width: 13rem');
   });          
}

// Calendar popup
var calendarClass = '.icon-calendar, body,.calendar,.events-row';
$(function() {
    $('.icon-calendar').click(function() {
        $(calendarClass).addClass('active');
        $('.icon-plus-squared, .overlay-calendar').show();
        $('.login').hide();
        return false;
    });

    $('.overlay-calendar, td.event').click(function() {
        $('.overlay-calendar').hide();
        $(calendarClass).removeClass('active');
    });

    $('.calendar .switch a').click(function() {
        $('body').toggleClass('compact-mode');
        if($('body').hasClass('compact-mode')) {
            $(this).text('Switch to Normal Mode');
        } else {
            $(this).text('Switch to Compact Mode');
        }
        return false;
    });
});

// Filter events
$('.header .menu-toggle').click(function() {
    $(calendarClass).removeClass('active');
    $('.header-filter, .header-filter button').show();
    $('.overlay').show();
    $('.login').hide();
    $('body').addClass('filter-active');
    return false;
});


// Login events
$('.icon-logout').click(function() {
    $('.overlay, .login').show();
    $('.calendar').removeClass('active');
    $('.add-event').hide();

});

//Add new event
$('.icon-plus-squared').click(function() {
    $('.overlay, .add-event').show();
    $('.calendar').removeClass('active');
    $('.login').hide();
});

// Global
$('.overlay, .close, .login button').click(function() {
    $(calendarClass).removeClass('active');
    $('.overlay').toggle();
    $('.login, .add-event').hide();
    $('.event-inner').hide();
});


$('.overlay').click(function() {
    $('.filter-active .header-filter, .filter-active  .header-filter button').toggle();
    $('body').removeClass('filter-active');
});

$(function() {
    var eventCount = $('.event-item--type span').length;
    var titleText = [
        "Terminlister",
        "Landevei",
        "Terreng",
        "Utfor",
        "Bmx",
        "Sykkelcross",
        "Trial",
        "Parasykling",
        "Bane",
        "Klubbtrening",
        "Kurs-møter",
        "Arrangement kurs",
        "Kommissær kurs",
        "Fellesmote",
        "Forbundsting ncf",
        "Uci kongress",
        "Uce kongress",
        "Nordisk kongress",
        "Trenerkurs",
        "Massør kurs",
        "Landslag",
        "Terminlister",
        "Treningssamlinger",
        "Pressekonferanser"
    ];
    var eventImg = [
        "brand.png",
        "brand2.png",
        "brand3.png",
        "brand4.png",
        "brand5.png",
        "brand6.png",
        "brand7.png",
    ];
    var eventName = [
        "Øster Hus Cupen 4 GATERITT",
        "Ulvøytråkket",
        "Ronde Van Vestkant - tempo",
        "80/20 HafjellEnduro",
        "2016 NTE Gateritt - AVLYST!",
        "Gatecup 5",
        "VTR-Valnesfjord Trillrundt",
        "Ronde Van Vestkant - fellesstart",
        "UNO-X Sykkelglede Cup #6",
        "Øygarden Tempo",
        "GD CUP #4 Lalm (Ottadalen SK)",
        "Dølisjøen Rundt 2016 Sykkel",
        "Vingerkross",
        "Hardbarka Enduro",
        "NC CX 1: Spikkestadkross"
    ];

    var randomClass = [
        "redblue lowercase",
        "lowercase"
    ];

    $('.event-item--type span').each(function(key,element){
        var randomTitle = titleText[Math.floor(Math.random()*titleText.length)];
        $(element).text(randomTitle);
    });

    $('.event-description').each(function(key,element){
        var randomDescription = eventName[Math.floor(Math.random()*eventName.length)];
        $(element).text(randomDescription);
    });

    $('.event-item--img img').each(function(key,element){
        var randomImg = eventImg[Math.floor(Math.random()*eventImg.length)];
        $(element).attr('src', 'img/' + randomImg);
    });

    $('.event-box').each(function(key, element){
        var newClass = randomClass[Math.floor(Math.random()*randomClass.length)];
        // $(element).className();
        $(element).addClass(newClass);
    });

// event popup
$('.event-item').click(function() {
    $('.overlay').toggle();
    $('.event-inner').show();
    var title = $(this).find('.event-item--type span').text();

    $('.event-inner h1').each(function(key,element){
        $(element).text(title);
        
    });

});




});