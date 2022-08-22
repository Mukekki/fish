<template>
    <div class="default-layout">
        <ui-header></ui-header>
        <nuxt />
    </div>
</template>

<style lang="less">
    .default-layout {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        background-color: var(--blue);
        overflow: hidden;

        flex-grow: 1;
        height: 100%;

        display: flex;
        flex-direction: column;

        > :nth-child(2) {
            flex-grow: 1;
        }
    }
</style>
