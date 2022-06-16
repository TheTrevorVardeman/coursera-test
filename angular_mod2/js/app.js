(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyItems = this;
        buyItems.items = ShoppingListCheckOffService.getItems(); 
        buyItems.buyItems = function (itemIndex){
            ShoppingListCheckOffService.buyItems(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtItems = this;

        boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var items = [
            {name: "Chips", quantity: 5},
            {name: "Drinks", quantity: 4},
            {name: "Napkins", quantity: 100},
            {name: "Candy", quantity: 50},
            {name: "Cookies", quantity: 20}
        ];
        var items2 = [];

        service.buyItems = function (itemIndex){
            var buy = items[itemIndex];

            items2.push(buy);
            items.splice(itemIndex, 1);
            };
            

            service.getItems = function() {
                return items;
            };
    
            service.getBoughtItems = function() {
                return items2;
            }
        
        };
        
    }

)();