import {useEffect, useState} from 'react';
export interface Chat {
    time: Date;
    message:string;
}
const MESSAGE_LOCATION = 'POSTS'
export const useChatStorage = () => {
    const [messages, setMessages] = useState<Chat[]>([]);

    useEffect(() => {
        const rawMessages = localStorage.getItem(MESSAGE_LOCATION);
        let existingMessage =  rawMessages? JSON.parse(rawMessages) : [];
        setMessages(existingMessage);
    }, []);

    const postMessage = (chat: Chat) => {
        setMessages((prev) => {
            const newMessages = [...prev, chat];
            localStorage.setItem(MESSAGE_LOCATION, JSON.stringify(newMessages));
            return newMessages;
        });
    }

    return {messages, postMessage}
}