(function (f) {

    var _dom = f(document, window);

    typeof module !== 'undefined'
        ? (module.exports = _dom)
        : $ = _dom;

})(function(document, window){

    // useful for doing $.queryAll('.inside').each()
    window.NodeList.prototype.each = window.HTMLCollection.prototype.each = Array.prototype.each = Array.prototype.forEach;

    // useful for doing $.queryAll('.inside').and($.queryAll('.inside2'))
    window.NodeList.prototype.and = window.HTMLCollection.prototype.and = function (selection) {
        return Array.prototype.slice.call(this).concat(Array.prototype.slice.call(selection));
    };

    return {
        id       : function (s) { return document.getElementById(s); },
        className: function (s) { return document.getElementsByClassName(s); },
        tagName  : function (s) { return document.getElementsByTagName(s); },
        query    : function (s) { return document.querySelector(s); },
        queryAll : function (s) { return document.querySelectorAll(s); },
        each     : function (array, f) {
            Array.prototype.forEach.call(array, f);
            return this;
        }
    };
});