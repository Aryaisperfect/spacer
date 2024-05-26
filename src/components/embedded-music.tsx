import {useState} from 'react';
export const Music = () => {
    const [musicOn, setMusicOn] = useState(false);
    const onToggleMusic = () => {
        setMusicOn((prev) => !prev)
    };
    return(<>
    {musicOn && <iframe 
            id="background-music-iframe"
            src="https://www.youtube.com/embed/atqEhcUJrE0?autoplay=1&loop=1&playlist=atqEhcUJrE0"
            frameBorder="0"
            allow="autoplay;
            encrypted-media"
            allowFullScreen></iframe>}
            <div id="music-controls">
                <button onClick={() => onToggleMusic()}>Play/Pause Music</button>
            </div>
    </>)
}