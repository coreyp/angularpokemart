
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
            title: 'At your service',
            name: 'Samir',
            price: 9.99,
            description:"Experienced food taster",
            specification:"Supertaster. Loyal and trustworthy. Putting himself through college (pre-med).",
            reviews: [
                {
                    stars: 5,
                    body: "Samir saved my life. He is like a son to me now.",
                    author: "M.L., business executive"
                },
                {
                    stars: 4,
                    body: "Excellent Heimlich technique!",
                    author: "W.C., plastic surgeon"
                }
            ],
            images:[{full:'img/samir.jpg'}],
            canPurchase: true

        },
        {
            title: 'Hard-working hipster',
            name: 'Ken',
            price: 1999.99,
            description:"Tenant farmer",
            specification: "Musician/artist/designer/farmer. Specializes in winter crops and difficult soil. Organic methods only.",
            reviews: [
                {
                    stars: 4,
                    body: "Before Ken came along, I had a lot of underexploited acerage. Now, he and his family have an affordable means of subsistence, and I enjoy additional farm subsidies. It's a win-win!",
                    author: "B.T., part-time Montana rancher"
                },
                {
                    stars: 3,
                    body: "Good: Produce deliveries always on time. Bad: May have smoked inside the guest cabin.",
                    author: "A.C., real estate investor"
                }
            ],
            images:[{full:'img/ken.jpg'}],
            canPurchase: true
        },

        {
            title: 'Always at hand',
            name: 'Betina',
            price: 500.00,
            description:"Apprentice maid",
            specification: "An affordable, reliable choice for all domestic duties and outdoor work. Part-time student (University of Phoenix).",
            reviews: [
                {
                    stars: 4,
                    body: "Did everything we asked!",
                    author: "L.T. and E.T., retirees"
                },
                {
                    stars: 3,
                    body: "Betina was perfectly charming, but I did notice she left some creases while ironing.",
                    author: "M.E., interior designer"
                },
                {
                    stars: 2,
                    body: "Looks older than in the picture.",
                    author: "J.B., serial entrepreneur"
                }
            ],
            images:[{full:'img/betina.jpg'}],
            canPurchase: true
        },
        {
            title: '\xA1Con mucho gusto!',
            name: 'Roberto',
            price: 9.99,
            description:"Body man",
            specification:"Long record of service for blue-chip executives, political candidates and some of the oldest, most respected families in his home country",
            reviews: [
                {
                    stars: 3,
                    body: "Despite the language barrier, Roberto anticipated my every need. Pretty soon, I forgot he was there!",
                    author: "G.F., telecommunications lobbyist"
                },
            ],
            images:[{full:'img/roberto.jpg'}],
            canPurchase: true

        }
    ];




//run function immediately
})();
