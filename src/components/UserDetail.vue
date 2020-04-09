<template>
            <div class="container">
                <b-form id="form" @submit="onSubmit" @reset="onReset">
                    <b-form-group
                            id="input-group-1"
                            label="First Name:"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.firstName"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>


                    <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.lastName"
                                required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Last Name:" label-for="input-3">
                        <b-form-input
                                id="input-3"
                                v-model="form.age"
                                required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                form: {
                    firstName:this.getUserDetail().firstName,
                    lastName:this.getUserDetail().lastName,
                    age:this.getUserDetail().age,
                }
            }
        },
        methods: {
            ...mapGetters([
                'getUserDetail'
            ])
        }
    }
</script>


<style scoped>
    .container{
        margin-top: 5rem;
    }
    #form {
        margin: auto;
        width: 40%;
    }
</style>
