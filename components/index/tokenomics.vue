<template>
    <div class="tokenomics">
        <div class="point" id="tokenomics"></div>

        <h2>
            {{ $i18n.get(`Tokenomics`) }}
        </h2>

        <h3>
            {{ $i18n.get(`The core economics of this Fortune Pike game is based on redistribution of Game's income between Fishermen.`) }}
        </h3>

        <div class="cards">
            <div class="item" v-for="(item, index) of cards" :key="index">
                <div class="container">
                    <div class="id">
                        #{{ index + 1 }}
                    </div>

                    <div class="text">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="buttons">
            <ui-button>
                {{ $i18n.get(`Learn more`) }}
            </ui-button>

            <ui-button type="blue">
                {{ $i18n.get(`Distribution`) }}
            </ui-button>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'tokenomics',
    data() {
        return {
            cards: [
                this.$i18n.get('BaitCoins packs'),
                this.$i18n.get('Equipment'),
                this.$i18n.get('Flight tickets to paricipate'),
                this.$i18n.get('Soecial NFT artefacts'),
                this.$i18n.get('Share in sponsorship contracts'),
                this.$i18n.get('Tournament Passes')
            ]
        }
    }
}
</script>

<style lang="less">
    .tokenomics {
        margin-top: 12em;
        position: relative;

        > .point {
            position: absolute;
            top: -9.2rem;
        }

        > h2 {
            font-weight: 700;
            font-size: 5.2em;
            line-height: 7rem;
            text-align: center;
            color: var(--orange);
        }

        > h3 {
            margin-top: 3rem;
            font-weight: 400;
            font-size: 2.8em;
            line-height: 4rem;
            max-width: var(--container-width);
            color: var(--white);
            margin: 0 auto;
            text-align: center;
        }

        .cards {
            display: flex;
            gap: 2.3em;
            width: 132.8em;
            margin: 0 auto;
            flex-wrap: wrap;
            margin-top: 6em;

            > .item {
                flex-shrink: 0;
                width: 42.7em;
                height: 14em;
                background-color: var(--white);
                display: flex;
                align-items: center;
                justify-content: center;
                clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));

                > .container {
                    padding: 2.4em;
                    background: #0C2A47;
                    width: 42.3rem;
                    height: 13.6em;
                    clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                    display: flex;
                    flex-direction: column;

                    > .id {
                        font-weight: 400;
                        font-size: 1.6em;
                        line-height: 2rem;
                        font-family: '2P';
                        color: #5296D5;
                    }

                    > .text {
                        font-weight: 400;
                        font-size: 2.4em;
                        line-height: 3.2rem;
                        color: white;
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }

        > .buttons {
            display: flex;
            justify-content: center;
            gap: 1.5em;
            margin-top: 6em;
        }
    }

    @media (max-width: 767px) {
        .tokenomics {
            margin-top: 12em;

            > h2 {
                text-align: center;
            }

            > h3 {
                text-align: center;
            }

            .cards {
                width: 100%;
                padding: 0 1.5em;
                gap: 2.4rem;

                > .item {
                    width: 100%;
                    height: 14em;

                    > .container {
                        padding: 2.4em;
                        background: #0C2A47;
                        width: calc(100% - 0.4em);
                    }
                }
            }

            > .buttons {
                display: flex;
                justify-content: center;
                gap: 1.5em;
                margin-top: 6em;
            }
        }
    }
</style>

