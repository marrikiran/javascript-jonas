// BUDGET CONTROLLER
var budgetController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        addButton: '.add__btn',
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.type).value,
                description: document.querySelector(DOMstrings.description).value,
                value: document.querySelector(DOMstrings.value).value
            };
        },

        getDOMStrings: function() {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var appController = (function(budgetCtrl, uiCtrl) {

    var setupEventListeners = function() {
        var DOM = uiCtrl.getDOMStrings();

        document.querySelector(DOM.addButton).addEventListener("click", controlAddItems);

        document.addEventListener("keypress", function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                controlAddItems();
            }
        });
    };

    var controlAddItems = function() {
        // 1. Get field input data
        var userInput = uiCtrl.getInput();
        console.log(userInput);

        // 2. add item to the budget controller
        // 3. add item to the UI
        // 4. calculate the budget
        // 5. display the budget on the UI
    };

    return {
        init: function() {
            console.log('app started');
            setupEventListeners();
        }
    };
})(budgetController, UIController);

appController.init();