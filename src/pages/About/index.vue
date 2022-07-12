<template>
<div>
    <Jumbo></Jumbo>
    <b-container>
        <HeaderRed>About US</HeaderRed>
        <AboutDetail></AboutDetail>
    </b-container>

</div>
</template>
<script>
import Jumbo from '@/components/Jumbo.vue';
import HeaderRed from '@/components/HeaderRed.vue';
import AboutDetail from './AboutDetail.vue';
export default {
    name: "",
    components: { Jumbo, HeaderRed, AboutDetail }
}
</script>
