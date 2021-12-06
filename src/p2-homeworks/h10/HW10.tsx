import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
  const dispatch = useDispatch()

  const setLoading = () => {
    // dispatch
    dispatch(loadingAC(true))
    // setTimeout
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
    console.log('loading...')
  };

  return (
    <div>
      {loading
        ? (
          <CircularProgress/>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
    </div>
  )
}

export default HW10
