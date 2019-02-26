new Vue({
    el: "#main",
    data() {
        return{
            country: [],             //response data in axios, under #main!
            countries: [],     //list, voir sous 'axios'
            males:[],               //list, voir sous 'axios'
            females:[],             //list, voir sous 'axios'
        }   
    },
    methods: {
        filter(type) {      //"filter" is a specific 'method' in Vue, not fariable!
            
            if(type==='Male'){
                this.filteredRobots = this.males;  //"filteredRobots" is defined in the index.html
            }
            else if(type === 'Female'){
                this.filteredRobots = this.females;
            }
            else{
                this.filteredRobots = this.robots;
            }
                        
        }
        
    },
    mounted() {

        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
            .then(response => {
                this.robots = response.data;                                    //response data in axios, under #main!
                this.males = this.robots.filter(r => r.gender ==='Male');       //list, voir sous 'axios'
                this.females = this.robots.filter(r => r.gender ==='Female');   //list, voir sous 'axios'
                this.filteredRobots= this.robots;                               //list, voir sous 'axios'
            })
    },
    
});