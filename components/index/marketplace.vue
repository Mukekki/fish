<template>
    <div class="marketplace" id="about">
        <div class="fish-three"></div>
        <ui-icons-light class="light"/>

        <h1>{{ $i18n.get(`Marketplace`) }}</h1>
        <h2>{{ $i18n.get(`Fortune Pike will allow you to sell NFT assets internally on local market and externally on any marketplace you wish.`) }}</h2>

        <div class="cards">
            <div class="container" v-for="(item, index) of cards" :key="index">
                <div class="item">
                    <div class="id">
                        {{ item.lvl }}
                    </div>
                    <div class="container">
                        <img :src="require(`~/assets/images/index/${item.image}`)" alt="fisher">

                        <div class="text">
                            <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.3818L9.99994 0V22.3168L0 16.3818ZM20 16.382L10.0001 0V22.3169L20 16.382ZM0.0390625 18.4962L9.8764 24.2685L19.795 18.4556L9.8764 32.3986L0.0390625 18.4962Z" fill="black"/>
                            </svg>

                            {{ item.text }}
                        </div>
                    </div>
                </div>

                <div class="description">
                    {{ item.description }}
                </div>
            </div>
        </div>

        <h1 class="-second">{{ $i18n.get(`Media`) }}</h1>


        <div class="cards">
            <div class="container -mono" v-for="(item, i) of secondCards" :key="i">
                <div class="item">
                    <div class="container">
                        <div class="text">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'marketplace',
    data() {
        return {
            cards: [
                {
                    lvl: '40 lvl',
                    image: 'fisher-woman.png',
                    text: `1 ETH`,
                    description: 'Fisher 5211'
                },
                {
                    lvl: '40 lvl',
                    image: 'fish-six.png',
                    text: `1 ETH`,
                    description: 'Boat'
                },
                {
                    lvl: '40 lvl',
                    image: 'fisher-woman.png',
                    text: `1 ETH`,
                    description: 'Rare fish'
                },
                {
                    lvl: '40 lvl',
                    image: 'fish-six.png',
                    text: `1 ETH`,
                    description: 'Nike'
                }
            ],
            secondCards: [
                this.$i18n.get(`Fortune Pike NFT real utility of web 3.0 approach are here to usher in the next generation of NFTs!`),
                this.$i18n.get(`The growth of the NFT industry will occur precisely due to the implementation of NFT technologyin Business`),
                this.$i18n.get(`One of the most successful and steadily growing blockchain projects in entertainment sector`),
                this.$i18n.get(`Play & Earn: the Best GameFi Tokens that are Worth to Know`)
            ]
        }
    }
}
</script>

<style lang="less">
    .marketplace {
        position: relative;
        padding-top: 10em;
        background-color: #07182A;

        > .light {
            position: absolute;
            width: 119em;
            height: 119em;
            top: -25em;
            right: -41.5em;
            z-index: -1;
            transform: scaleX(-1);
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

            &.-second {
                margin-top: 15rem;
            }
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

            > .container {
                position: relative;

                > .item {
                    position: relative;
                    width: 31.4em;
                    height: 28.5em;
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
                        background: #65C97A;
                        width: 30.6em;
                        height: 28.1em;
                        clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;


                        > img {
                            margin-top: 4.5em;
                            width: 14.8em;
                            height: 13.4em;
                        }

                        > .text {
                            margin-top: 3rem;
                            font-family: '2P';
                            font-weight: 400;
                            font-size: 2.4em;
                            line-height: 3.2rem;
                            align-self: flex-start;
                        }
                    }
                }

                > .description {
                    text-align: center;
                    margin-top: 1.2rem;
                    z-index: 10000;
                    font-weight: 700;
                    font-size: 2.4em;
                    line-height: 3.2rem;
                    color: var(--white);
                    position: relative;
                    left: 0;
                    right: 0;
                }

                &.-mono {
                    > .item {
                        background: var(--white);
                        height: 16em;

                        > .container {
                            background: #0C2A47 !important;
                            height: calc( 16em - 0.4em );
                            justify-content: center;

                            > .text {
                                margin-top: 0;
                                font-family: 'PT Sans';
                                font-weight: 700;
                                font-size: 1.8rem;
                                line-height: 2.4rem;
                                color: var(--white);
                            }
                        }
                    }
                }

                &:nth-child(2) {
                    > .item {
                        > .container {
                            background-color: #EAC645;

                            > img {
                                transform: scaleX(-1);
                            }
                        }
                    }
                }

                &:nth-child(3) {
                    > .item {
                        > .container {
                            background-color: #5197D5;

                            > img {
                                transform: scaleX(-1);
                            }
                        }
                    }
                }

                &:nth-child(4) {
                    > .item {
                        > .container {
                            background-color: #65C97A;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .marketplace {
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
