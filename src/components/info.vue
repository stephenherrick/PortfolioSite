<template>
    <div>
        <b-row>
            <b-col>
                <b-img alt="logo" src="../assets/logo.png" />
            </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col>
                <router-link to="Resume">
                    <i class="far fa-file fa-7x"></i>
                </router-link>
                <b-link target="_blank" href="mailto:stephen.herrick@gmail.com">
                    <i class="far fa-envelope fa-7x"></i>
                </b-link>
                <b-link href="https://linkedin.com/in/stephenpaulherrick" target="_blank"
                    @click="captureOutboundLink('https://linkedin.com/in/stephenpaulherrick');">
                    <i class="fab fa-linkedin fa-7x"></i>
                </b-link>
                <b-link href="https://github.com/stephenherrick/" target="_blank"
                    @click="captureOutboundLink('https://github.com/stephenherrick/');">
                    <i class="fab fa-github fa-7x"></i>
                </b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.$ga.event({
                eventCategory: 'Hit',
                eventAction: 'PageLoaded'
            })
        },
        methods: {
            captureOutboundLink: function (url) {
                this.$ga.event({
                    eventCategory: 'Click',
                    eventAction: 'LinkClick',
                    eventLabel: 'Click',
                    eventValue: url
                })
            }
        },
        computed: {
            getFooterText: function () {
                var year = new Date().getFullYear().toString();
                var footerText = "Copyright  ©" + year + " stephenherrick.dev";
                return footerText
            }
        }
    }
</script>
<style scoped>
    i {
        color: darkgrey;
        padding: 5%;
    }
    i:hover {
        color:dodgerblue;
    }
</style>

