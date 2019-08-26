<template>
    <div>
        <b-card-header 
            header="Stephen Herrick, SDET" 
            header-bg-variant="dark" 
            header-text-variant="white">
        </b-card-header>
        <b-row>
            <b-col>
            </b-col>
            <b-col md="7" sm="auto">
                <b-row>
                    <b-col>
                        <b-img alt="logo" src="../assets/logo.png" />
                    </b-col>
                </b-row>
                <b-row align-v="center" class="p-3">
                    <b-col>
                        <b-button block variant="outline-info" target="_blank"
                            href="https://drive.google.com/file/d/0BzmBR3K6IccHaUFBazJocG1lSXc/view?ths=true">Resume
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="p-3">
                    <b-col>
                        <b-button block variant="outline-info" target="_blank" href="mailto:stephen.herrick@gmail.com">
                            Contact Me
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="p-3">
                    <b-col>
                        <b-link href="https://linkedin.com/in/stephenpaulherick" target="_blank">
                            <b-img style="height: 75px;" src="../assets/linkedin_logo.png" alt="LinkedIn Logo" />
                        </b-link>
                        <b-link href="https://github.com/stephenherrick/" target="_blank">
                            <b-img style="height: 75px;" src="../assets/GitHub_Logo.png" alt="GitHub Logo" />
                        </b-link>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
        <b-card-footer :footer=getFooterText>
        </b-card-footer>
    </div>
</template>

<script>
    export default {
        computed:{
            getFooterText:function(){
                var year = new Date().getFullYear().toString();
                var footerText = "Copyright  ©"+year+" stephenherrick.dev";
                return footerText
        }
    }        
}
</script>

<style>

</style>
