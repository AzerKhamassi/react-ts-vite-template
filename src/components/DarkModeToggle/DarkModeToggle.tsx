import { ChangeEventHandler } from "react";
import { useAppDispatch, useAppSelector } from '../../redux';
import { toggleTheme } from '../../redux/slices/app-slice';
import "./style.scss";


const DarkMode = () => {
    const { theme } = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    const setDark = () => {
        dispatch(toggleTheme('dark'))
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        dispatch(toggleTheme('light'))
        document.documentElement.setAttribute("data-theme", "light");
    };


    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = theme === "dark" || (theme === null && prefersDark);

    if (defaultDark) {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    const toggleThemeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            setDark();
        } else {
            setLight();
        }
    };

    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleThemeHandler}
                    defaultChecked={defaultDark}
                />
                <div className="slider round"></div>
            </label>
            <span>🌙</span>
        </div>
    );
};

export default DarkMode;