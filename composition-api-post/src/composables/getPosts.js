import { ref } from "vue";
let getPost = () => {
    let posts = ref([]);
    let error = ref(null);
    let load = async () => {
        try {
            // await new Promise((resolve, reject) => {
            //     setTimeout(resolve, 1000);
            // })
            let response = await fetch(" http://localhost:3000/posts/");
            if (response.status !== 200) {
                throw new Error("Error while proceeding request");
            }
            let datas = await response.json();
            posts.value = datas.reverse();
        } catch (err) {
            error.value = err.message;
        }
    }

    return { posts, error, load }
}

export default getPost;