var main = {} || "";

main.init = function () {
    main.onMenuClick();
    main.onFormSubmit();
    main.onIconTransition();
    main.initCountDown();
}

main.initCountDown = function(){
    // var beforeWedding = new Date('2016/04/24 15:01:50');
    var beforeWedding = new Date('2016/12/05');
    $('#countdown-day').countdown(beforeWedding, {elapse: true}).on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('<span class="countdown-number">%-D</span>'));
        if(event.elapsed){
            $("#countdown .section-header").text("Forever and Counting");
        }
        else{
            $("#countdown .section-header").text("How long do we have to wait?");
        }
    });

    $('#countdown-hour').countdown(beforeWedding, {elapse: true}).on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('<span class="countdown-number">%-H</span>'));
    });

    $('#countdown-minute').countdown(beforeWedding, {elapse: true}).on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('<span class="countdown-number">%-M</span>'));
    });

    $('#countdown-second').countdown(beforeWedding, {elapse: true}).on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('<span class="countdown-number">%-S</span>'));
    });
};


main.onFormSubmit = function () {
    $("#form-content").submit(function () {
        $("#ss-submit").attr("disabled", true);
        setTimeout(function () {
            $("#ss-submit").attr("disabled", false);
        }, 1000);
    });

    $("#hidden_iframe").on('load', function () {
        $("#myModal").modal('show');
        $("#form-content")[0].reset();
        setTimeout(function () {
            $("#myModal").modal('hide');
        }, 2000);
    });
}

main.onIconTransition = function() {
    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');
    });
}

main.onMenuClick = function () {
    var navbarMenu = $('nav.navbar-default .container .navbar-nav .navbar-menu a');
    $(function () {
        navbarMenu.click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top - 20
                    }, 700);
                    return false;
                }
            }
        });
    });
};

$(function () {
    main.init();
});