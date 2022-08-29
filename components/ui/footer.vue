<template>
    <footer class="footer">
        <div class="fish-one"></div>

        <a href="">{{ $i18n.get(`Cookies`) }}</a>
        <a href="">{{ $i18n.get(`Policy`) }}</a>
        <a href="">{{ $i18n.get(`Privacy Policy`) }}</a>
        <a href="">{{ $i18n.get(`Terms and Conditions`) }}</a>
        <a href="">{{ $i18n.get(`Contact Us`) }}</a>
        <a href="">{{ $i18n.get(`White Paper`) }}</a>
    </footer>
</template>

<style lang="less">
    .footer {
        height: 6em;
        position: relative;
        background: var(--blue);
        padding: 1.5em;
        display: flex;
        gap: 4em;
        justify-content: center;
        align-items: center;

        > .fish-one {
            background-image: url(~/assets/images/index/fish-six.png);
            width: 4.1em;
            height: 3.3em;
            background-size: 100% 100%;
        }

        > a {
            color: var(--orange);
            font-family: '2P';
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 4.4rem;
            transition: all 0.4s;

            &:hover {
                color: var(--deep-orange);
                text-shadow: 1px 1px 2px pink;
            }
        }

        &::before {
            position: absolute;
            background-image: url("data:image/svg+xml,%3Csvg width='304' height='168' viewBox='0 0 304 168' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='14.0312' y='160.889' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='0.703125' y='153.395' width='13.325' height='14.1053' fill='%230C243D'/%3E%3Crect x='108' y='160.889' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='147.281' y='160.889' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='94.6797' y='145.461' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='134.656' y='132.237' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='108.703' y='132.237' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='106.602' y='103.145' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='121.328' y='88.5991' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='241.953' y='58.6252' width='13.325' height='13.2237' fill='%230C243D'/%3E%3Crect x='294.555' y='86.8359' width='8.37504' height='25.9488' transform='rotate(90 294.555 86.8359)' fill='%230C243D'/%3E%3Crect x='80.6562' y='95.2109' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='174.625' y='111.08' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='241.953' y='124.744' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='187.953' y='104.468' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='187.953' y='88.5991' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='161.305' y='67.0003' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='187.953' y='67.0003' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='147.977' y='14.5462' width='26.6501' height='6.61187' fill='%230C243D'/%3E%3Crect x='54.7031' y='28.6515' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='93.2734' y='14.5462' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='201.984' y='22.0396' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='281.227' y='52.0133' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='281.227' y='111.079' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='281.227' y='132.678' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='281.227' y='152.514' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='254.578' y='152.514' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='255.281' y='145.902' width='26.6501' height='6.61187' fill='%230C243D'/%3E%3Crect x='187.953' y='145.902' width='40.6764' height='6.61187' fill='%230C243D'/%3E%3Crect x='213.906' y='152.514' width='40.6764' height='6.61187' fill='%230C243D'/%3E%3Crect x='187.953' y='159.126' width='54.0015' height='8.37504' fill='%230C243D'/%3E%3Crect x='295.25' y='138.409' width='13.325' height='14.1053' fill='%230C243D'/%3E%3Crect x='267.906' y='95.2109' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='14.9062' y='51.9307' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='215.305' y='88.5991' width='13.325' height='29.0922' fill='%230C243D'/%3E%3Crect x='228.625' y='117.691' width='13.325' height='21.158' fill='%230C243D'/%3E%3Crect x='94.6797' y='43.1976' width='13.325' height='14.9869' fill='%230C243D'/%3E%3Crect x='27.3516' y='111.079' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='54' y='95.2109' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='14.0312' y='87.2766' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='54.7031' y='80.2241' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='0.703125' y='140.172' width='13.325' height='6.61187' fill='%230C243D'/%3E%3Crect x='14.0312' y='146.783' width='27.3514' height='6.61187' fill='%230C243D'/%3E%3Crect x='133.25' y='154.277' width='27.3514' height='6.61187' fill='%230C243D'/%3E%3Crect x='67.3281' y='125.626' width='27.3514' height='6.61187' fill='%230C243D'/%3E%3Crect y='117.691' width='27.3514' height='6.61187' fill='%230C243D'/%3E%3Crect x='41.375' y='153.396' width='39.9751' height='6.61187' fill='%230C243D'/%3E%3Crect x='54.7031' y='138.849' width='39.9751' height='6.61187' fill='%230C243D'/%3E%3Crect x='160.602' y='132.237' width='39.9751' height='6.61187' fill='%230C243D'/%3E%3Crect x='121.328' y='138.849' width='53.3001' height='6.61187' fill='%230C243D'/%3E%3C/svg%3E%0A");
            content: '';
            top: -20.5em;
            left: 0;
            right: 0;
            bottom: 100%;
        }
    }

    @media (max-width: 767px) {
        .footer {
            flex-direction: column;
            align-items: center;
            height: auto;
            gap: 0em;

             > .fish-one {
                margin: 2em 0;
                background-image: url(~/assets/images/index/fish-six.png);
                width: 8.2em;
                height: 6.6em;
                background-size: 100% 100%;
            }
        }
    }
</style>

