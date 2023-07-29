import React, {useState} from 'react';
import HookScreen2 from '../HookScreen2'
function HookScreen1() {

   const [data, setData] = useState('name')
    
  return (
    <div>
        <HookScreen2 />
        HookScreen1
        </div>
  )
}

export default HookScreen1