var budgetController = (function() {
    var x = 20;
    var add = function(num) {
        return (x + num);
    };

    return {
        publicAdd: function(number) {
            return add(number);
        }
    };
})();

var UIController = (function() {

    return {
        getUI: function(ui) {
            return ui;
        }
    };
})();

var appController = (function(budget, ui) {
    return {
        getBudget: function (params) {
            return budget.publicAdd(params);
        },

        getUI: function(params) {
            return ui.getUI(params);
        }
    };
})(budgetController, UIController);