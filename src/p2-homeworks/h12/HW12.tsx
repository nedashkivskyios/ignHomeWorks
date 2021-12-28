import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeNameType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

function HW12() {
  const themes = useSelector<AppStoreType, Array<ThemeNameType>>(state => state.theme.themes)
  const theme = useSelector<AppStoreType, ThemeNameType>(state => state.theme.theme)
  const dispatch = useDispatch()

  const onChangeTheme = (option: string) => {
    dispatch(changeThemeC(option as ThemeNameType))
  }


  return (
    <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
      <SuperSelect onChangeOption={onChangeTheme} value={theme} options={themes}/>


    </div>
  );
}

export default HW12;
