<template>
    <div>
        <div class="card" v-if="seconds">
            <div class="card-body">
                <h2 class="countdown text-center font-weight-light">{{ countdown }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import * as moment from 'moment';
    export default {
        name: 'CountDown',
        props: {
            seconds: {
                type: Number,
                required: true,
            }
        },
        data () {
            return {
                countdown: null,
                expires_in: null,
                interval: null,
            }
        },
        mounted () {
            this.countdown = moment.utc(this.seconds).format('MM:HH:mm:ss');
            this.expires_in = this.seconds;
            this._setInterval();
        },
        destroyed () {
            clearInterval(this.interval);
        },
        methods: {
            _setInterval: function() {
                this.interval = setInterval(() => {
                    if (this.expires_in === 0) {
                        clearInterval(this.interval);
                    } else {
                        this.expires_in -= 1;
                        this.countdown = moment.utc(this.expires_in * 1000).subtract(1, 'seconds').format('MM:HH:mm:ss');
                        // this.countdown = moment.utc(this.expires_in).add(368, 'seconds').calendar();
                        // this.countdown= moment.utc(this.expires_in*1000).add(1, 'seconds').calendar(); 
                    }
                }, 1000);
            },
        }
    }
</script>

<style lang="scss" scoped>
.countdown{
    font-size: 80px;
}

</style>