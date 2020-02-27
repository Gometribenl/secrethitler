<template>
    <div>
        {{ user }} : <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "chat",
        props: [
            'user'
        ]
    }
</script>
