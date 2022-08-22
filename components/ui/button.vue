<template>
    <a v-if="href.length" :href="href" class="btn" :class="btnClasses" :target="target ? '' : '_blank'" :disabled='disabled' @click="click">
        <slot></slot>
    </a>

    <router-link v-else-if="!!to" class="btn" :to="to" :class="btnClasses" :disabled='disabled' @click="click">
        <slot></slot>
    </router-link>

    <button v-else class="btn" :class="btnClasses" :disabled='disabled' @click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'w-button',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'middle'
        },
        block: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: Object,
            default: () => {
                return {}
            }
        },
        href: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: ''
        }
    },
    computed: {
        btnClasses() {
            return {
                '-gray': this.type === 'gray',
                '-border': this.type === 'border',
                '-blue': this.type === 'blue',

                '-large': this.size === 'large',
                '-middle': this.size === 'middle',
                '-small': this.size === 'small',
                '-xs': this.size === 'xs',

                '-block': this.block
            }
        }
    },
    methods: {
        click(event) {
            this.$emit('click', event)
        }
    }
}
</script>

<style lang="less" scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    position: relative;
    padding: 2.6rem 2.8rem;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2rem;
    background-color: #EFAA14;
    color: black;
    z-index: 40;
    transition: transform 0.3s;

    &.-large {
    }

    &.-middle {
    }

    &.-small {

    }

    &.-xs {

    }

    &.-block {
        display: flex;
        width: 100%;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:hover {
        transform: translateY(-3px);
    }

    &.-border {
        background-color: transparent;
        color: var(--white);
        border: 0.15em solid rgba(255, 255, 255, 0.3);
    }

    &.-blue {
        background-color: #11385E;
        color: var(--white);
    }
}
</style>
