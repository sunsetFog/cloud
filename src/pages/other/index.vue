<template>
    <section>other-----------other</section>
</template>

<script>
export default {
    name: 'other',
    data () {
        return {

        }
    },
    created () {
        this.mockTest()
    },
    methods: {
        mockTest () {
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/host/list-list',
                method: 'post',
                data: json
            }).then((res) => {
                console.log('mock-test=', res)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
    }
}
</script>

<style lang="less" scoped>

</style>
