<template>
    <div>
        <b-row>
            <b-col>
            </b-col>
            <b-col md="7" sm="auto">
                <b-row>
                    <b-col>
                        <b-img alt="logo" src="../assets/logo.png" />
                    </b-col>
                </b-row>
                <b-row align-v="center" class="p-2">
                    <b-col>
                        <b-button block variant="outline-info" target="_blank">
                            <router-link to="Resume">Resume</router-link>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="p-2">
                    <b-col>
                        <b-button block variant="outline-info" target="_blank" href="mailto:stephen.herrick@gmail.com"
                            @click="captureOutboundLink('mailto:stephen.herrick@gmail.com');">
                            Contact Me
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="p-2">
                    <b-col>
                        <b-link href="https://linkedin.com/in/stephenpaulherrick" target="_blank"
                            @click="captureOutboundLink('https://linkedin.com/in/stephenpaulherrick');">
                            <b-img style="height: 75px; padding-right: 25px;" src="../assets/linkedin_logo.png"
                                alt="LinkedIn Logo" />
                        </b-link>
                        <b-link href="https://github.com/stephenherrick/" target="_blank"
                            @click="captureOutboundLink('https://github.com/stephenherrick/');">
                            <b-img style="height: 75px; padding-left: 25px;" src="../assets/GitHub_Logo.png"
                                alt="GitHub Logo" />
                        </b-link>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
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
<style>
</style>