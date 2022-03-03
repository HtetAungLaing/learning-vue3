const app = Vue.createApp({
    data() {
        return {
            title: "vue 3 cdn",
            showTitle: true,
            books: [
                {
                    title: "js book",
                    author: "Mr.js",
                    price: 2000,
                    isFav: true
                },
                {
                    title: "php book",
                    author: "Mr.php",
                    price: 4000,
                    isFav: true
                },
                {
                    title: "laravel book",
                    author: "Mr.laravel",
                    price: 3000,
                    isFav: true
                }
            ],
        }
    },

    methods: {
        myFunc(event, data) {
            console.log(event.type, data);
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        showAll() {
            for (let book of this.books) {
                book.isFav = true;
            };
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    },

});
app.mount('#app');