<template>
    <div>
        <b-row>
            <b-col>
                <b-img id="logo" alt="logo" src="../assets/logo.png" />
            </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col>
                <router-link to="Resume">
                    <i class="far fa-file fa-7x">
                        <br/>
                        <div id="label">Resume</div>
                    </i>
                </router-link>
            </b-col>
            <b-col>
                <b-link target="_blank" href="mailto:stephen.herrick@gmail.com">
                    <i class="far fa-envelope fa-7x">
                        <br/>
                        <div id="label">EMail</div>
                    </i>
                </b-link>
            </b-col>
            <b-col>
                <b-link href="https://linkedin.com/in/stephenpaulherrick" target="_blank"
                    @click="captureOutboundLink('https://linkedin.com/in/stephenpaulherrick');">
                    <i class="fab fa-linkedin fa-7x">
                        <br/>
                        <div id="label">LinkedIn</div>
                    </i>
                </b-link>
            </b-col>
            <b-col>
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
        /* position: absolute; */
        transition: color 1s

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
</style>

