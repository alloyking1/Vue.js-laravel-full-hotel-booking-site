// creating a new Vue instance

var app = new Vue({
    el:'#app',
    data:{
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle:{
            'background-image':'url(sample/header.jpg)'
        },
        amenities:sample.amenities,
        price:sample.price
    }
});