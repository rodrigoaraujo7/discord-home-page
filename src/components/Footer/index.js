import './style.css'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="social-medias">
                <h1>Your place to talk</h1>
                <ul>
                    <li><AiOutlineTwitter /></li>
                    <li><AiOutlineInstagram /></li>
                    <li><AiFillFacebook /></li>
                    <li><AiFillYoutube /></li>
                </ul>
            </div>

            <div className="more-informations">
                <>
                <ul>
                    <li className="subTitle">Title</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                </>

                <>
                <ul>
                    <li className="subTitle">Title</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                </>

                <>
                <ul>
                    <li className="subTitle">Title</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                </>

               <>
                <ul>
                    <li className="subTitle">Title</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                </>
            </div>
        </footer>
        </>
    )
}