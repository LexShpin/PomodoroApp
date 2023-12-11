import Logo from "../Logo/Logo"
import Pomotabs from "../Pomotabs/Pomotabs"
import Settings from "../Settings/Settings"
import Username from "../Username/Username"
import s from "./Header.module.css"

const Header = () => (
    <div className={s.header}>
        {/* <Logo /> */}
        <Username />
        <Pomotabs />
        <Settings />
    </div>
)

export default Header