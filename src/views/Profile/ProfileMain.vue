<template>
<div >
  <section id="section--1">
    <div>
      <div class="text-center about">about me</div>
      <div class="welcom">WELCOM</div>
      <div class="text-center here">here you can see a simple home page</div>
      <div class="text-center mt-5">
        <button class="learn-more"><a href="#section--2">Learn more</a></button>
      </div>
    </div>
  </section>
  <section id="section--2">
    <div class="col-7 image-container mx-auto pt-5  ">
      <img src="./images/67.png" />
      <img src="./images/12.png" />
    </div>
    <div class="col-9 mx-auto explanation">
        <div class="text-container"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h4 class="fw-bold">Projects</h4>
          <P>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </P>
        </div>
        <div class="text-container"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h4 class="fw-bold">WHAT I DO</h4>
          <P>
            Of course every thing that is related to frontend developing.
            Working with Vue js frame work until now , but i'm learning React js beside that
          </P>
        </div>
        <div class="text-container"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h4 class="fw-bold">WHO I AM</h4>
          <P>
            I am a frontend developer who loves programmig a lot and intrested to work with teams to lean many thing from them and help them in proccess of a project
          </P>
        </div>

    </div>
  </section>
  <section id="section--3">
    <div class="footer">
      <div>
        <img src="./images/man.png" class="contactme-image"/>
      </div>
      <div class="contactme-container px-5 col-lg-5 col-12 mb-5 mb-lg-0">
        <div class="p-5">
          <div class="fw-bold get-touch mb-5">Get In Touch</div>
          <div class="contact-email mb-3">
            <span class="ms-2">CONTACT TO ME</span>
            <img src="./images/email.png" class="mb-1"/>
          </div>
          <div class="email ms-4 mb-5">shakibahormozi81@gmail.com</div>
          <div class="contact-email">
            <a href="https://www.linkedin.com/in/shakibahormozi/" target="_blank">
              <img src="./images/linkedin.png" class="ms-2"/>
            </a>
            <a href="https://github.com/shakibahormozi" target="_blank">
              <img src="./images/github.png" class="me-2"/>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>

<!-- <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-2dcf"><div class="u-clearfix u-sheet u-sheet-1">
    <p class="u-small-text u-text u-text-variant u-text-1">Designed by shakiba.</p>
  </div></footer> -->
</div>
</template>
<script>




export default {
  name: "profile-page",
  data() {
    return {

    }
  },
  methods:{

  },
  components: {},

};
</script>
