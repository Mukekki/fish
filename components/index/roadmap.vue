<template>
    <div class="roadmap" id="roadmap">
        <h1>
            {{ $i18n.get(`Roadmap`) }}
        </h1>

        <div class="tabs">
            <div class="item" v-for="item of tabs" :key="item" :class="{ '-active': item === 'Aug' }">
                {{ item }}
            </div>
        </div>

        <div class="cards">
            <div class="item" v-for="(item) of cards" :key="item">
                <div class="bg"></div>
                <div class="shadow"></div>
                <div class="container">
                    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.296875" y="8.40002" width="4.2" height="4.2" fill="#029621"/>
                        <rect x="4.5" y="12.6001" width="4.2" height="4.2" fill="#029621"/>
                        <rect width="4.2" height="4.2" transform="matrix(-1 0 0 1 21.2969 8.40002)" fill="#029621"/>
                        <rect width="4.2" height="4.2" transform="matrix(-1 0 0 1 25.5 4.19995)" fill="#029621"/>
                        <rect width="4.2" height="4.2" transform="matrix(-1 0 0 1 29.6953 0)" fill="#029621"/>
                        <rect width="4.2" height="4.2" transform="matrix(-1 0 0 1 17.0938 12.6001)" fill="#029621"/>
                        <rect x="8.69531" y="16.8" width="4.2" height="4.2" fill="#029621"/>
                    </svg>

                    <div class="text">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>

        <h1 style="margin-top: 8rem;">
            {{ $i18n.get(`News and events`) }}
        </h1>

        <div class="cards -big">
            <div class="item -big" v-for="(item) of this['big-cards']" :key="item">
                <div class="bg"></div>
                <div class="shadow"></div>
                <div class="container">
                    <img :src="require(`~/assets/images/index/roadmap-image.png`)" alt="">

                    <div class="text">
                        <div class="date">
                            {{ item.date }}
                        </div>

                        <div>
                            {{ item.text }}
                        </div>

                        <ui-button type="blue">
                            {{ item.button }}
                        </ui-button>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'roadmap',
    data() {
        return {
            tabs: [
                this.$i18n.get(`Jun`),
                this.$i18n.get(`Jul`),
                this.$i18n.get(`Aug`),
                this.$i18n.get(`Sep`),
                this.$i18n.get(`Oct`),
                this.$i18n.get(`Nov`),
                this.$i18n.get(`Dec`),
                this.$i18n.get(`2023`)
            ],
            cards: [
                this.$i18n.get(`Fortune Pike World (FP World) - map with the first 80 rivers`),
                this.$i18n.get(`Players experience levels balanced`),
                this.$i18n.get(`BaitCoins faucet`),
                this.$i18n.get(`Referral program for players`),
            ],
            'big-cards': [
                {
                    date: '01.08.2022',
                    text: 'Game beta 0,7 version has been launched',
                    button: 'Try to play'
                },
                {
                    date: '01.08.2022',
                    text: 'Striking mystery-box auction with unique NFT avatars will take place!',
                    button: 'Get whitelisted!'
                },
                {
                    date: '01.08.2022',
                    text: 'Will take place the first auction of River lords\' titles',
                    button: 'Get whitelisted!'
                }
            ]
        }
    }
}
</script>

<style lang="less">
    .roadmap {
        background-color: #F6C44E;
        margin-top: 26.7em;
        position: relative;
        padding: 10em 0 24em 0;

        > h1 {
            font-weight: 700;
            font-size: 5.2em;
            line-height: 7rem;
            text-align: center;
        }

        &::before {
            position: absolute;
            background-image: url("data:image/svg+xml,%3Csvg width='390' height='168' viewBox='0 0 390 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='14.0312' y='160.889' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='0.703125' y='153.395' width='13.325' height='14.1053' fill='%23F6C44E'/%3E%3Crect x='108' y='160.889' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='147.281' y='160.889' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='94.6797' y='145.461' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='134.656' y='132.237' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='108.703' y='132.237' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='106.602' y='103.145' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='121.328' y='88.5991' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='241.953' y='58.6252' width='13.325' height='13.2237' fill='%23F6C44E'/%3E%3Crect x='294.555' y='86.8359' width='8.37504' height='25.9488' transform='rotate(90 294.555 86.8359)' fill='%23F6C44E'/%3E%3Crect x='80.6562' y='95.2109' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='174.625' y='111.08' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='241.953' y='124.744' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='187.953' y='104.468' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='187.953' y='88.5991' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='161.305' y='67.0004' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='187.953' y='67.0004' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='147.977' y='14.5461' width='26.6501' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='54.7031' y='28.6515' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='93.2734' y='14.5461' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='201.984' y='22.0396' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='281.227' y='52.0133' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='308.578' y='52.0133' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='321.906' y='80.2241' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='349.258' y='88.5991' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='321.906' y='111.079' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='348.555' y='111.079' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='321.906' y='139.29' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='281.227' y='111.079' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='281.227' y='132.678' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='281.227' y='152.514' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='254.578' y='152.514' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='255.281' y='145.902' width='26.6501' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='187.953' y='145.902' width='40.6764' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='213.906' y='152.514' width='40.6764' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='187.953' y='159.126' width='54.0015' height='8.37504' fill='%23F6C44E'/%3E%3Crect x='295.25' y='138.409' width='13.325' height='14.1053' fill='%23F6C44E'/%3E%3Crect x='335.234' y='117.691' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='348.555' y='124.303' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='348.555' y='145.902' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='321.906' y='145.902' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='308.578' y='160.889' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='375.906' y='124.744' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='335.93' y='160.889' width='39.9751' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='375.906' y='80.2241' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='375.906' y='52.0133' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='375.906' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='267.906' y='95.2109' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='14.9062' y='51.9307' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='215.305' y='88.5991' width='13.325' height='29.0922' fill='%23F6C44E'/%3E%3Crect x='228.625' y='117.691' width='13.325' height='21.158' fill='%23F6C44E'/%3E%3Crect x='94.6797' y='43.1976' width='13.325' height='14.9869' fill='%23F6C44E'/%3E%3Crect x='332' y='28.9119' width='14' height='7.54223' fill='%23F6C44E'/%3E%3Crect x='27.3516' y='111.08' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='54' y='95.2109' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='14.0312' y='87.2766' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='54.7031' y='80.2241' width='13.325' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='14.0312' y='146.783' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='133.25' y='154.277' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='67.3281' y='125.625' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect y='117.691' width='27.3514' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='41.375' y='153.396' width='39.9751' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='54.7031' y='138.849' width='39.9751' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='160.602' y='132.237' width='39.9751' height='6.61187' fill='%23F6C44E'/%3E%3Crect x='121.328' y='138.849' width='53.3001' height='6.61187' fill='%23F6C44E'/%3E%3C/svg%3E%0A");
            content: '';
            top: -16.5em;
            left: 0;
            right: 0;
            bottom: 100%;
        }

        &::after {
            position: absolute;
            background-image: url("data:image/svg+xml,%3Csvg width='390' height='168' viewBox='0 0 390 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='14.0312' y='160.889' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='0.703125' y='153.395' width='13.325' height='14.1053' fill='%23061627'/%3E%3Crect x='108' y='160.889' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='147.281' y='160.889' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='94.6797' y='145.461' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='134.656' y='132.237' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='108.703' y='132.237' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='106.602' y='103.145' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='121.328' y='88.5991' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='241.953' y='58.6252' width='13.325' height='13.2237' fill='%23061627'/%3E%3Crect x='294.555' y='86.8359' width='8.37504' height='25.9488' transform='rotate(90 294.555 86.8359)' fill='%23061627'/%3E%3Crect x='80.6562' y='95.2109' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='174.625' y='111.08' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='241.953' y='124.744' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='187.953' y='104.468' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='187.953' y='88.5991' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='161.305' y='67.0003' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='187.953' y='67.0003' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='147.977' y='14.5462' width='26.6501' height='6.61187' fill='%23061627'/%3E%3Crect x='54.7031' y='28.6515' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='93.2734' y='14.5462' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='201.984' y='22.0396' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='281.227' y='52.0133' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='308.578' y='52.0133' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='321.906' y='80.2241' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='349.258' y='88.5991' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='321.906' y='111.079' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='348.555' y='111.079' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect x='321.906' y='139.29' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect x='281.227' y='111.079' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='281.227' y='132.678' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='281.227' y='152.514' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='254.578' y='152.514' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='255.281' y='145.902' width='26.6501' height='6.61187' fill='%23061627'/%3E%3Crect x='187.953' y='145.902' width='40.6764' height='6.61187' fill='%23061627'/%3E%3Crect x='213.906' y='152.514' width='40.6764' height='6.61187' fill='%23061627'/%3E%3Crect x='187.953' y='159.126' width='54.0015' height='8.37504' fill='%23061627'/%3E%3Crect x='295.25' y='138.409' width='13.325' height='14.1053' fill='%23061627'/%3E%3Crect x='335.234' y='117.691' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='348.555' y='124.303' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='348.555' y='145.902' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='321.906' y='145.902' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='308.578' y='160.889' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='375.906' y='124.744' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='335.93' y='160.889' width='39.9751' height='6.61187' fill='%23061627'/%3E%3Crect x='375.906' y='80.2241' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='375.906' y='52.0133' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='375.906' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='267.906' y='95.2109' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='14.9062' y='51.9307' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='215.305' y='88.5991' width='13.325' height='29.0922' fill='%23061627'/%3E%3Crect x='228.625' y='117.691' width='13.325' height='21.158' fill='%23061627'/%3E%3Crect x='94.6797' y='43.1976' width='13.325' height='14.9869' fill='%23061627'/%3E%3Crect x='332' y='28.9119' width='14' height='7.54223' fill='%23061627'/%3E%3Crect x='27.3516' y='111.079' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='54' y='95.2109' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='14.0312' y='87.2766' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='54.7031' y='80.2241' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='0.703125' y='140.172' width='13.325' height='6.61187' fill='%23061627'/%3E%3Crect x='14.0312' y='146.783' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect x='133.25' y='154.277' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect x='67.3281' y='125.626' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect y='117.691' width='27.3514' height='6.61187' fill='%23061627'/%3E%3Crect x='41.375' y='153.396' width='39.9751' height='6.61187' fill='%23061627'/%3E%3Crect x='54.7031' y='138.849' width='39.9751' height='6.61187' fill='%23061627'/%3E%3Crect x='160.602' y='132.237' width='39.9751' height='6.61187' fill='%23061627'/%3E%3Crect x='121.328' y='138.849' width='53.3001' height='6.61187' fill='%23061627'/%3E%3C/svg%3E ");
            content: '';
            height: 16.7rem;
            left: 0;
            right: 0;
            bottom: 0;
        }

        > .tabs {
            margin: 4em auto 0;
            width: 132.8em;
            display: flex;
            gap: 2em;
            position: relative;

            > .item {
                width: 14.85rem;
                height: 3rem;
                font-weight: 900;
                font-size: 2.8em;
                line-height: 3.6rem;
                color: #121212;
                text-align: center;
                opacity: 0.5;
                padding-bottom: 1.5em;

                &.-active {
                    opacity: 1;
                    border-bottom: 0.15em solid #121212;
                }
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.2em;
                opacity: 0.5;
                background-color: #121212;
            }
        }

        > .cards {
            width: 87.8em;
            margin: 5.8em auto 0;
            display: flex;
            flex-wrap: wrap;
            gap: 2.4em;


            &.-big {
                width: var(--container-width);
                flex-wrap: nowrap;
            }

            > .item {
                position: relative;
                flex-shrink: 0;
                width: 42.7em;
                height: 13.6em;
                display: flex;
                align-items: center;
                justify-content: center;

                > .bg {
                    background-color: #121212;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                }

                > .shadow {
                    clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                    width: 42.7em;
                    height: 13.6em;
                    background-color: #121212;
                    position: absolute;
                    z-index: 0;
                    top: 0.3em;
                    left: 0.3em;
                }

                > .container {
                    position: relative;
                    z-index: 1;
                    padding: 2.4em;
                    background: var(--white);
                    width: 42.3rem;
                    height: 13.2em;
                    clip-path: polygon(0 1em, 1em 1em, 1em 0, calc(100% - 1em) 0, calc(100% - 1em) 1em, 100% 1em, 100% calc(100% - 1em), calc(100% - 1.1em) calc(100% - 1em), calc(100% - 1.1em) 100%, 1em 100%, 1em calc(100% - 1em), 0 calc(100% - 1em));
                    display: flex;
                    flex-direction: column;

                    > svg {
                        width: 3em;
                        height: 2.1em;
                    }

                    > .text {
                        font-weight: 700;
                        font-size: 1.8em;
                        line-height: 2.4rem;
                        margin-top: 2.1rem;
                        padding-right: 3em;
                    }
                }

                &.-big {
                    width: 35em;
                    height: 41.3em;

                    > .shadow {
                        width: 100%;
                        height: 100%;
                    }

                    > .container {
                        width: 34.6em;
                        height: calc(41.3em - 0.4em);
                        padding: 0;

                        > img {
                            height: 17.8rem;
                        }

                        > .text {
                            font-weight: 300;
                            margin-top: 0;
                            padding: 2.2rem;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                            font-weight: 700;
                            font-size: 1.8rem;
                            line-height: 2.4rem;

                            > * {
                                &:nth-child(2) {
                                    margin-top: 0.8rem;
                                    flex-grow: 1;
                                }
                            }

                            > .btn {
                                display: flex;
                                width: 100%;
                            }
                        }
                    }

                    &:first-child {
                        > .container {
                            background-color: #65C97A;
                        }
                    }

                    &:nth-child(2) {
                        > .container {
                            background-color: #5296D5;
                        }
                    }

                    &:nth-child(3) {
                        > .container {
                            background-color: #EAC645;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .roadmap {
            > .tabs {
                margin: 4em auto 0;
                width: 132.8em;
                display: flex;
                gap: 2em;
                position: relative;

                > .item {
                    width: 7.8rem;
                    display: none;

                    &:first-child, &:nth-child(2), &:nth-child(3), &:nth-child(4) {
                        display: block;
                    }
                }
            }

            > .cards {
                padding: 0 1.5rem;
                width: 100%;
                margin: 5.8em auto 0;
                display: flex;
                flex-wrap: wrap;
                gap: 2.4em;


                &.-big {
                    width: var(--container-width);
                    flex-wrap: nowrap;
                    margin-top: 3.9rem;
                    overflow-y: scroll;
                    padding-bottom: 0.5em;
                    width: auto;
                }

                > .item {
                    position: relative;
                    flex-shrink: 0;
                    width: 100%;
                    height: 13.6em;

                    > .shadow {
                        width: 100%;
                        height: 13.6em;
                    }

                    > .container {
                        padding: 2.4em;
                        width: calc(100% - 0.4rem);
                        height: 13.2em;
                    }

                    &.-big {
                        width: 31.4rem;
                        height: 41.3rem;

                        > .shadow {
                            width: 100%;
                            height: 100%;
                        }

                        > .container {
                            width: 31em;
                            height: calc(41.3em - 0.4em);
                            padding: 0;
                            overflow-y: scroll;
                        }

                        &:first-child {
                            > .container {
                                background-color: #65C97A;
                            }
                        }

                        &:nth-child(2) {
                            > .container {
                                background-color: #5296D5;
                            }
                        }

                        &:nth-child(3) {
                            > .container {
                                background-color: #EAC645;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

