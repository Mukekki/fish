<template>
    <transition name="burger">
        <div class="burger-menu" v-if="isOpenSidebar">
            <div class="content">
                <nav class="menu-container">
                    <div class="main-links">
                        <a v-for="(item, index) of buttons" :key="index" :href="item.to" class="link" @click="closeSidebar">
                            <span>
                                {{ item.name }}
                            </span>
                        </a>
                    </div>

                    <div class="sub-links">
                        <div class="soc-links">
                            <a :href="''" class="social-link -tg"></a>
                            <a :href="''" class="social-link -tw"></a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="overlay" @click="closeSidebar"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'w-sidebar',
    props: {
        isOpenSidebar: Boolean,
        buttons: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            isOpenSolutions: false
        }
    },
    methods: {
        isActive(name) {
            return this.$route.name == name
        },
        closeSidebar() {
            this.$emit('close-sidebar')
        },
        pushToPage(url = '') {
            if (this.$route.path !== url) {
                this.$router.push(url)
                this.closeSidebar()
            }
            this.closeSidebar()
        }
    }
}
</script>

<style lang="less">
    .burger-menu {
        width: 100%;
        position: fixed;
        min-height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .content {
            display: none;
        }

        a {
            color: white;
            opacity: 0.8;

            &:hover {
                color: white;
                opacity: 1;
            }

            &.-active {
                opacity: 0.4;
            }
        }

        > .content {
            height: 100%;
            width: 100%;
            background: var(--blue);
            padding: 5.4em 0 4em 0px;
            box-shadow: 0px 2em 4em rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 999;
            overflow-x: auto;

            .link {
                > span {
                    font-size: 1.8em;
                    font-weight: 600;
                    line-height: 150%;
                }
            }

            .-active {
                color: rgba(255, 255, 255, 0.4);
                cursor: default;
            }

            .hr {
                width: 17.6em;
                height: 0.2em;
                background: rgba(255, 255, 255, 0.1);
            }

            > .menu-container {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                > .main-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    > .link {
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        color: var(--white);
                        padding: 1.5em 0;
                        width: 17.6em;
                        text-align: center;

                        &.-hide {
                            color:  rgba(255, 255, 255, 0.6);

                            span {
                                color: var(--white);
                                font-weight: 500;
                                font-size: 1.2em;
                                line-height: 150%;
                                display: inline-block;
                                padding: 0px 6px;
                                background: linear-gradient(85.73deg, #5F8CFF -25.39%, #CB34E3 114.43%);
                                border-radius: 1.5rem 1.5rem 1.5rem 0;
                            }
                        }
                    }

                    .popup-container {

                        > .-popup {
                            display: inline-flex;
                            align-items: center;
                            column-gap: 0.5em;
                            cursor: pointer;
                            transition: all 0.2s;

                            &.-active {
                                > svg {
                                    transform: rotate(180deg);
                                }
                            }
                        }

                        > .tooltip {
                            max-height: 0px;
                            transition: all 0.2s;
                            overflow: hidden;
                            display: flex;
                            flex-direction: column;
                            row-gap: 1em;

                            &.-active {
                                max-height: 10em;
                            }

                            > * {
                                &:first-child {
                                    padding-top: 1.6em;
                                }
                            }
                        }
                    }

                    > .link:first-child {
                        border: none;
                    }
                }

                > .sub-links {
                    display: flex;
                    flex-direction: column;
                    height: 10em;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 2.5em;

                    > .soc-links {
                        display: flex;
                        column-gap: 0.5em;

                        > .social-link {
                            width: 4.6em;
                            height: 4.6em;
                            display: block;
                            border-radius: 50%;
                            background-color: rgba(255, 255, 255, 0.1);
                        }

                        > .-tg {
                            // background-image: url(./images/tg.svg);
                            background-repeat: no-repeat;
                            background-position: 50% 50%;
                        }

                        > .-tw {
                            // background-image: url(./images/tw.svg);
                            background-repeat: no-repeat;
                            background-position: 50% 50%;
                        }
                    }

                    .subscribe {
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        display: flex;
                        align-items: center;
                        height: 3.5em;
                        padding: 0.8em 2em;
                        border-radius: 10em;
                        column-gap: 1em;

                        > .title {
                            color: white;
                            font-family: 'Poppins';
                            font-weight: normal;
                            line-height: 150%;
                            font-size: 1.2em;
                        }
                    }
                }
            }

            &::-webkit-scrollbar {
                height: 0.3em;
                width: 0.3em;
                position: absolute;
            }

            &::-webkit-scrollbar-track {
                border-radius: 10em;
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 1em;
                background: var(--yellow);
            }
        }
    }

    @keyframes overlay {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.8;
        }
    }
</style>
