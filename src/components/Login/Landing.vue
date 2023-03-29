<template>
   <div class=" d-flex justify-content-center align-items-center flex-column vh-100 vw-100 ">
    <div class="d-flex flex-column justify-content-center align-items-center text-center h-75">  
      <h1 class="">Hi</h1>
      <p class="">Welcome To</p>
      <img src="@/assets/Icons/Sophia-Logo.png" alt="SophiaLogo" class="h-auto w-auto">
    </div>

    <div class="d-flex justify-content-between align-items-end vw-100 h-25">
      <div class="h-10 w-10">
        <router-link to="/">Remittance Inquiry</router-link>
      </div>
      <div class=" text-center">
        <p class=" mb-0">Powered by</p>
        <img src="@/assets/Icons/AllCash-Logo.png" alt="AllCashLogo" class="h-auto w-auto">
      </div>
      <div class="h-10 w-10">
        <router-link to="/">Login Now <i class="bi bi-arrow-right-circle"></i></router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',

}
</script>