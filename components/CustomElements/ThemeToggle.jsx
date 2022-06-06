import React, { useState } from 'react'
import { lightModeIcon, darkModeIcon } from '../../images'
import style from '../../styles/CustomElements.module.css';

const ThemeToggle = () => {

 const [themeType, setThemeType] = useState('light');

 const currentTheme = theme === 'system' ? systemTheme : theme;
    
  return (
    <div className={style.theme__cnt} >
        <div onClick={()=>{
            setThemeType('light');
            //setTheme('light');
        }} className={style.light__mode} style={{ borderRadius: themeType === 'light'&& '999px', backgroundColor: themeType === 'light'&& '#fff' }} >
            <img src={lightModeIcon} />
        </div>
        <div onClick={()=> {
            setThemeType('dark');
            //setTheme('dark');
        }} style={{ borderRadius: themeType === 'dark'&& '999px', backgroundColor: themeType === 'dark'&& '#fff' }} className={style.dark__mode} >
            <img src={darkModeIcon} />
        </div>
    </div>
  )
}

export default ThemeToggle