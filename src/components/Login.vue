<template>
    <div>
        <b-container class="mt-5">
                <div class="field">
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
                                    v-model="userDetail.email"
                                    type="email"
                                    required
                                    placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Password:" label-for="input-2" style="text-align: left">
                            <b-form-input
                                    id="input-2"
                                    v-model="userDetail.password"
                                    required
                                    placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <b-button class="btn" type="submit" variant="primary">Login</b-button>
                        <b-button class="btn" type="reset" variant="info">Register</b-button>
                    </b-form>
                </div>
        </b-container>
    </div>
</template>

<script>
    import login from "../axios/client/login";

    export default {
        data(){
            return {
                userDetail: {
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
            async onSubmit(){
                const result = await login(this.userDetail);
                if(result.status === "Failed"){
                    this.showAlert('Invalid username or password')
                }else{
                    await this.$router.push('About')
                }
            },
            onReset(){
                this.userDetail.email = '';
                this.userDetail.password = '';
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
    .field {
        margin: 0 300px;
    }
</style>


