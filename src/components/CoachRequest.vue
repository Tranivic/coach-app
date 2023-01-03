<template lang="">
<base-badge>
    <form @submit.prevent="submit">
        <label for="full-name">Your name:</label>
        <div class="full-name" name="full-name">
            <input required v-model="firstName" placeholder="First name" @keypress="isLetter($event)" name="firstName" type="text" />
            <input required v-model="lastName" placeholder="Last name" @keypress="isLetter($event)" type="text" />
        </div>
        <label for="type">Message type:</label>
        <select required id="type" v-model="msgType">
            <option disabled value="">Please select a message type</option>
            <option>Proposal</option>
            <option>Question</option>
        </select>
        <label for="textarea">Message to: {{ coachId }}</label>
        <textarea required v-model="message" name="textarea" id="" cols="30" rows="10"></textarea>
        <base-button>Send</base-button>
    </form>
</base-badge>
</template>

<script>
import BaseBadge from "./ui/BaseBadge.vue";
import BaseButton from "./ui/BaseButton.vue";
import moment from "moment";
export default {
    props: ["coachId"],
    data() {
        return {
            firstName: "",
            lastName: "",
            message: "",
            msgType: "",
        }
    },
    components: {
        BaseBadge,
        BaseButton,
    },
    methods: {
        submit() {
            //Dispatch to post request data into firebase
            this.$store.dispatch("requests/postRequest", {
                    id: this.randomId,
                    fullName: this.fullName,
                    messageType: this.msgType,
                    message: this.message,
                    msgFor: this.$route.params.coachId,
                    sendDate: this.formatedDate,
                }),
                this.cleanForm()
        },

        //Function to allow only letters in name input 
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char)) return true;
            else e.preventDefault();
        },

        //This will clean the form inputs after submit
        cleanForm() {
            this.firstName = "";
            this.lastName = "";
            this.message = "";
            this.msgType = "";
        },
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName
        },
        randomId() {
            return `${moment().format("DDMMYY")}RQST${moment().format('Hmmss')}`
        },
        formatedDate() {
            return `${moment().format("MMM")} ${moment().format("DDD")} at ${moment().format('HH:MM A')} `
        },
    },
};
</script>

<style lang="css" scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

label {
    align-self: flex-start;
    margin: 1rem 0;
}

input {
    width: 6rem;
    margin-right: .3rem;
}

select {
    width: 10rem;
}

textarea {
    width: 100%;
    height: 5rem;
    text-align: start;
    resize: vertical;
    min-height: 5rem;
}

button {
    width: 10%;
    margin-top: 1rem;
    align-self: center;
}
</style>
