import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { FetchData } from '../../Redux/axios';

const PreLoader = () => {
  const dispatch=useDispatch()

  useEffect(() => {
   
    dispatch(FetchData())

  });
  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default PreLoader;
