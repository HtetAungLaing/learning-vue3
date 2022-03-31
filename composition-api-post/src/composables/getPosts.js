import { ref } from "vue";
import { db } from "../firebase/config";
let getPost = () => {
    let posts = ref([]);
    let error = ref(null);
    let load = async () => {
        try {
            let res = await db.collection('posts').get();
            console.log(res.docs[0].data());
        } catch (err) {
            error.value = err.message;
        }
    }

    return { posts, error, load }
}

export default getPost;