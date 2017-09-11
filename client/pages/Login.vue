<style>
.main-cont-small {
    text-align: center;
}
#login {
    height: 360px;
}
#forgot-password,
#ask-sign-up {
    padding-top: 20px;
    margin-bottom: 0;
    color: #ef5350;
}
#error-msg {
    padding: 6px 8px;
    border-radius: 2px;
    display: inline-block;
    margin: 16px auto 0 auto;
    left: 0;
    right: 0;
    color: #fff;
    background-color: #ffa726;
}
@media (max-width: 544px) {
    #login {
        height: auto;
    }
}
</style>
<template>
  <v-container fluid>
    <div class="main-cont-small">

            <form method="post">

                <section id="login">
                    <div class="general-input">
                        <input id="email" type="email" name="email" placeholder="Email" value="">
                    </div>
                    <div class="general-input">
                        <input id="password" type="password" name="pwd" placeholder="Password">
                    </div>
                    <a href="https://www.kunvet.com/user/signup">
                        <p id="ask-sign-up">New user? Sign up <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                    </a>
                    <a href="https://www.kunvet.com/user/forgot_password">
                        <p id="forgot-password">Forgot your password?</p>
                    </a>

                    <!-- messages -->

                </section>

                <!-- submit button -->

                <input class="hidden-input" id="submit" type="submit" value="Login">
                <div id="general-submit">
                    <div id="general-submit-default">
                        <span>LOGIN</span>
                    </div>
                    <div id="general-submit-error">
                        <span id="general-submit-error-msg"></span>
                    </div>
                </div>
            </form>
        </div>
  </v-container>
</template>
<script>
</script>
