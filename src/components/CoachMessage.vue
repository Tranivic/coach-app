<template>
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
        <label for="textarea">Message to: {{ this.coachFetchedName }}</label>
        <textarea required v-model="message" name="textarea" id="" cols="30" rows="10"></textarea>
        <div class="msg-btns">
            <base-button class="send-btn">Send</base-button>
            <base-button @click="cancelForm" type="button" class="cancel-btn">Cancel</base-button>
        </div>
    </form>
</base-badge>
</template>

<script>
// Moment js used for data formatting
import moment from "moment";

export default {
    props: ["coachId"],
    created() {
        this.getCoachName().then((coachName) => {
            this.coachFetchedName = coachName;
        });
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            message: "",
            msgType: "",

            coachFetchedName: "",
        };
    },
    methods: {
        async getCoachName() {
            const coach = this.$store.getters["coachesModule/identifiedCoach"];
            const coachName = coach.firstName + " " + coach.lastName;
            return coachName;
        },
        async submit() {
            //Dispatch to post request data into firebase
            const newData = {
                fullName: this.fullName,
                messageType: this.msgType,
                message: this.message,
                msgForId: this.$route.params.coachId,
                sendDate: this.formatedDate,
                messageId: this.generateRandomId,
                msgForName: this.coachFetchedName,
            };
            await this.$store.dispatch("requests/postRequest", newData);
            this.$router.push({
                path: "/coaches",
            });
        },

        //Function to allow only letters in name input
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char)) return true;
            else e.preventDefault();
        },
        //Function to push user to coach info if hit the cancel btn
        cancelForm() {
            this.$router.push({
                name: "coachInfo",
            });
        },
    },
    computed: {
        // Computed to return sender full name
        fullName() {
            return this.firstName + " " + this.lastName;
        },
        // Function to format the date and store in the request
        formatedDate() {
            return `${moment().format("MMM")} ${moment().format(
        "DDD"
      )} at ${moment().format("HH:MM A")} `;
        },
        //Function to get random id for the request
        generateRandomId() {
            return this.$store.getters["uniqueRequestId"];
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
    margin-right: 0.3rem;
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
    margin: 0 1rem;
    width: 5rem;
}

.msg-btns {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}

.cancel-btn {
    color: rgb(212, 44, 44);
    background: none;
    border: 1px solid;
}
</style>
