<template>
    <div class="home">
        <div class="head-banner">
            <div class="banner">
                <index-sky></index-sky>
                <div class="water">
                    <div class="surf"></div>
                    <div class="sea"></div>
                </div>
            </div>

            <div class="content">
                <h2>
                    {{ $i18n.get(`Welcome to engaging `) }}
                </h2>

                <h1 class="title">
                    {{ $i18n.get(`Play and Earn in Fortune Pike!`) }}
                </h1>

                <ul>
                    <li>
                        {{ $i18n.get(`Catch and sell unique NFT Fish`) }}
                    </li>
                    <li>
                        {{ $i18n.get(`Participate in bountiful tournaments`) }}
                    </li>
                    <li>
                        {{ $i18n.get(`Or become a River Lord with revenue share income!`) }}
                    </li>
                </ul>

                <ui-button href="https://fortunepike.com/">
                    {{ $i18n.get(`TRY THE GAME`) }}
                </ui-button>
            </div>
        </div>

        <ui-icons-light class="light"/>

        <div class="boat">
            <ui-icons-boat class="boat"/>

            <div class="fish-one"></div>
            <div class="fish-two"></div>
            <div class="fish-three"></div>
            <div class="fish-five"></div>
            <div class="fish-six"></div>
        </div>

        <index-about />

        <index-fisherman
        @change-tab="changeTab"
        :type="type"/>

        <index-tokenomics />

        <index-roadmap />

        <index-marketplace />

        <index-join />

        <ui-bubble-bg />
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: 'Fisherman'
        }
    },
    methods: {
        changeTab(string) {
            this.type = string
        }
    }
}
</script>


<style lang="less">
    .home {
        background: var(--blue);
        // position: relative;
        margin-top: 7.2em;
        overflow: hidden;

        > * {
            z-index: 20;

        }

        > .head-banner {
            min-height: 130rem;

            > .banner {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;

                > .water {
                    > .surf {
                        height: 4.25em;
                        background-image: url(~/assets/images/index/water.png);
                        background-size: 36.1em 4.25em;
                        animation: surf 40s linear infinite;
                    }

                    > .sea {
                        margin-top: -0.5em;
                        height: 23em;
                        background: linear-gradient(180deg, #315B66 0%, rgba(12, 37, 62, 0) 100%);
                    }
                }
            }

            > .content {
                position: relative;
                padding: 17.2em 62em 0 5.6em;
                z-index: 20;

                > h2 {
                    font-weight: 400;
                    font-size: 2.8em;
                    line-height: 3.2rem;
                }

                > h1 {
                    font-weight: 700;
                    font-size: 5.2em;
                    line-height: 7rem;
                    white-space: nowrap;
                }

                > ul {
                    margin-top: 6em;
                    color: var(--white);

                    > li {
                        position: relative;
                        font-weight: 400;
                        font-size: 2.4em;
                        line-height: 3.2rem;
                        padding-left: 2.8rem;
                        margin-top: 3.2rem;

                        &::before {
                            top: 0;
                            left: -0.8rem;
                            position: absolute;
                            content: '';
                            height: 2.4rem;
                            width: 2.4rem;
                            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='12' transform='matrix(1 1.74846e-07 1.74846e-07 -1 8 17)' fill='white'/%3E%3Crect width='2' height='9' transform='matrix(1 1.74846e-07 1.74846e-07 -1 10 16)' fill='white'/%3E%3Crect width='2' height='4' transform='matrix(1 1.74846e-07 1.74846e-07 -1 12 13)' fill='white'/%3E%3Crect width='2' height='2' transform='matrix(1 1.74846e-07 1.74846e-07 -1 14 13)' fill='white'/%3E%3Crect width='2' height='2' transform='matrix(1 1.74846e-07 1.74846e-07 -1 12 15)' fill='white'/%3E%3Crect width='2' height='2' transform='matrix(1 1.74846e-07 1.74846e-07 -1 10 17)' fill='white'/%3E%3Crect width='2' height='2' transform='matrix(1 1.74846e-07 1.74846e-07 -1 8 19)' fill='white'/%3E%3C/svg%3E%0A");
                            background-size: 100% 100%;
                        }

                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }

                > .btn {
                    margin-top: 4rem;
                }
            }
        }

        > .light {
            position: absolute;
            width: 119em;
            height: 119em;
            top: 18em;
            left: -41.5em;
            z-index: 0;
        }

        > .boat {
            top: 16.1em;
            right: 9.9em;
            display: block;
            position: absolute;

            > .boat {
                width: 100%;
                height: 100%;
                animation: main-boat 32s linear infinite;
            }

            > .fish-one {
                background-image: url(~/assets/images/index/fish-one.png);
                position: absolute;
                width: 18.15em;
                height: 8.73em;
                background-size: 18.15em 8.73em;
                animation: fish-right 12s linear infinite;
            }

            > .fish-two {
                background-image: url(~/assets/images/index/fish-two.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 49.2em;
                left: -5em;
                animation: fish-left 21s linear infinite;
            }

            > .fish-three {
                background-image: url(~/assets/images/index/fish-three.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 44.2em;
                left: -47em;
                animation: fish-left 17s linear infinite;
            }

            > .fish-five {
                background-image: url(~/assets/images/index/fish-three.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 46.2em;
                right: -5em;
                animation: fish-left 27s linear infinite;
            }

            > .fish-six {
                background-image: url(~/assets/images/index/fish-six.png);
                position: absolute;
                width: 8.2em;
                height: 6.6em;
                background-size: 100% 100%;
                bottom: -38.2em;
                right: 5em;
                animation: fish-left 37s linear infinite;
            }
        }

        &::before {
            z-index: 2;
            font-family: '2P';
            text-transform: uppercase;
            width: 230rem;
            content: 'PLAY GAME * selling * FISH * River lord * rare Fish  * easy-peasy NFT';
            position: absolute;
            top: 86rem;
            left: -19rem;
            transform: rotate(6.19deg);
            font-weight: 800;
            font-size: 2.8em;
            line-height: 100%;
            height: 5.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #A7E4C5;
        }

        &::after {
            z-index: 1;
            font-family: '2P';
            text-transform: uppercase;
            width: 230rem;
            content: 'NFT * FISH * GAME * NFT * FISH * GAME * NFT ASSETS * FISHING * ';
            position: absolute;
            top: 76rem;
            left: -29rem;
            transform: rotate(-6.19deg);
            font-weight: 800;
            font-size: 2.8em;
            line-height: 100%;
            height: 5.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #A7E4C5;
        }
    }

    @keyframes surf {
        0% {
            background-position: 100%;
        }
        100% {
            background-position: 0%;
        }
    }

    @keyframes fish-right {
        0% {
            transform: translateX(300%);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateX(-300%);
            opacity: 0;
        }
    }

    @keyframes fish-left {
        0% {
            transform: translateX(-300%);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateX(300%);
            opacity: 0;
        }
    }


    @media (max-width: 767px) {
        .home {
            background: var(--blue);
            position: relative;

            > .head-banner {

                > .banner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;

                    > .water {
                        > .surf {
                            height: 4.25em;
                            background-image: url(~/assets/images/index/water.png);
                            background-size: 36.1em 4.25em;
                            animation: surf 40s linear infinite;
                        }

                        > .sea {
                            margin-top: -0.5em;
                            height: 23em;
                            background: linear-gradient(180deg, #315B66 0%, rgba(12, 37, 62, 0) 100%);
                        }
                    }
                }

                > svg {
                    display: none;
                }

                > .content {
                    position: relative;
                    padding: 5.5em 1.2em;

                    > h1 {
                        white-space: inherit;
                    }

                    > ul {
                        margin-top: 35em;
                    }

                    > .btn {
                        width: 100%;
                        height: 7.2rem;
                    }
                }
            }

            > .light {
                position: absolute;
                width: 119em;
                height: 119em;
                top: 18em;
                left: -41.5em;
            }

            > .boat {
                top: 33.4em;
                right: 8.9em;
                display: block;
                position: absolute;

                > .boat {
                    transform: scaleX(-1);
                }

                &::before {
                    display: none;
                }

                > .fish-one {
                    background-image: url(~/assets/images/index/fish-one.png);
                    left: 8em;
                    bottom: -2em;
                    transform: scaleX(-1);
                    position: absolute;
                    width: 15em;
                    height: 7.1em;
                    background-size: 100% 100%;
                }

                > .fish-two {
                    display: none;
                }

                > .fish-three {
                    display: none;
                }

                > .fish-five {
                    width: 9.1em;
                    height: 3.8em;
                    top: 20.2em;
                    right: -8em;
                    opacity: 0.6;
                }

                > .fish-six {
                    background-image: url(~/assets/images/index/fish-six.png);
                    position: absolute;
                    width: 4.4em;
                    height: 3.6em;
                    background-size: 100% 100%;
                    top: 26em;
                    right: -5em;
                }
            }

            &::before, &::after {
                display: none;
            }
        }
    }

    @keyframes main-boat {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(3deg);
        }
        50% {
            transform: rotate(0deg);
        }
        75% {
            transform: rotate(-2deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
