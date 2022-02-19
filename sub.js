$(document).on("mouseenter", ".item__list-item",
    function () {
        $(this).find('.item__delete-button').stop().fadeIn();
    }),
    $(document).on("mouseleave", ".item__list-item",
        function () {
            $(this).find('.item__delete-button').stop().fadeOut();

        });

