<template>
        <div id="login-container">
            <!-- alert stuff -->
            <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="danger"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
            >{{message}}
            </b-alert>

            <!-- login form -->
            <b-form @submit.prevent="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1" style="text-align: left">
                    <b-form-input
                            id="input-1"
                            v-model="userCredential.email"
                            type="email"
                            required
                            placeholder="Enter email">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2" style="text-align: left">
                    <b-form-input
                            id="input-2"
                            v-model="userCredential.password"
                            required
                            placeholder="Enter password">
                    </b-form-input>
                </b-form-group>
                <b-button class="btn" type="submit" variant="primary">Login</b-button>
                <b-button class="btn" type="reset" variant="info">Register</b-button>
            </b-form>
        </div>
</template>

<script>
    import login from "../axios/client/login";
    import { mapActions } from 'vuex'

    export default {
        data(){
            return {
                userCredential: {
                    email: '',
                    password: '',
                },
                dismissSecs: 5,
                dismissCountDown: 0,
                showDismissibleAlert: false,
                message: ''
            }
        },
        methods: {
            ...mapActions([
                'initUserDetail'
            ]),
            async onSubmit(){
                const result = await login(this.userCredential);
                if(result.status === "Failed"){
                    this.showAlert('Invalid username or password')
                }else{
                    console.log(result.userDetail);
                    result.userDetail.email = this.userCredential.email;
                    this.initUserDetail(result.userDetail);
                    await this.$router.push('About')
                }
            },
            onReset(){
                this.userCredential.email = '';
                this.userCredential.password = '';
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert(message) {
                this.message = message;
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>

<style scoped>
    .btn{
        margin: 0 10px;
    }
    #login-container{
        margin: auto;
        width: 40%;
    }

</style>


