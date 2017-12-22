// var app = (function() {
    var testingfunctionExpression = function() {
      console.log("testing functionExpression");
      functionExpression();
    };

    var functionExpression = function() {
        console.log("Function expression is on it's way");
        anotherFunctionExpression();
    };

    var anotherFunctionExpression = function() {
        console.log("Another Function Expression");
    };

    testingfunctionExpression();
    // return {
        // init: function() {
        // }
    // };
// })();

// app.init();