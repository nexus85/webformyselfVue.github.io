new Vue({
    el: ".app",

    data: {

    },
    methods: {
        clickOnGoogle: function(event) {
            event.preventDefault(); //отменяем стандарное поведение
        }
    }









    // data: {

    //     counter: 0,
    //     counter2: 0,
    //     title: "",
    //     num: 5

    //     // html: "<a href='http://google.com'>link<a>"
    // },
    // methods: {
    //     riseCounter: function(count, str, event) {
    //         count = +count;
    //         if (this.counter >= 100) {
    //             this.counter = 100;
    //         } else {
    //             this.counter += count;
    //             this.title = str;
    //             // this.title = (count * 22) + " руб."
    //             if (count == 5) {
    //                 //blue
    //                 event.target.style.color = 'blue'
    //             } else if (count == 10) {
    //                 //red
    //                 event.target.style.color = 'red'
    //             }
    //         }

    //     },
    //     downCounter: function() {
    //         if (this.counter > 0) {
    //             this.counter -= 1
    //         } else {
    //             this.counter = 0


    //         }
    //     },
    //     toNull: function() {
    //         this.counter = 0;
    //     },
    //     onHover: function(event) {
    //         //event
    //         event.target.style.color = "red"
    //     },
    //     outHover: function(event) {
    //         event.target.style.color = "black";
    //     }
    // }








    // data: {
    //     url: 'http://google.com'
    // }



    // data: {
    //     name: "Vue!",
    //     namber: 100,
    //     isOk: false,
    //     string: "My name is Vlad"
    // },
    // methods: {
    //     sayHello: function() {
    //         return "I'm function"
    //     }
    // }

})