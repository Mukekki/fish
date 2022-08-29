<template>
    <div>
        <div class="f-bubble-bg">
            <div v-for="item of 30" :key="item"><span class="dot"></span></div>
        </div>
        <div class="f-bubble-bg -scale">
            <div v-for="item of 30" :key="item"><span class="dot"></span></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .f-bubble-bg {
        z-index: 0 !important;
        position: absolute;
        top: 40em;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: hidden;

        &.-scale {
            transform: scaleX(-0.7) scaleY(0.8);
        }
    }

    .f-bubble-bg div {
        height: 2em;
        width: 2em;
        border: 1px solid #2B6180;
        border-radius: 50px;
        position: absolute;
        top: 10%;
        left: 10%;
        animation: 4s linear infinite;
        user-select: none;
        background: radial-gradient(#849CAE, #295E7D);
        opacity: 0.7;
    }

    div .dot {
        height: 0.5em;
        width: 0.5em;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 20%;
        right: 20%;
    }
    .f-bubble-bg div:nth-child(1) {
        top: 20%;
        left: 20%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(2) {
        top: 60%;
        left: 80%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(3) {
        top: 40%;
        left: 40%;
        animation: animate 3s linear infinite;
    }
    .f-bubble-bg div:nth-child(4) {
        top: 66%;
        left: 30%;
        animation: animate 7s linear infinite;
    }
    .f-bubble-bg div:nth-child(5) {
        top: 90%;
        left: 10%;
        animation: animate 9s linear infinite;
    }
    .f-bubble-bg div:nth-child(6) {
        top: 30%;
        left: 60%;
        animation: animate 5s linear infinite;
    }
    .f-bubble-bg div:nth-child(7) {
        top: 70%;
        left: 20%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(8) {
        top: 75%;
        left: 60%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(9) {
        top: 50%;
        left: 50%;
        animation: animate 6s linear infinite;
    }
    .f-bubble-bg div:nth-child(10) {
        top: 45%;
        left: 20%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(11) {
        top: 10%;
        left: 90%;
        animation: animate 9s linear infinite;
    }
    .f-bubble-bg div:nth-child(12) {
        top: 20%;
        left: 70%;
        animation: animate 7s linear infinite;
    }
    .f-bubble-bg div:nth-child(13) {
        top: 20%;
        left: 20%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(14) {
        top: 60%;
        left: 5%;
        animation: animate 6s linear infinite;
    }
    .f-bubble-bg div:nth-child(15) {
        top: 90%;
        left: 80%;
        animation: animate 9s linear infinite;
    }

    .f-bubble-bg div:nth-child(16) {
        top: 23%;
        left: 29%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(17) {
        top: 63%;
        left: 89%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(18) {
        top: 41%;
        left: 49%;
        animation: animate 3s linear infinite;
    }
    .f-bubble-bg div:nth-child(19) {
        top: 69%;
        left: 31%;
        animation: animate 7s linear infinite;
    }
    .f-bubble-bg div:nth-child(20) {
        top: 19%;
        left: 90%;
        animation: animate 9s linear infinite;
    }
    .f-bubble-bg div:nth-child(21) {
        top: 39%;
        left: 10%;
        animation: animate 5s linear infinite;
    }
    .f-bubble-bg div:nth-child(22) {
        top: 23%;
        left: 20%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(23) {
        top: 15%;
        left: 69%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(24) {
        top: 50%;
        left: 50%;
        animation: animate 6s linear infinite;
    }
    .f-bubble-bg div:nth-child(25) {
        top: 45%;
        left: 20%;
        animation: animate 10s linear infinite;
    }
    .f-bubble-bg div:nth-child(26) {
        top: 10%;
        left: 90%;
        animation: animate 9s linear infinite;
    }
    .f-bubble-bg div:nth-child(27) {
        top: 20%;
        left: 70%;
        animation: animate 7s linear infinite;
    }
    .f-bubble-bg div:nth-child(28) {
        top: 20%;
        left: 20%;
        animation: animate 8s linear infinite;
    }
    .f-bubble-bg div:nth-child(29) {
        top: 60%;
        left: 5%;
        animation: animate 19s linear infinite;
    }
    .f-bubble-bg div:nth-child(30) {
        top: 11%;
        left: 89%;
        animation: animate 9s linear infinite;
    }

    @keyframes animate {
        0% {
            transform: scale(0) translateY(0) rotate(70deg);
        }
        100% {
            transform: scale(1.3) translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }

</style>
