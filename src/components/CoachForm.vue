<template>
<section>
    <base-badge>
        <form action="submit">
            <div class="form-control">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="firstName" />
            </div>
            <div class="form-control">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="lastName" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" rows="5" v-model="description"></textarea>
            </div>
            <div class="form-control">
                <label for="hourlyRate">Hourly Rate</label>
                <input type="number" id="hourlyRate" v-model.number="hourlyRate" />
            </div>
            <div class="form-control">
                <h3>Areas of Expertise</h3>
                <div class="check-boxes">
                    <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
                    <label for="frontend">Fronted</label>
                    <input type="checkbox" id="backend" value="backend" v-model="areas" />
                    <label for="backend">Backend</label>
                    <input type="checkbox" id="career" value="career" v-model="areas" />
                    <label for="career">Career</label>
                </div>
            </div>
            <base-button class="submit-btn" type="submit" @click.prevent="submitForm">Register</base-button>
        </form>
    </base-badge>

</section>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            hourlyRate: '',
            areas: [],
        }
    },
    methods: {
        submitForm() {
            console.log("Isso é um teste")
        }
    },

}
</script>

<style lang="css" scoped>
section {
    width: 100%;
    height: 100%;
}
form{
    display: flex;
    flex-direction: column;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}
.check-boxes{
    display: flex;
    flex-direction: row;
    align-items: center;
}

input[type='checkbox'] {
    margin-left: 1rem;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}
.submit-btn {
    align-self: center;
    margin: 1rem 0;
    width: 30%;
}
.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>
