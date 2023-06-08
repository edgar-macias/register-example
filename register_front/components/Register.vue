<template>
  <b-container>
    <b-row class="vh-100 text-center" align-v="center">
      <b-col>
        <b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="showForm">
          <b-form-group
            id="name"
            label="Name"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              placeholder="Name"
              autocomplete="given-name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="last_name"
            label="Last Name"
            label-for="last_name"
          >
            <b-form-input
              id="last_name"
              v-model="form.last_name"
              placeholder="Last Name"
              autocomplete="family-name"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="email"
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="phone_number"
            label="Phone Number"
            label-for="phone_number"
          >
            <b-form-input
              id="phone_number"
              v-model="form.phone_number"
              type="tel"
              placeholder="Phone number"
              required
            />
          </b-form-group>
          <b-form-group
            id="password"
            label="Password"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              autocomplete="off"
              required
            />
          </b-form-group>
          <b-form-group
            id="c_password"
            label="Confirm Password"
            label-for="c_password"
          >
            <b-form-input
              id="c_password"
              v-model="form.c_password"
              type="password"
              placeholder="Confirm Password"
              autocomplete="off"
              required
            />
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {validateFormData,sendForm} from "~/service/register_service";

export default {
  name: "Register",
  data(){
    return {
      form:{
        name:"",
        last_name:"",
        email:"",
        phone_number:"",
        password:"",
        c_password:""
      },
      showForm: true
    }
  },
  methods:{
    handleSubmit: async function(){
          const validateValue = validateFormData(this.form.name,
            this.form.email,
            this.form.phone_number,
            this.form.password,
            this.form.c_password,
            this.form.last_name);

          if(typeof validateValue === 'boolean' && validateValue){

            const responseText = await sendForm(this.form);
            alert(responseText);

          } else {
            alert(validateValue);
          }
    },
    onReset: function(event){
      event.preventDefault();
      this.form.name = "";
      this.form.last_name = "";
      this.form.email = "";
      this.form.phone_number = "";
      this.form.password = "";
      this.form.c_password = "";


      this.showForm = false
      this.$nextTick(() => {
        this.showForm = true
      })
    }
  }
}
</script>
