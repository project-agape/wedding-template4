var main = {} || "";

main.init = function () {
    main.onMenuClick();
    main.onFormSubmit();
}

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


main.onMenuClick = function () {
    var navbarMenu = $('nav.navbar-default .container .navbar-nav .navbar-menu a');
    $(function () {
        navbarMenu.click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top
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