<style scoped>
    .signup-card{
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 100%;
    }

    .container{
        margin: 50px auto;
        padding: 0;
        text-align: center;
        width: 80%;
    }

    p{
        height: 24px;
        text-align: left;
        margin: 5px 0 25px 0;
        color: #2196f3;
        font-size: 24px;
        font-weight: bold;
    }

    input:not(.signup-button){
        padding-left: 16px;
        height: 48px;
        width: 100%;
        margin: 5px 0;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 16px -5px rgba(59,51,59,1);
        -moz-box-shadow: 0 1px 16px -5px rgba(59,51,59,1);
        box-shadow: 0 1px 16px -5px rgba(59,51,59,1);
    }

    .signup-button{
        background-color: #2196f3;
        color: white;
        width: 100%;
        height: 48px;
        border-radius: 4px;
        margin: 15px 0;
    }
</style>

<template>
    <div class="signup-card">
        <div class="container">
            <p style="">Student Sign Up</p>
            <form action="">
                <input type="text" placeholder="First Name" required>
                <input type="text" placeholder="Last Name" required>
                <input type="text" placeholder="Email Address" required>
                <input type="password" placeholder="Password" required>
                <input type="submit" value="Sign Up" class="signup-button" >
            </form>
        </div>
    </div>
</template>