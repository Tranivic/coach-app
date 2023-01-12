<template>
<section>
    <base-badge>
        <form action="submit">
            <div class="form-control">
                <label :class="{invalid: !firstName.isValid}" for="firstName">First Name</label>
                <input :class="{invalid: !firstName.isValid}" @keypress="isLetter($event)" type="text" id="firstName" v-model="firstName.val" />
            </div>
            <div class="form-control">
                <label :class="{invalid: !lastName.isValid}" for="lastName">Last Name</label>
                <input :class="{invalid: !lastName.isValid}" @keypress="isLetter($event)" type="text" id="lastName" v-model="lastName.val" />
            </div>
            <div class="form-control">
                <label :class="{invalid: !description.isValid}" for="description">Description</label>
                <textarea :class="{invalid: !description.isValid}" id="description" rows="5" v-model="description.val"></textarea>
            </div>
            <div class="form-control">
                <label :class="{invalid: !hourlyRate.isValid}" for="hourlyRate">Hourly Rate</label>
                <input :class="{invalid: !hourlyRate.isValid}" @keypress="isNumber($event)" type="number" id="hourlyRate" v-model.number="hourlyRate.val" />
                <p v-if="!hourlyRate.isValid">Hourly rate must be greater than zero</p>
            </div>
            <div class="form-control">
                <h3>Areas of Expertise</h3>
                <div class="check-boxes">
                    <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" />
                    <label :class="{invalid: !areas.isValid}" for="frontend">Fronted</label>
                    <input type="checkbox" id="backend" value="backend" v-model="areas.val" />
                    <label :class="{invalid: !areas.isValid}" for="backend">Backend</label>
                    <input type="checkbox" id="career" value="career" v-model="areas.val" />
                    <label :class="{invalid: !areas.isValid}" for="career">Career</label>
                </div>
            </div>
            <p v-if="!areas.isValid">Choose at least one</p>
            <base-button class="submit-btn" type="submit" @click.prevent="submitForm">Register</base-button>
        </form>
    </base-badge>

</section>
</template>

<script>
export default {
    data() {
        return {
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            hourlyRate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true,
        }
    },
    methods: {
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char)) return true;
            else e.preventDefault();
        },
        isNumber(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[0-9]+$/.test(char)) return true;
            else e.preventDefault();
        },
        submitForm() {
            const coachData = {
                firstName: this.firstName.val,
                lastName: this.lastName.val,
                description: this.description.val,
                hourlyRate: this.hourlyRate.val,
                areas: this.areas.val,
            }
            const userId = this.getUniqueId
            this.validateForms();
            if (this.formIsValid) {
                this.firstName.isValid = true;
                this.lastName.isValid = true;
                this.description.isValid = true;
                this.hourlyRate.isValid = true;
                this.areas.isValid = true;
                this.formIsValid = true;
                this.$store.dispatch('coachesModule/registerCoach', {
                    coachData,
                    userId
                })
                this.cleanForm();
            }
        },
        validateForms() {
            this.formIsValid = true;
            if (this.firstName.val.trim().length === 0) {
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if (this.lastName.val.trim().length === 0) {
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.val.trim().length === 0) {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (this.hourlyRate.val <= 0) {
                this.hourlyRate.isValid = false;
                this.formIsValid = false;
            }
            if (this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        cleanForm(){
            this.firstName.val = '';
            this.lastName.val = '';
            this.description.val = '';
            this.hourlyRate.val = null;
            this.areas.val = [];
        }
    },
    computed: {
        getUniqueId() {
            return this.$store.getters['randomId'];
        }
    },
}
</script>

<style lang="css" scoped>
section {
    width: 100%;
    height: 100%;
}

form {
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

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
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
    outline: none;
}

.check-boxes {
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

p {
    color: red;
}

.submit-btn {
    align-self: center;
    margin: 1rem 0;
    width: 30%;
}

label.invalid {
    color: red;
}

h3.invalid {
    color: red;
}

input.invalid {
    border: 1px solid red;
}

textarea.invalid {
    border: 1px solid red;
}
</style>
