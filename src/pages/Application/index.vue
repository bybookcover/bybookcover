<template>
    <div>
        <Jumbo></Jumbo>
        <b-container>
            
            <HeaderRed>Application</HeaderRed>
            <ApplicationDetail></ApplicationDetail>
        </b-container>
    </div>


</template>
<script>
import HeaderRed from '@/components/HeaderRed.vue'
import ApplicationDetail from './ApplicationDetail.vue'
import Jumbo from '@/components/Jumbo.vue'
export default {
    components: { HeaderRed, ApplicationDetail, Jumbo },
    name: ''
}
</script>
