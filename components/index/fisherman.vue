<template>
    <div class="fisherman" id="fisher">
        <ui-icons-light class="light"/>

        <div class="container">
            <div class="text">
                <h1>
                    {{ $i18n.get(`Fisherman `) }}
                </h1>

                <h3>
                    {{ $i18n.get(`Are You a regular player interested in collecting rare Fish (Coins) and selling them on the market for a booming price`) }}
                </h3>

                <ui-button>
                    {{ $i18n.get(`TRY THE GAME`) }}
                </ui-button>
            </div>

            <div class="fisherman-image">
                <template>
                    <a v-if="fisher === 'left'" class="left">
                        <svg class="left"  width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 3)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 6)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 9)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 12)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 15)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 18)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 21)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 24)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 27)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 30)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 33)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 21 0)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 21 36)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 18 3)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 18 33)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 15 6)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 15 30)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 12 9)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 12 27)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 9 12)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 9 24)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 6 15)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 6 21)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 3 18)" fill="#EFAA14" fill-opacity="0.5"/>
                        </svg>
                    </a>
                    <a v-else @click="fisher = 'left'" class="left">
                        <svg style="transform: scaleX(-1);" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="3" width="3" height="3" fill="#EFAA14"/>
                            <rect y="6" width="3" height="3" fill="#EFAA14"/>
                            <rect y="9" width="3" height="3" fill="#EFAA14"/>
                            <rect y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect y="27" width="3" height="3" fill="#EFAA14"/>
                            <rect y="30" width="3" height="3" fill="#EFAA14"/>
                            <rect y="33" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="3" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="6" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="9" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="27" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="33" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="36" width="3" height="3" fill="#EFAA14"/>
                            <rect x="3" y="30" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="3" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="6" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="9" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="27" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="33" width="3" height="3" fill="#EFAA14"/>
                            <rect x="6" y="30" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="6" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="9" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="27" width="3" height="3" fill="#EFAA14"/>
                            <rect x="9" y="30" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="9" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect x="12" y="27" width="3" height="3" fill="#EFAA14"/>
                            <rect x="15" y="12" width="3" height="3" fill="#EFAA14"/>
                            <rect x="15" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="15" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="15" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="15" y="24" width="3" height="3" fill="#EFAA14"/>
                            <rect x="18" y="15" width="3" height="3" fill="#EFAA14"/>
                            <rect x="18" y="18" width="3" height="3" fill="#EFAA14"/>
                            <rect x="18" y="21" width="3" height="3" fill="#EFAA14"/>
                            <rect x="21" y="18" width="3" height="3" fill="#EFAA14"/>
                        </svg>
                    </a>

                </template>

                <img :src="require(`~/assets/images/index/fisherman.png`)" alt="fisherman">

                <template>
                    <a v-if="fisher === 'right'" class="right">
                        <svg style="transform: scaleX(-1);" class="right" width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 3)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 6)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 9)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 12)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 15)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 18)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 21)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 24)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 27)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 30)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 24 33)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 21 0)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 21 36)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 18 3)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 18 33)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 15 6)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 15 30)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 12 9)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 12 27)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 9 12)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 9 24)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 6 15)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 6 21)" fill="#EFAA14" fill-opacity="0.5"/>
                            <rect width="3" height="3" transform="matrix(-1 0 0 1 3 18)" fill="#EFAA14" fill-opacity="0.5"/>
                        </svg>
                    </a>
                    <a v-else @click="fisher = 'right'" class="right">
                        <svg width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="3" width="3" height="3" fill="#EFAA14"/>
<rect y="6" width="3" height="3" fill="#EFAA14"/>
<rect y="9" width="3" height="3" fill="#EFAA14"/>
<rect y="12" width="3" height="3" fill="#EFAA14"/>
<rect y="15" width="3" height="3" fill="#EFAA14"/>
<rect y="18" width="3" height="3" fill="#EFAA14"/>
<rect y="21" width="3" height="3" fill="#EFAA14"/>
<rect y="24" width="3" height="3" fill="#EFAA14"/>
<rect y="27" width="3" height="3" fill="#EFAA14"/>
<rect y="30" width="3" height="3" fill="#EFAA14"/>
<rect y="33" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="3" width="3" height="3" fill="#EFAA14"/>
<rect x="3" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="6" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="9" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="12" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="24" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="27" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="33" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="36" width="3" height="3" fill="#EFAA14"/>
<rect x="3" y="30" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="3" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="6" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="9" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="12" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="24" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="27" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="33" width="3" height="3" fill="#EFAA14"/>
<rect x="6" y="30" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="6" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="9" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="12" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="24" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="27" width="3" height="3" fill="#EFAA14"/>
<rect x="9" y="30" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="9" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="12" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="24" width="3" height="3" fill="#EFAA14"/>
<rect x="12" y="27" width="3" height="3" fill="#EFAA14"/>
<rect x="15" y="12" width="3" height="3" fill="#EFAA14"/>
<rect x="15" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="15" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="15" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="15" y="24" width="3" height="3" fill="#EFAA14"/>
<rect x="18" y="15" width="3" height="3" fill="#EFAA14"/>
<rect x="18" y="18" width="3" height="3" fill="#EFAA14"/>
<rect x="18" y="21" width="3" height="3" fill="#EFAA14"/>
<rect x="21" y="18" width="3" height="3" fill="#EFAA14"/>
                        </svg>
                    </a>
                </template>
            </div>
        </div>

        <div class="banner">
            <div class="container">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9062 14.9631H28.9553V18.6503H46.7736V14.9631H50.8227V18.6503L55.6797 18.6503H59.9987H60V22.3374H59.9987V30.9408H55.6797V22.3374H20.319V30.9408H16V22.3374V18.6503H20.319H24.9062V14.9631ZM50.8225 26.0246V22.3375H46.7734V26.0246H50.8225ZM24.9062 22.3375H28.9553V26.0247H24.9062V22.3375ZM20.319 55.2759H55.6797V34.6279L20.3203 34.6279V30.9408H55.6823V34.6279L59.9987 34.6279V55.2759H60V58.9631H16V58.9631V55.2759V34.6279H20.319V55.2759Z" fill="#5296D5"/>
                </svg>

                <div class="text">
                    <h2>
                        {{ $i18n.get(`Striking mystery-box auction `) }}
                    </h2>

                    <h3>
                        {{ $i18n.get(`In October 2022, a striking mystery-box auction with unique NFT avatars will take place! These avatars will give a bunch of benefits to their holders during the main gameplay.`) }}
                    </h3>
                </div>

                <ui-button type="border">
                    {{ $i18n.get(`GET WHITELISTED`) }}
                </ui-button>
            </div>
        </div>

        <div class="fish-two"></div>
        <div class="fish-three"></div>
        <div class="fish-five"></div>
    </div>
</template>

<script>
export default {
    name: 'fisherman',
    data() {
        return {
            fisher: 'left'
        }
    }
}
</script>

<style lang="less">
    .fisherman {
        margin-top: -31em;
        position: relative;

        > .light {
            position: absolute;
            width: 119em;
            height: 119em;
            top: -58em;
            right: -41.5em;
            z-index: -1;
            transform: scaleX(-1);
        }

        > .container {
            width: var(--container-width);
            margin: 0 auto;
            display: flex;
            gap: 13em;

            > .text {
                color: var(--white);

                > h1 {
                    font-family: 'Neue Machina';
                    font-weight: 700;
                    font-size: 4.4em;
                    line-height: 6rem;
                }

                > h3 {
                    margin-top: 3rem;
                    font-family: 'PT Sans';
                    font-weight: 400;
                    font-size: 2.8em;
                    line-height: 4rem;
                    max-width: 67.6rem;
                }

                > .btn {
                    margin-top: 6rem;
                }
            }

            > .fisherman-image {
                position: relative;

                > .left {
                    position: absolute;
                    bottom: 2em;
                    left: 1.5em;

                    > svg {
                        height: 4em;
                    }
                }

                > .right {
                    position: absolute;
                    bottom: 2em;
                    right: -5em;

                    > svg {
                        height: 4em;
                    }
                }

                > img {
                    width: 20.8em;
                    height: 34.4em;
                }
            }
        }

        > .banner {
            margin: 5em auto 0 auto;
            position: relative;
            width: var(--container-width);
            height: 19.2em;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--white);
            clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));

            > .container {
                padding: 2.4em;
                background-color: #0C2A47;
                width: calc(var(--container-width) - 0.4em);
                height: 18.8em;
                clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                display: flex;
                align-items: center;
                gap: 4rem;

                > svg {
                    flex-shrink: 0;
                    align-self: center;
                    width: 8em;
                    height: 8em;
                    margin-right: -1.5rem;
                }

                > .text {
                    color: var(--white);
                    max-width: 67.5em;
                    > h2 {
                        font-weight: 400;
                        font-size: 2.8em;
                        line-height: 4rem;
                    }

                    > h3 {
                        margin-top: 1.5rem;
                        font-weight: 400;
                        font-size: 1.8em;
                        line-height: 2.4rem;
                    }
                }

                > .btn {
                    align-self: flex-end;
                    padding: 2.5rem;
                    width: 24.5rem;
                    flex-shrink: 1;
                    font-weight: 700;
                    font-size: 1.8em;
                    line-height: 2rem;
                    white-space: nowrap;
                }
            }
        }

        > .fish-one {
            background-image: url(~/assets/images/index/fish-one.png);
            position: absolute;
            width: 18.15em;
            height: 8.73em;
            background-size: 18.15em 8.73em;
        }

        > .fish-two {
            background-image: url(~/assets/images/index/fish-three.png);
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
            top: 15.2em;
            left: 4em;
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

    @media (max-width: 767px) {
        .fisherman {
            margin-top: -16em;
            padding: 0 1.2em;

            > .light {
                display: none;
            }

            > .container {
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 13em;

                > .text {
                    color: var(--white);
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    > h1 {
                        text-align: center;
                    }

                    > h3 {
                        margin-top: 42.6rem;
                        text-align: center;
                    }
                }

                > .fisherman-image {
                    position: absolute;
                    top: 9.2em;
                    left: 5.5em
                }
            }

            > .banner {
                width: 100%;
                height: 44em;

                > .container {
                    flex-direction: column;
                    height: 43.6em;
                    gap: 0;
                    padding: 2.2rem;

                    > svg {
                        flex-shrink: 0;
                        align-self: center;
                        width: 5.5em;
                        height: 5.5em;
                        margin: 0;
                    }

                    > .text {
                        color: var(--white);
                        max-width: 100%;

                        > h2 {
                            text-align: center;
                            font-size: 2.7rem;
                        }

                        > h3 {
                            text-align: center;
                            font-size: 1.42em;
                        }
                    }

                    > .btn {
                        margin-top: 2.4rem;
                        align-self: stretch;
                        width: 100%;
                    }
                }
            }

            > .fish-one {
                display: none;
            }

            > .fish-two {
                top: inherit;
                left: 20rem;
                right: inherit;
                bottom: -7em;
                width: 6.5rem;
                height: 3.5rem;
            }

            > .fish-three {
                background-image: url(~/assets/images/index/fish-three.png);
                position: absolute;
                width: 9.1em;
                height: 3.8em;
                background-size: 100% 100%;
                top: -6em;
                left: 2em;
            }

            > .fish-five {
                display: none;
            }

            > .fish-six {
                display: none;
            }
        }
    }
</style>

