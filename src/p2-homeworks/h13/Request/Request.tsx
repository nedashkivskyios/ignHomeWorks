import React from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {changeCheckedValue, changeSucces, NekoReducerStateType} from "../bll/nekoRequestReducer";
import CircularProgress from "@mui/material/CircularProgress";

export const Request = () => {
  const dispatch = useDispatch()
  const successData = useSelector<AppStoreType, NekoReducerStateType>(state => state.nekoRequest)
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

  const onSendClick = () => {
    dispatch(changeSucces(successData.success))
  }
  const onCheckboxPressedHandler = (checked: boolean) => {
    dispatch(changeCheckedValue(checked))
  }
  return (
    <div>
      {loading ? <CircularProgress/> : (
        <>
          <div><strong>{successData.mesage}</strong></div>
          <div><em>{successData.info}</em></div>
        </>)}

      <div>
        <SuperCheckbox onChangeChecked={onCheckboxPressedHandler} checked={successData.success}/>
        <SuperButton onClick={onSendClick}>Send</SuperButton>
      </div>
    </div>
  );
};
