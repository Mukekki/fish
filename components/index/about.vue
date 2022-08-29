<template>
    <div class="about">
        <div class="point" id="about"></div>

        <div class="fish-three"></div>

        <h1>{{ $i18n.get(`About The Game`) }}</h1>
        <h2>{{ $i18n.get(`Meet the first easy-peasy NFT Play to Earn game based on thousands of years human habit - Fishing!`) }}</h2>

        <div class="cards">
            <div class="item" v-for="(item, index) of cards" :key="index">
                <div class="id">
                    #{{ index + 1 }}
                </div>
                <div class="container">
                    <img :src="require(`~/assets/images/index/${item.image}`)" alt="fisher">

                    <div class="text">
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            cards: [
                {
                    image: 'fisher-woman.png',
                    text: `Start with a newbie Fisher avatar (dynamic NFT) or buy an experienced one on the marketplace.`
                },
                {
                    image: 'fish-six.png',
                    text: `Rise your fishing skills by catching and collecting rare NFT Fish(Coins) around the World!`
                },
                {
                    image: 'fisher-woman.png',
                    text: `The grander experience your Fisher achieves, the more unique Fishes (special tradable NFTs) are available!`
                },
                {
                    image: 'fish-six.png',
                    text: `Compete with millions of anglers by participating in regular tournaments around the FP World and winning money prizes!`
                }
            ]
        }
    }
}
</script>

<style lang="less">
    .about {
        margin-top: -30em;
        height: 100em;
        position: relative;

        > .point {
            position: absolute;
            top: -8.2rem;
        }

        > .fish-three {
            background-image: url(~/assets/images/index/fish-three.png);
            position: absolute;
            width: 9.1em;
            height: 3.8em;
            background-size: 100% 100%;
            top: 12.2em;
            right: 7em;
        }

        > h1 {
            font-weight: 700;
            font-size: 5.2em;
            line-height: 7rem;
            color: var(--orange);
            text-align: center;
        }

        > h2 {
            font-weight: 400;
            font-size: 2.8em;
            line-height: 4rem;
            max-width: 87.8rem;
            margin: 3rem auto 0;
            text-align: center;
            color: var(--white);
        }

        > .cards {
            display: flex;
            gap: 2.4em;
            width: 132.8em;
            margin: 3em auto 0;

            > .item {
                position: relative;
                width: 31.4em;
                height: 36em;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: black;
                clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));

                > .id {
                    position: absolute;
                    z-index: 1;
                    top: 2.4rem;
                    left: 2.4rem;
                    font-family: '2P';
                    font-weight: 400;
                    font-size: 1.6em;
                    line-height: 2rem;
                }

                > .container {
                    padding: 2.4em;
                    background-color: #EAC645;
                    width: 30.6em;
                    height: 35.2em;
                    clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    > img {
                        margin-top: 4.5em;
                        width: 14.8em;
                        height: 13.4em;
                    }

                    > .text {
                        margin-top: 3rem;
                        font-family: 'PT Sans';
                        font-weight: 700;
                        font-size: 1.8em;
                        line-height: 2.4rem;
                    }
                }

                &:nth-child(2) {
                    > .container {
                        background-color: #65C97A;

                        > img {
                            transform: scaleX(-1);
                        }
                    }
                }

                &:nth-child(3) {
                    > .container {
                        background-color: #5296D5;

                        > img {
                            transform: scaleX(-1);
                        }
                    }
                }

                &:nth-child(4) {
                    > .container {
                        background-color: #A7E4C5;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .about {
            margin-top: -10em;
            height: 100em;

            > .fish-three {
                width: 4.1em;
                height: 2.8em;
                background-size: 100% 100%;
                top: 13.2em;
                right: 3em;
            }

            > .cards {
                overflow-y: scroll;
                width: auto;
                padding: 0 1.2em;

                > .item {
                    flex-shrink: 0;
                }
            }
        }
    }
</style>
