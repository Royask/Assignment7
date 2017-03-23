(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        }
    };

    var Validation2 = {
        isDecaf: function(myString, myDecaf) {
            var decafTest = /.[decaf]$/.text(myString);
            if (decafTest == true && (myDecaf > 20)) {
                return false;
            } else {
                return true;
            }
        }
    };

    App.Validation2 = Validation2;
    App.Validation = Validation;
    window.App = App;
})(window);
