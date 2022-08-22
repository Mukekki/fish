<template>
    <div class="home">
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
                {{ $i18n.get(`Play & Earn Fishing game!`) }}
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

            <ui-button>
                {{ $i18n.get(`TRY THE GAME`) }}
            </ui-button>
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

        <index-fisherman />

        <index-tokenomics />

        <index-roadmap />

        <index-marketplace />

        <index-join />

        <ui-bubble-bg />
    </div>
</template>

<script>
export default {}
</script>


<style lang="less">
    .home {
        background: var(--blue);
        position: relative;
        margin-top: 7.2em;
        overflow: hidden;

        > * {
            z-index: 20;

        }

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
            min-height: 130rem;
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
            }

            &::before {
                background-image: url("data:image/svg+xml,%3Csvg width='99' height='20' viewBox='0 0 99 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.89555 18.7698V16.2907H1.4165V13.8117H6.37459V16.2907H13.8117V11.3327H6.37459V8.85363H8.85363V6.37458H11.3327V3.89554H3.89555V1.4165H18.7698V3.89554H16.2908V6.37458H13.8117V8.85363H16.2908V11.3327H18.7698V16.2907H16.2908V18.7698H3.89555Z' fill='%230C243D'/%3E%3Cpath d='M26.2069 18.7698V11.3327H28.686V8.85363H31.165V6.37458H33.644V3.89554H26.2069V6.37458H21.2488V1.4165H38.6021V6.37458H36.1231V8.85363H33.644V11.3327H31.165V18.7698H26.2069Z' fill='%230C243D'/%3E%3Cpath d='M51.9323 19.1239V4.24969H56.1821V16.999H64.6816V19.1239H51.9323Z' fill='%230C243D'/%3E%3Cpath d='M73.1812 19.1239V16.999H71.0563V14.8742H68.9314V12.7493H66.8065V4.24969H71.0563V10.6244H73.1812V12.7493H75.3061V10.6244H77.431V4.24969H81.6808V12.7493H79.5559V14.8742H77.431V16.999H75.3061V19.1239H73.1812Z' fill='%230C243D'/%3E%3Cpath d='M85.9305 19.1239V4.24969H90.1803V16.999H98.6799V19.1239H85.9305Z' fill='%230C243D'/%3E%3Cpath d='M2.47904 17.3533V14.8742H0V12.3952H4.95808V14.8742H12.3952V9.91616H4.95808V7.43712H7.43712V4.95808H9.91616V2.47904H2.47904V0H17.3533V2.47904H14.8742V4.95808H12.3952V7.43712H14.8742V9.91616H17.3533V14.8742H14.8742V17.3533H2.47904Z' fill='%23EFAA14'/%3E%3Cpath d='M24.7904 17.3533V9.91616H27.2695V7.43712H29.7485V4.95808H32.2275V2.47904H24.7904V4.95808H19.8323V0H37.1856V4.95808H34.7066V7.43712H32.2275V9.91616H29.7485V17.3533H24.7904Z' fill='%23EFAA14'/%3E%3Cpath d='M50.5158 17.7074V2.83319H54.7656V15.5825H63.2651V17.7074H50.5158Z' fill='%23EFAA14'/%3E%3Cpath d='M71.7647 17.7074V15.5825H69.6398V13.4577H67.5149V11.3328H65.39V2.83319H69.6398V9.20787H71.7647V11.3328H73.8896V9.20787H76.0145V2.83319H80.2643V11.3328H78.1394V13.4577H76.0145V15.5825H73.8896V17.7074H71.7647Z' fill='%23EFAA14'/%3E%3Cpath d='M84.514 17.7074V2.83319H88.7638V15.5825H97.2634V17.7074H84.514Z' fill='%23EFAA14'/%3E%3C/svg%3E%0A");
                content: '';
                position: absolute;
                top: 0;
                left: 15.7em;
                width: 9.9em;
                height: 1.9em;
                background-size: 9.9em 1.9em;
            }

            > .fish-one {
                background-image: url(~/assets/images/index/fish-one.png);
                position: absolute;
                width: 18.15em;
                height: 8.73em;
                background-size: 18.15em 8.73em;
            }

            > .fish-two {
                background-image: url(~/assets/images/index/fish-two.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 49.2em;
                left: -5em;
            }

            > .fish-three {
                background-image: url(~/assets/images/index/fish-three.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 44.2em;
                left: -47em;
            }

            > .fish-five {
                background-image: url(~/assets/images/index/fish-three.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: 46.2em;
                right: -5em;
            }

            > .fish-six {
                background-image: url(~/assets/images/index/fish-six.png);
                position: absolute;
                width: 8.2em;
                height: 6.6em;
                background-size: 100% 100%;
                bottom: -38.2em;
                right: 5em;
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


    @media (max-width: 767px) {
        .home {
            background: var(--blue);
            position: relative;

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
                min-height: 130rem;

                > ul {
                    margin-top: 35em;
                }

                > .btn {
                    width: 100%;
                    height: 7.2rem;
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
</style>
