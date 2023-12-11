import logo from '../../images/png-transparent-pomodoro-technique-timer-android-android-food-tomato-fruit-thumbnail.png'
import s from './Logo.module.css'


const Logo = () => (
    <div>
        <img src={logo} className={s.logo} />
        Hello, world
    </div>
)

export default Logo