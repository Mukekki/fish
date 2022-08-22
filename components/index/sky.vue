<template>
    <div class="sky">
        <div class="clouds">
        </div>
    </div>
</template>

<style lang="less">
    .sky {
        height: 30.4em;
        background-image: url(~/assets/images/index/sky.jpg);
        background-size: 146.2em 30.4em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > .clouds {
            height: 23.6em;
            background-image: url(~/assets/images/index/clouds.png);
            background-size: 35em 23.6em;
            background-position: 0%;
            animation: sky 40s linear infinite;
        }
    }

    @keyframes sky {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 100%;
        }
    }

    @media (max-width: 767px) {
        .sky {
            height: 41em;
            background-image: url(~/assets/images/index/sky.jpg);
            background-size: 146.2em 30.4em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            > .clouds {
                height: 23.6em;
                background-image: url(~/assets/images/index/clouds.png);
                background-size: 35em 23.6em;
                background-position: 0%;
                animation: sky 40s linear infinite;
            }
        }

        @keyframes sky {
            0% {
                background-position: 0%;
            }
            100% {
                background-position: 100%;
            }
        }
    }
</style>
