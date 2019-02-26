
new Vue({
    el: '#container1',
    data: {
        country: []
    },
    created() {


        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
            .then(response => {
                this.country = response.data;                                  //response data 

                //list, voir sous 'axios'
            })
    },

});





