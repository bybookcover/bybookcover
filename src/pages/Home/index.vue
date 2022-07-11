<template>
    <div>
        <Glide></Glide>
        <Detail></Detail>
    </div>
</template>
<script>
import Glide from '@/pages/Home/Glide.vue'
import Detail from '@/pages/Home/Detail.vue'
export default {
    name:'Home',
    components:{
        Glide,
        Detail
    }
    
}
</script>

