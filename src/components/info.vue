<template>
    <div>
        <b-row>
            <b-col>
                <b-img id="logo" alt="logo" src="../assets/logo.png" />
            </b-col>
        </b-row>
        <b-row align-v="center" align-h="center" class='icons'>
            <b-col
                sm="12" 
                md="6"
                lg="3"
                v-for="link in links"
                v-bind:key="link.siteName"
            >
                <b-link target="_blank" v-bind:href="link.url">
                    <i v-bind:class="link.icon">
                        <br/>
                        <div id="label">{{ link.siteName }}</div>
                    </i>
                </b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                links: []
            }
        },
        async created() {
            this.links = await this.getLinks();
        },
        mounted: function () {
            this.$ga.event({
                eventCategory: 'Hit',
                eventAction: 'PageLoaded'
            })
        },
        methods: {
            getLinks: async () => {
                const query = `{
                        linkCollection {
                            items {
                                siteName
                                url
                                icon
                            }
                        }
                    }`;
            const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
            const fetchOptions = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"},
                body: JSON.stringify({query})
                };
            try {
                const response = await fetch(fetchUrl, fetchOptions).then(response =>
                response.json()
            );
            return response.data.linkCollection.items;
            } 
            catch (error) {
                throw new Error("Could not receive the data from Contentful!");
            }
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

