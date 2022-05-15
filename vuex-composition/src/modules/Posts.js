import axios from "axios"

export default {
    state: {
        appName: "vue-x with compostion API",
        posts: [],
    },
    getters: {
        GET_POSTS: (state) => state.posts,
        postsCount: (state) => state.posts.length,
    },
    mutations: {
        setPosts: (state, posts) => state.posts = posts,
        searchPost: (state, search) => state.posts = state.posts.filter((post) => post.title.includes(search) || post.body.includes(search)),
    },
    actions: {
        getPosts: async (context) => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            context.commit("setPosts", res.data);

        },
        limitPosts: async ({ commit }, limit) => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);
            commit('setPosts', res.data);
        },
        searchPost: async (context, search) => {
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            context.commit("setPosts", res.data);
            context.commit('searchPost', search);
        }
    },
}