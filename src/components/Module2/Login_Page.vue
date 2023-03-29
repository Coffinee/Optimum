<template>
    <div class="d-flex justify-content-center align-items-center vh-100 vw-100 border border-5 border-danger">
        <!-- LOGIN FORM -->
        <div class="d-flex flex-column justify-content-center align-items-center w-50 m-5">
            <div class="d-flex justify-content-center w-75">
                <img class="w-75 h-auto" src="@/assets/Icons/sophia-login.png" alt="sophia-logo">
            </div>
            <form action="" class="w-75">
                <div class="mb-3">
                    <label for="username" class="">USERNAME</label>
                    <input type="text" class="form-control rounded-0 p-2" placeholder="ENTER YOUR USERNAME">
                </div>
                <label for="password" class="form-label">PASSWORD</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control rounded-0 p-2" placeholder="ENTER YOUR PASSWORD" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <button type="buttono" class="btn btn-warning rounded-0 text-white">SHOW</button>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label class="form-check-label text-primary" for="remember-me">
                            Remember me
                        </label>
                    </div>
                    <router-link to="#">Forgot your password?</router-link>
                </div>
                <div class="input-group my-5">
                    <input type="text" class="form-control rounded-0 p-2"  placeholder="ENTER YOUR CODE">
                    <span class="input-group-text rounded-0 w-50"></span>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-warning w-50 rounded-0 text-white p-2 fs-">LOGIN</button>
                </div>
                <div class="d-flex justify-content-center align-items-end h-25">
                    <img class="w-25 h-25" src="@/assets/Icons/all-cash.png" alt="all-cash-logo">
                </div>
            </form>
            
        </div>
        <!-- PARTICLES -->
        <div class="w-50 h-100 bg-warning">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, obcaecati est voluptates eum voluptatum sequi, soluta aliquam culpa reprehenderit sapiente quae ea molestias consequuntur alias quis commodi dolores, quidem qui. Porro eum facilis perspiciatis, nemo excepturi iste, dicta neque esse dolorem ut mollitia dolor. Eius, architecto provident? Molestias autem maxime eum aut. Dolorem eaque numquam eum expedita eius, esse dolorum deleniti molestias voluptatum, officia rem nisi, alias porro. Saepe doloremque repudiandae esse tenetur vitae doloribus quia, similique ut placeat iusto sed ea delectus reiciendis, cupiditate nostrum quibusdam asperiores consequatur? Accusantium, sequi iste veritatis quia molestias itaque hic. Consequatur, exercitationem minima!
        </div>
    </div>
</template>
<script>
</script>
