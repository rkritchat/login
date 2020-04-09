export default {
    initUser: (state, { email, firstName, lastName, age }) =>{
        state.userDetail.email = email;
        state.userDetail.firstName = firstName;
        state.userDetail.lastName = lastName;
        state.userDetail.age = age;
    }
}
