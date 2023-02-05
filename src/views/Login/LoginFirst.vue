<template>
<div>
  <div class="form-card ">
    <div class="card-container m-auto mt-4">
      <div class="pt-5 pb-3">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title-form">Login</div>
          <form @submit.prevent="">
            <div class="form-signup ">
              <div class="form-group position-reletive my-5 w-100">
                <label class="control-label" for="FirstName">Email</label>
                <input type="email" class="form-control py-2" id="FirstName" v-model="email" required/>
              </div>
              <div class="form-group position-reletive my-5 w-100">
                <label class="control-label" for="LastName">password</label>
                <input type="text" class="form-control py-2" id="LastName" v-model="password" required/>
              </div>
            </div>
            <div class="error mb-4">
              {{ error ?  error : ""}}
            </div>
            <button
              @click="login"
              Class="around-blue py-2 my-2 fw-bold w-100"
            >
              Login
           </button>
            <div class="change-page mt-5">? Don't you have already an account</div>
            <div  @click="$router.push({ name: 'SignupFirst' })"
              Class="login-link py-2">
              Create Account
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div calass="col-12">
    <img src="assets/img/background.png" class="background"/>
  </div>
</div>
</template>
<script>

import axios from "axios";
import $ from 'jquery';
export default {
  name:'Signup-first',
  data() {
    return{
      email:"",
      password:"",
      error:""
    }
  },
  methods:{
    async login(){
      await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
      .then((response) => {
        if(response.status == 200 && response.data.length > 0){
          localStorage.setItem("user-info",JSON.stringify(response.data[0]));
          this.$router.push({name:"ProfileMain"})
        }
        else{
          this.error = "! Username or password in incorrect"
        }
      })
      .catch((error) => console.log(error));
    }
  },
  mounted(){
    // let users = localStorage.getItem("user-info");
    // if(users){
    //   this.$router.push({name:'ProfileMain'})
    // }

    $('.form-control').on('focus blur change', function (e) {
      var $currEl = $(this);
      if($currEl.is('select')) {
        if($currEl.val() === $("option:first", $currEl).val()) {
          $('.control-label', $currEl.parent()).animate({opacity: 0}, 240);
          $currEl.parent().removeClass('focused');
        } else {
          $('.control-label', $currEl.parent()).css({opacity: 1});
          $currEl.parents('.form-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !==   ("option:first", $currEl).val())));
        }
      } else {
        $currEl.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }
    }).trigger('blur');
  },
  components : {},
}
</script>




