
(function(){
    var app = angular.module("store", []);

    //store controller
    app.controller('StoreController',function(){
        //set items array as product
        this.products = pokeitems;
    });

    //review controller
    app.controller("ReviewController", function(){
        this.review={};
        //push new review to review array
        this.addReview = function(product){
            product.reviews.push(this.review);
            //clears out cached review
            this.review ={};
        }
    });


    //item array
    var pokeitems = [
        {
            name: 'Super Potion',
            price: 19.99,
            description:"A healing potion for your Pokemon",
            specification: "Heals up to 50 HP",
            reviews: [
                {
                    stars: 5,
                    body: "This got me through the Rock Tunnel",
                    author: "Ash Ketchum"
                },
                {
                    stars: 3,
                    body: "This potion sucks",
                    author: "Gary Oak"
                }
            ],
            images:[{full:'img/superpotion.png'}],
            canPurchase: true
        },

        {
            name: 'Ultra Ball',
            price: 99.99,
            description:"A pokeball for catching high-level pokemon ",
            specification: "Better than a great ball",
            reviews: [
                {
                    stars: 5,
                    body: "Pika Pika!",
                    author: "Pikachu"
                },
                {
                    stars: 1,
                    body: "Useless for enslaving humans",
                    author: "Mewtwo"
                },
                {
                    stars: 2,
                    body: "I still cannot catch that damn Suicine",
                    author: "Eugene"
                }
            ],
            images:[{full:'img/ultraball.jpg'}],
            canPurchase: true
        },
        {
            name: 'Old Rod',
            price: 9.99,
            description:"An old fishing rod",
            specification:"Can help you catch low-level water pokemon",
            reviews: [
                {
                    stars: 1,
                    body: "Only good for catching Magikarps",
                    author: "Red"
                },
                {
                    stars: 2,
                    body: "Not even a nibble from a Feebass",
                    author: "Fishing Guru"
                }
            ],
            images:[{full:'img/oldrod.png'}],
            canPurchase: true

        }
    ];




//run function immediately
})();
