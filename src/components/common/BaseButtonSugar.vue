<template>
    <button class="btn" :class="classes" :type="btnType">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset' | undefined

interface BaseButtonProps {
    btnType?: ButtonType,
    classes?: string[]
}

defineProps<BaseButtonProps>()
</script>
