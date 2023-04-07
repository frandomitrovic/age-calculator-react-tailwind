import { useState } from "react"
import infoIcon from "../assets/images/info.svg"


export default function Footer() {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <footer className="fixed bottom-4 right-4 font-bold text-xs">
        <button className="bg-transparent border-none cursor-pointer transition duration-300 opacity-30 hover:scale-110 hover:opacity-100" onClick={() => setShowInfo(!showInfo)}>
            <img className="align-middle" src={infoIcon} alt="Info" />
        </button>
        <p className={showInfo ? '' : 'info-hidden'}>
            <span>Challenge by </span>
            <a href="https://www.frontendmentor.io?ref=challenge" target='_blank' rel='noreferrer'>
                <span className="purple_text"> Frontend Mentor</span>
            </a>
            <span> - Coded by </span>
            <a href='https://github.com/frandomitrovic/' target='_blank' rel='noreferrer'>
				<span className='purple_text'>Fran</span>
			</a>
        </p>
    </footer>
  )
}
