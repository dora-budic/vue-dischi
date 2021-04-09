Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    albums: [],
    genres: ['All'],
    selected: 'All',
    filter: 'sort',
    albumsAscending: [],
    albumsDescending: []
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums = response.data.response;
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
  },
  computed: {
    albumsComputed: function () {
      if (this.filter == 'min-year') {
        this.albumsAscending = [...this.albums];
        this.albumsAscending.sort(function(a,b) {return a.year - b.year;})
        return this.albumsAscending;
      } else if (this.filter == 'max-year') {
        this.albumsDescending = [...this.albums];
        this.albumsDescending.sort(function(a,b) {return b.year - a.year;})
        return this.albumsDescending;
      } else {
        return this.albums;
      }
    }
  }
});
