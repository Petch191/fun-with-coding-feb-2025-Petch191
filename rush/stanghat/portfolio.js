     $(document).ready(function () {
            $('.navigation a').on('click', function (event) {
                event.preventDefault();
                let target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 50
                }, 800);
            });
        });
