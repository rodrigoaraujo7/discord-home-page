import "./style.css";
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';

export default function Textarea() {
    return (
        <div className="containerText">
            <img src={image1} />
            <div className="text">
                <h1>An invite-only place with plenty of room to talk</h1>
                <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </div>
    )
}