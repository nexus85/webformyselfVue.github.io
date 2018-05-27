new Vue({
    el: ".app",
    data: {

        counter: 0






        // html: "<a href='http://google.com'>link<a>"
    },
    methods: {
        riseCounter: function() {
            this.counter += 1;
        },
        downCounter: function() {
            if (this.counter > 0) {
                this.counter -= 1
            } else {
                this.counter = 0

            }
        },
        toNull: function() {
            this.counter = 0;
        }
    }








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