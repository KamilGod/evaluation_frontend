
new Vue({
    el: '#container3',
    data() {
        return{
           country: [] ,
           trip:[]
        }
        
    },
    methods: {
        filter(type) {      //"filter" is a specific 'method' in Vue, not fariable!
            
            if(type==='France'){
                this.trip = this.france;  //"filteredRobots" is defined in the index.html
            }
            else if(type === 'Spain'){
                this.trip = this.spain;
            }
            else if(type === 'Belgium'){
                this.trip = this.belgium;
            }
            else{
                this.trip = this.robots;
            }
                        
        }
        
    },
    created() {


        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
            .then(response => {
                this.country = response.data;  
                this.france = this.country.filter(r => r.gender ==='France');       //list, voir sous 'axios'
                this.spain = this.country.filter(r => r.gender ==='Spain'); 
                this.belgium = this.country.filter(r => r.gender ==='Belgium');                               //response data 
                this.trip= this.country; 
                //list, voir sous 'axios'
            })
    },

});





