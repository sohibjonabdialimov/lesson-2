import React, { memo, useContext } from 'react'
import { AboutChannelContext } from '../../context/Context';
import "./style.css";

const Aside = () => {
  const data = useContext(AboutChannelContext);
  return (
    <div className='aside'>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQanGl0m-aX34uLTQ2OWQsKpoW7ZTzlkusyA&usqp=CAU" alt="" /> */}
      <img src="https://3catslabs.com/wp-content/uploads/2020/12/Social-Media-Image-Sizes-2021-Cover-01-1912x717.jpg" alt="" />
    </div>
  )
}

export default memo(Aside);