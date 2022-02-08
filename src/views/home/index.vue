<template>
    <div>
        今年 {{age}} 岁
        <input type="submit" @click="add" value='新增'>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
    setup(){
        let data = reactive({
            age: 18
        })

        let add = () => {
            data.age++
        }
        return {
            ...toRefs(data), add
        }
    },
})
</script>