(function () {
    //'use strict';

    /* ============================================================ */
    /* ================================================= Chai js == */
    /* ============================================================ */
    /* http://chaijs.com/api/bdd/ */

    describe("$", function () {

        it('$ exist', function () {
            expect($).to.be.a('object');
        });

    });

    describe("dom", function () {

        var _fix;

        before(function () {
        });

        after(function () {
        });

        beforeEach(function () {
            _fix = document.createElement('div');
            _fix.innerHTML =
                '<div id="dom-id" class="dom-class" name="dom-name"></div>' +
                '<div id="dom-id2" class="dom-class"></div>';
            document.body.appendChild(_fix);
        });

        afterEach(function () {
            document.body.removeChild(_fix);
        });

        /* ===================== Assertions == */
        /* =================================== */

        it('$.id', function () {
            expect($.id).to.be.a('function');
            expect($.id('dom-id')).not.to.be.null;
        });

        it('Array.prototype.forEach', function () {
            expect(Array.prototype.forEach).not.to.be.null;
        });

        it('$.className', function () {
            expect($.className).to.be.a('function');
            expect($.className('dom-class').length).to.be.least(1);
        });

        it('$.tagName', function () {
            expect($.tagName).to.be.a('function');
            expect($.tagName('div').length).to.be.least(1);
        });

        it('$.query', function () {
            expect($.query).to.be.a('function');
            expect($.query('#dom-id')).not.to.be.null;
        });

        it('$.queryAll', function () {
            expect($.queryAll).to.be.a('function');
            expect($.queryAll('.dom-class').length).to.be.least(1);
        });

        it('$.each', function () {
            expect($.each).to.be.a('function');
        });

        it('Array.prototype.forEach', function () {
            expect(Array.prototype.forEach).to.be.a('function');
            var counter = 0;
            $.className('dom-class').each(function (i, el) {
                counter++;
            });
            expect(counter).to.equal(2);
        });

        it('$.queryAll(\'.element\').and($.queryAll(\'.element2\')', function () {
            expect(window.NodeList.prototype.and).to.be.a('function');
            expect(window.HTMLCollection.prototype.and).to.be.a('function');
            expect($.queryAll('#dom-id').and($.queryAll('#dom-id2')).length).to.equal(2);
        });

    });

})();
