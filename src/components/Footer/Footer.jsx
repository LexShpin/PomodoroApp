import Social from "../Social/Social"
import TimerButtons from "../TimerButtons/TimerButtons"
import s from './Footer.module.css'

const Footer = () => (
    <footer className={s.footer}>
        <Social />
        <TimerButtons />
    </footer>
)

export default Footer