// BUDGET CONTROLLER
var budgetController = (function() {

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function (id, description, value, percentage) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype = {
        setPercentages: function(totalIncome) {
            if (totalIncome > 0) {
                this.percentage = parseFloat(((this. value / totalIncome) * 100).toFixed(2));
            } else {
                this.percentage = -1;
            }
        },

        getPercentages: function() {
            return this.percentage;
        }
    };

    calculateTotal = function(type) {
        var sum = 0;

        budgetData.items[type].forEach(function (currentElement, index) {
          sum += currentElement.value;
        });

        budgetData.totals[type] = sum;
    };

    var budgetData = {
        items: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        },

        budget: 0,
        expensePercentage: -1,
    };

    return {
        createItem: function(type, desc, val) {
            var itemType = null;
            var itemId = 0;

            if (budgetData.items[type].length) {
                itemId = budgetData.items[type][budgetData.items[type].length - 1].id + 1;
            }

            if (type === "exp") {
                itemType = new Expense(itemId, desc, val);
            } else if (type === "inc") {
                itemType = new Income(itemId, desc, val);
            }

            budgetData.items[type].push(itemType);
            return itemType;
        },

        calculateBudget: function() {
            // 1. Calculate income as well as  expense
            calculateTotal("inc");
            calculateTotal("exp");

            // 2. Calculate total budget value
            budgetData.budget = budgetData.totals.inc - budgetData.totals.exp;

            // 3.Calculate percentage value for expences
            if (budgetData.totals.inc > 0) {
                budgetData.expensePercentage = parseFloat((budgetData.totals.exp / budgetData.totals.inc * 100).toFixed(2));
            } else {
                budgetData.expensePercentage = -1;
            }
        },

        calculatePercentages: function() {
            budgetData.items.exp.forEach(function(currentElement) {
                currentElement.setPercentages(budgetData.totals.inc);
            });
        },

        getPercentages: function() {
            var percentageArray = budgetData.items.exp.map(function(currentElement) {
                return currentElement.percentage;
            });

            return percentageArray;
        },

        getBudget: function() {
            return {
                total: budgetData.budget,
                inc: budgetData.totals.inc,
                exp: budgetData.totals.exp,
                percentage: budgetData.expensePercentage
            };
        },

        deleteItem: function(type, id) {

            var idArrays = budgetData.items[type].map(function(currentElement, index, array) {
                //  getting an array of all the IDs present in the object
                return currentElement.id;
            });

            // finding the index of the item
            var index = idArrays.indexOf(id);

            //  delete the item from the array
            if (index !== -1) {
                budgetData.items[type].splice(index, 1);
            }
        },

        test: function() {
            return budgetData;
        }
    };

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        TYPE: '.add__type',
        DESCRIPTION: '.add__description',
        VALUE: '.add__value',
        ADD_BUTTON: '.add__btn',
        INCOME_LIST: '.income__list',
        EXPENSE_LIST: '.expenses__list',
        BUDGET_LABEL: '.budget__value',
        INCOME_LABEL: '.budget__income--value',
        EXPENSE_LABEL: '.budget__expenses--value',
        PERCENTAGE_LABEL: '.budget__expenses--percentage',
        CONTAINER: '.container',
        EXPENSE_PERCENTAGE_LABEL: '.item__percentage',
        DATE: '.budget__title--month'
    };

    var formatNumber = function(number, type) {
        number = Math.abs(number);

        if (type === 'inc') {
            return '+ ' + number.toLocaleString("en-US",{ style: "currency", currency: "USD" });
        } else if (type === 'exp') {
            return '- ' + number.toLocaleString("en-US",{ style: "currency", currency: "USD" });
        }
    };

    // Our own forEach() for node list
    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getUserInput: function() {
            return {
                type: document.querySelector(DOMStrings.TYPE).value,
                description: (document.querySelector(DOMStrings.DESCRIPTION).value).trim(),
                value: parseFloat(document.querySelector(DOMStrings.VALUE).value),
            };
        },

        getDOMStrings: function() {
            return DOMStrings;
        },

        addItemOnUI: function(type, item) {
            var html = '', element;

            if (type === 'inc') {
                element = DOMStrings.INCOME_LIST;

                html += '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div>';
                html += '<div class="right clearfix"><div class="item__value">%value%</div>';
                html += '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline" />';
                html += "</button></div></div></div>";
            } else if (type === 'exp') {
                element = DOMStrings.EXPENSE_LIST;

                html = '<div class="item clearfix" id="exp-%id%">';
                html += '<div class="item__description">%description%</div><div class="right clearfix">';
                html += '<div class="item__value">%value%</div><div class="item__delete">';
                html += '<div class="item__percentage">21%</div>';
                html += '<button class="item__delete--btn"><i class="ion-ios-close-outline" /></button>';
                html += "</div></div></div>";
            }

            html = html.replace("%id%", item.id);
            html = html.replace("%description%", item.description);
            html = html.replace("%value%", formatNumber(item.value, type));

            document.querySelector(element).insertAdjacentHTML("beforeend", html);
        },

        displayBudgetValue: function(budget, type) {
            document.querySelector(DOMStrings.BUDGET_LABEL).textContent = formatNumber(budget.total, type);
            document.querySelector(DOMStrings.INCOME_LABEL).textContent = formatNumber(budget.inc, type);
            document.querySelector(DOMStrings.EXPENSE_LABEL).textContent = formatNumber(budget.exp, type);
            document.querySelector(DOMStrings.PERCENTAGE_LABEL).textContent = (budget.percentage > 0) ? budget.percentage + '%' : '---';
        },

        resetInputFields: function() {
            var nodeList, elementArray;

            nodeList = document.querySelectorAll(DOMStrings.DESCRIPTION + ", " + DOMStrings.VALUE);
            elementArray = Array.prototype.slice.call(nodeList);

            elementArray.forEach(function(currentElement, index) {
                currentElement.value = "";
            });

            elementArray[0].focus();
        },

        removeItem: function(element) {
            var parentNode = element.parentNode;
            parentNode.removeChild(element);
        },

        insertPersentageValue: function(percentArray) {

            var nodeList = document.querySelectorAll(DOMStrings.EXPENSE_PERCENTAGE_LABEL);

            nodeListForEach(nodeList, function(currentNode, index) {
                currentNode.textContent = (percentArray[index] > 0) ? percentArray[index] + '%' : '---';
            });
        },

        displayDate: function() {
            var now, month, year;
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' , 'November', 'December'];

            now = new Date();
            year = now.getFullYear();
            month = months[now.getMonth()];

            document.querySelector(DOMStrings.DATE).textContent = month + ' ' + year;
        },

        changeColorForInputControls: function() {

            var nodeList = document.querySelectorAll(DOMStrings.TYPE + ',' + DOMStrings.DESCRIPTION + ',' + DOMStrings.VALUE);

            nodeListForEach(nodeList, function (currentElement, index) {
                currentElement.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrings.ADD_BUTTON).classList.toggle('red');
        }
    };
})();


// GLOBAL APP CONTROLLER
var appController = (function(budgetController, UIController) {
    var updateBudget, updatePercentages;

    var setupEventListeners = function() {
        var DOM = UIController.getDOMStrings();

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                controlAddItems();
            }
        });

        document.querySelector(DOM.ADD_BUTTON).addEventListener('click', controlAddItems);

        document.querySelector(DOM.CONTAINER).addEventListener('click', controlDeleteItems);

        document.querySelector(DOM.TYPE).addEventListener('change', UIController.changeColorForInputControls);
    };

    updateBudget = function(type) {
        // Calculate the budget
        budgetController.calculateBudget();

        // get the budget
        var budget = budgetController.getBudget();

        // Display the budget on UI
        UIController.displayBudgetValue(budget, type);
    };

    updatePercentages = function() {
        // 1. Calculating percentages for expense values
        budgetController.calculatePercentages();

        // 2. Get percentages back from expences
        var percentages = budgetController.getPercentages();

        // 3. Updating percentage vaule on UI
        UIController.insertPersentageValue(percentages);
    };


    var controlAddItems = function() {

        // 1. Get field input data
        var userInput = UIController.getUserInput();

        if (userInput.description && !isNaN(userInput.value) && userInput.value > 0) {
            // 2. add item to the budget controller
            var createdItem = budgetController.createItem(userInput.type, userInput.description, userInput.value);

            // 3. add item to the UI
            UIController.addItemOnUI(userInput.type, createdItem);

            // 4. Clear the input fields
            UIController.resetInputFields();

            // 5. Updating the budget
            updateBudget(userInput.type);

            // 6. Updating the expense percentages
            updatePercentages();
        }
    };

    var controlDeleteItems = function(e) {
        // 1. Find out the type and id of the element to be deleted
        var element = e.target.parentNode.parentNode.parentNode.parentNode;
        var itemID = element.id;
        var splitID = itemID.split('-');
        var type = splitID[0];
        var id = parseInt(splitID[1]);

        // 2. Delete item from the data structure
        budgetController.deleteItem(type, id);

        // 3. Delete item from UI
        UIController.removeItem(element);

        // 4. Recalculate budget
        updateBudget(type);

        // 5. Updating the expense percentages
        updatePercentages();
    };

    var changeColorForInputControls

    return {
        init: function() {
            setupEventListeners();
            UIController.displayDate();
            UIController.displayBudgetValue({
                total: 0,
                inc: 0,
                exp: 0,
                percentage: 0
            }, 'exp');
        }
    };
})(budgetController, UIController);

appController.init();