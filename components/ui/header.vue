<template>
    <header class="header">
        <a class="logo">
            <div>
                <span>
                    FP
                </span>
            </div>
        </a>

        <ul>
            <li v-for="(btn, index) of buttons" :key="index">
                <a :href="btn.to">
                    {{ btn.name }}
                </a>
            </li>
        </ul>

        <a class="btn">
            {{ $i18n.get(`GO FISHING`) }}
        </a>

        <div class="burger-button" :class="{'-open': isOpenSidebar}" @click="isOpenSidebar = !isOpenSidebar">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>

        <ui-sidebar
        :is-open-sidebar="isOpenSidebar"
        :buttons="buttons"
        @close-sidebar="isOpenSidebar = false"></ui-sidebar>
    </header>
</template>

<script>
export default {
    name: 'ui-header',
    data() {
        return {
            isOpenSidebar: false,
            buttons: [
                {
                    name: this.$i18n.get(`About`),
                    to: '#about'
                },
                {
                    name: this.$i18n.get(`For Fishers`),
                    to: '#fisher'
                },
                {
                    name: this.$i18n.get(`For River lords`),
                    to: '#river'
                },
                {
                    name: this.$i18n.get(`Roadmap`),
                    to: '#roadmap'
                },
                {
                    name: this.$i18n.get(`Whitepaper`),
                    to: ''
                }
            ]
        }
    }
}
</script>

<style lang="less">
    .header {
        z-index: 100000;
        height: 7.2em;
        background-color: var(--blue);
        display: flex;
        align-items: center;
        color: var(--white);
        padding: 1.2em 1.6em;
        gap: 4em;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        > .logo {
            user-select: none;
            font-family: arial;
            display: block;
            transform: scale(0.9);
            width: 5em;
            flex-shrink: 0;
            display: block;
            height: 4em;
            padding: 1em 0;
            top: 0;
            left: calc(50% - 1.8em);

            > div {
                margin-top: -1.4em;
                margin-left: -0.35em;
                padding: 0.3em 0.6em;
                border: 0.2em solid var(--yellow);
                border-radius: 0.2em;
                position: absolute;
                font-weight: 800;
                color: var(--yellow);
                transform: matrix( 1, -0.1647725170467, -0.13235581481187, 1.01103047835477,2.34548894501819, 3.85403499178337);

                > span {
                    line-height: 100%;
                    font-size: 2.5em;
                }
            }
        }

        > ul {
            display: flex;
            flex-grow: 1;
            gap: 2.5em;

            > li {
                font-weight: 400;
                font-size: 1.6em;
                line-height: 120%;
                color: rgba(255, 255, 255, 0.7);
                transition: all 0.3s;

                &:hover {
                    color: var(--white);
                    cursor: pointer;
                }
            }
        }

        > .btn {
            width: 22.1em;
            height: 4em;
            border: 0.15em solid rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;

            &:hover {
                transform: translateY(-0.1em);
                box-shadow: 0px 0px 2px var(--white);
            }
        }

        .burger-button {
            z-index: 1;
            display: none;
        }
    }

    @media (max-width: 767px) {
        .header {
            z-index: 30;
            justify-content: space-between;

            > ul {
                display: none;
            }

            > .btn {
                display: none;
            }

            .burger-button {
                display: block;
                height: 1.5em;
                width: 2.6em;
                position: relative;
                z-index: 100;

                .item {
                    width: 2.4em;
                    height: 0.4em;
                    background: var(--white);
                    transition: all 0.2s;
                    position: absolute;
                    transition: all 0.2s;
                    top: 0;
                    border-radius: 0.2em;
                }

                .item:nth-child(2) {
                    top: 0.8em;
                }

                .item:nth-child(3) {
                    top: 1.6em;
                }

                &.-open {
                    .item {
                        border-radius: 0.5em;
                        top: 6px;
                        transform: rotate(45deg);
                    }

                    .item:nth-child(2) {
                        transform: rotate(-45deg);
                    }

                    .item:nth-child(3) {
                        opacity: 0;
                    }
                }
            }
        }
    }
</style>

