<template>
    <button class="btn" :class="classes" :type="btnType">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type ButtonType = 'button' | 'submit' | 'reset' | undefined

export default defineComponent({
    props: {
        classes: {
            type: Array<string>,
            default: () => []
        },
        btnType: String as PropType<ButtonType>,
    },
    created() {
        console.log('from component',this.btnType)
    }
})
</script>
