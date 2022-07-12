<template>
    <div>
        <Jumbo></Jumbo>
        <b-container>
            <HeaderRed>Contact US</HeaderRed>
            <ContactDetail></ContactDetail>
        </b-container>
    </div>

</template>
<script>
import ContactDetail from './ContactDetail.vue';
import Jumbo from '@/components/Jumbo.vue';
import HeaderRed from '@/components/HeaderRed.vue';
export default {
    name: "",
    components: { ContactDetail, Jumbo, HeaderRed }
}
</script>
