'use client'
import React from 'react'
import { Widget } from '@typeform/embed-react'

const TypeFormStep1 = () => {
  return (
    <div>
        {/* <Widget id="<WFvrrE0T>" /> */}
        <div className="w-full h-screen">
            <Widget 
                id="WFvrrE0T"
                style={{height: '100%'}}
                inlineOnMobile={true}
                autoFocus={true}
                medium="snippet"
            />
         </div>
    </div>
  )
}

export default TypeFormStep1
