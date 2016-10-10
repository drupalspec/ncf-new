"use strict";

// Chosen
$(function() {
    $(".header-filter select").chosen({
        disable_search: true
    });
});

// Calendar popup
var calendarClass = '.icon-calendar, body,.calendar,.events-row';
$(function() {
    $('.icon-calendar').click(function() {
        $(calendarClass).addClass('active');
        $('.icon-plus-squared, .overlay-calendar').show();
        $('.login').hide();
        $('.header-filter, .header-filter button').hide();
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
    $('.header-filter, .header-filter button').show();
    $(calendarClass).removeClass('active');
    $('.overlay').show();
    $('.login').hide();
    return false;
});


// Login events
$('.icon-logout').click(function() {
    $('.overlay, .login').show();
    $('.calendar').removeClass('active');
    $('.header-filter, .header-filter button').hide();
    $('.add-event').hide();
});

//Add new event
$('.icon-plus-squared').click(function() {
    $('.overlay, .add-event').show();
    $('.calendar').removeClass('active');
    $('.login').hide();
    $('.header-filter, .header-filter button').hide();
});

// Global
$('.overlay, .close, .login button').click(function() {
    $(calendarClass).removeClass('active');
    $('.overlay').toggle();
    $('.login, .add-event').hide();
    $('.header-filter, .header-filter button').hide();
});