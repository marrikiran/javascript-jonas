var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonObject = JSON.parse(this.responseText);
        // var jsonString = JSON.stringify(jsonObject);

        var itemNames;
        var groceries = jsonObject.groceries;

        for (var x in groceries) {
          itemNames += '<option value="' + groceries[x].id + '">';
          itemNames += groceries[x].name + " - $" + groceries[x].price + "/lb";
          itemNames += "</option>";
        }

        var dropDown = "<select>" + itemNames + "</select>";
        document.querySelector("div.drop-down").innerHTML = dropDown;
    }
};

xmlhttp.open("GET", "./gorcery.json", true);
xmlhttp.send();
