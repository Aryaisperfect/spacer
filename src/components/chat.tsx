import { useState } from 'react';
import { useChatStorage, Chat as ChatType } from '../storage/useChatStorage';
import styles from './chat.module.css';
import { Music } from './embedded-music';
const defaultMessage: ChatType = {
    message:'',
    time: new Date()

}
export const Chat = () => {
    const {messages = [], postMessage} = useChatStorage();
    const [post, setNewPost] = useState<ChatType>(defaultMessage);

    return (
        <>
            <main>
                {messages && messages.map((post) => {
                    return <div>
                            <textarea readOnly>{post.message}</textarea>
                        </div>
                })}
                <div>
                    <input type="text" placeholder='What you have in your mind' value={post.message} onChange={(e) => {
                        setNewPost({message: e.target.value, time: new Date()});
                    }}></input>
                    <button disabled={!post.message} className={styles.button} onClick={() => {
                        post && postMessage(post);
                        setNewPost(defaultMessage)
                    }}>Add Post</button>
                </div>
                <section id="blog-posts">
                </section>
            </main>
            <Music></Music>
        </>
    )
}