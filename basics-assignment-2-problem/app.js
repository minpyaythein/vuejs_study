const app = Vue.createApp({
    data() {
        return {
            OUTPUT: "",
            newOutput: ""
        }
    },
    methods: {
        showAlert() {
            alert("You have been warned!!!");
        },
        copyName(event) {
            this.OUTPUT = event.target.value;
        },
        copyName2() {
            this.newOutput = this.OUTPUT;
        },
        reset() {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                input.value = "";
            });
        }
    }
});

app.mount("#assignment");