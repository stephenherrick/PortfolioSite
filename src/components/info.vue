<template>
    <div>
        <b-row>
            <b-col>
                <b-img id="logo" alt="logo" src="../assets/logo.png" />
            </b-col>
        </b-row>
        <b-row align-v="center" align-h="center" class='icons'>
            <b-col sm="12" md="6" lg="3">
                <b-link target="_blank" href="https://drive.google.com/file/d/0BzmBR3K6IccHaUFBazJocG1lSXc/view?usp=sharing">
                    <i class="far fa-file fa-7x">
                        <br/>
                        <div id="label">Resume</div>
                    </i>
                </b-link>
            </b-col>
            <b-col sm="12" md="6" lg="3">
                <b-link target="_blank" href="mailto:stephen.herrick@gmail.com">
                    <i class="far fa-envelope fa-7x">
                        <br/>
                        <div id="label">EMail</div>
                    </i>
                </b-link>
            </b-col>
            <b-col sm="12" md="6" lg="3">
                <b-link href="https://linkedin.com/in/stephenpaulherrick" target="_blank"
                    @click="captureOutboundLink('https://linkedin.com/in/stephenpaulherrick');">
                    <i class="fab fa-linkedin fa-7x">
                        <br/>
                        <div id="label">LinkedIn</div>
                    </i>
                </b-link>
            </b-col>
            <b-col sm="12" md="6" lg="3">
                <b-link href="https://github.com/stephenherrick/" target="_blank"
                    @click="captureOutboundLink('https://github.com/stephenherrick/');">
                    <i class="fab fa-github fa-7x">
                        <br/>
                        <div id="label">GitHub</div>
                    </i>
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
        }
    }
</script>
<style scoped>
    i {
        color: darkgrey;
        transition: color 1s;
        padding-left: 30%;
        padding-right: 30%;
    }
    i:hover {
        color:dodgerblue;
    }
    #label {
        opacity: 0;
        font-size: 20%;
    }
    i:hover #label {
        opacity: 1;
        transition: opacity 1s linear;
        text-align: center;
    }
    #logo {
        padding: 5%;
    }
    .icons {
        padding: 5%;
    }
</style>

