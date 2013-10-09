(function ($) {
    $.fn.scaleToFit = function (options) {
        var minSize = 8;
        if (options != null) {
            minSize = options.minSize;
        }
        $(this).each(function () {
            resizeTextToFitContainer($(this), minSize);
        });
    };

    function resizeTextToFitContainer(element, minSize) {
        while (getTrueWidth(element) > element.width() && parseInt(element.css("font-size"), 10) > minSize) {
            var fontSize = parseInt(element.css("font-size"), 10);
            element.css("font-size", fontSize - 1 + "px");
        }
    }

    function getTrueWidth(element) {
        var clone = element.clone().css({display: "none", visibility: "hidden", width: "auto", height: "auto", position: "absolute"});
        element.append(clone);
        var trueWidth = clone.width();
        clone.remove();
        return trueWidth;
    }
})(jQuery);