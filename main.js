Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    albums: [],
    genres: ['All'],
    selected: 'All',
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums = response.data.response;
      });
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums.forEach((item, i) => {
          if (!this.genres.includes(item.genre)) {
            this.genres.push(item.genre);
          }
        });

      });
  },
  methods: {
    currentGenre: function () {
      if (this.selected == 'All') {
        return '';
      } else {
        return this.selected;
      }
    }
   }
});
