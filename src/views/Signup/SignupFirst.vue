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
          <div class="title-form">Create Account</div>
          <form @submit.prevent="">
            <div class="form-signup mb-4">
              <div class="form-group position-reletive mt-5 w-100">
                <label class="control-label" for="FirstName">First Name</label>
                <input required type="text" class="form-control py-2" id="FirstName"  v-model="firstName"/>
              </div>
              <div class="form-group position-reletive mt-5 w-100">
                <label class="control-label" for="LastName">Last Name</label>
                <input type="text" class="form-control py-2" id="LastName" required v-model="lastName"/>
              </div>
              <div class="form-group position-reletive mt-5 w-100">
                <label class="control-label" for="Email">Email</label>
                <input type="email" class="form-control py-2" id="Email" required v-model="email"/>
              </div>
              <div class="form-group position-reletive mt-5 w-100">
                <label class="control-label" for="password">password</label>
                <input type="password" class="form-control py-2" id="password" required v-model="password"/>
              </div>
            </div>
            <div class="error">
              {{ errorEmail ?  errorEmail : ""}}
            </div>
            <button
              @click="nextStep"
              Class="w-100 around-blue py-2 my-2 fw-bold"
            >
              Register
            </button>

            <div class="change-page mt-3">? Do you already have an account</div>
            <div @click="$router.push({ name: 'login' })"
              Class="login-link py-2 fw-bold">
              Login
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!--REGISTER MODAL-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body position-reletive mx-auto my-3">
          <div class="position-reletive text-center fw-bold">
            <div class="mb-2">ثبت نام شما با موفقیت به اتمام رسید</div>
            <div class="text-green mb-4">به خانواده بزرگ هلال خوش آمدین</div>
            <div class="f-16 my-5">
              هلالی عزیز با استفاده از کد ملی و شماره همراه به حساب کاربری خود
              وارد شده و با <span Class="text-red">تکمیل پروفایل </span> ضمن
              کسب امتیاز ، از خدمات مربوطه برخوردار شوید
            </div>
            <router-link to="/ProfileMain">
              <div class="around-red w-50 py-1 mx-auto fw-bold">ورود</div>
            </router-link>
          </div>
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

import $ from 'jquery';
import axios from "axios";


export default {
  name: "Signup-first",
  data() {
    return {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      errorEmail:"",
    }
  },
  methods:{
    async nextStep(){
      let result = await axios.get("http://localhost:3000/user");
      let resultArr = result.data.filter(obj => obj.email == this.email);
      if(resultArr.length > 0 || this.email === ""){
        this.errorEmail = "!Check your email"
      }
      else{
        axios.post("http://localhost:3000/user",{
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          password:this.password
        })
        .then((response) => {
          if(response.status == 201){
           this.$router.push({name:'ProfileMain'})
            localStorage.setItem("user-info",JSON.stringify(response.data));
          }
        })
        .catch((error) => console.log(error));
      }
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
          $currEl.parents('.form-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !== $  ("option:first", $currEl).val())));
        }
      } else {
        $currEl.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }
    }).trigger('blur');
  },
  components: {},

};
</script>
