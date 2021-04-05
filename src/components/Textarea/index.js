import "./style.css";
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';

export default function Textarea() {
    return (
        <>
            <div className="containerText">
                <img src={image1} />
                <div className="text">
                    <h1>An invite-only place with plenty of room to talk</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
            </div>

            <div className="containerText">
                <div className="text">
                    <h1>An invite-only place with plenty of room to talk</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
                <img src={image2} />
            </div>

            <div className="containerText">
                <img src={image3} />
                <div className="text">
                    <h1>An invite-only place with plenty of room to talk</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
            </div>


            <div className="containerText" style={{
                width: '75%'
            }}>
                <center>
                    <h1>Reliable tech for staying close</h1>
                    <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                    <img src={image4} />
                    
                    <div className="margin"></div>

                    <h1>Ready to start your journey?</h1>
                    <button>Donwload for windows</button>
                </center>
            </div>
        </>
    );
}