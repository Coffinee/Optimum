<template>
    <div class="d-flex justify-content-center align-items-center vh-100 vw-100">
        <!-- LOGIN FORM -->
        <div class="d-flex flex-column justify-content-center align-items-center w-50 m-5">
            <div class="login-title">
                <img src="@/assets/Icons/sophia-login.png" alt="sophia-logo">
            </div>
            <form action="" class="w-75">
                <div class="mb-3">
                    <label for="username" class="">USERNAME</label>
                    <input type="text" class="form-control rounded-0 p-2" placeholder="ENTER YOUR USERNAME">
                </div>
                <label for="password" class="form-label">PASSWORD</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control rounded-0 p-2" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <button type="buttono" class="btn btn-warning rounded-0 text-white">SHOW</button>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="remember-me">
                            Remember me
                        </label>
                    </div>
                    <router-link to="#">Forgot your password?</router-link>
                </div>
                <div class="input-group my-5">
                    <input type="text" class="form-control p-2 rounded-0 w-50" placeholder="ENTER CODE HERE">
                    <span class="input-group-text w-50 rounded-0 text-center">d e f o r c e</span>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-warning w-50 rounded-0 text-white p-2">LOGIN</button>
                </div>
            </form>
            
        </div>
        <!-- PARTICLES -->
        <div class="w-50 h-100 bg-warning">
            
        </div>
    </div>
</template>
<script>
</script>
