const app = Vue.createApp({
    data() {
        return {
            myName: "Min Pyay Thein",
            myAge: 25,
            myPhoto: "C:\\Users\\minpy\\Desktop\\My Projects\\basics-assignment-1-problem\\mySample.jpg"

        };
    },
    methods: {
        fiveYearsLater() {
            return this.myAge + 5;
        },

        randomNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment");