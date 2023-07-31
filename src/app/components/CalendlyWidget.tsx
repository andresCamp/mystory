'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
        <InlineWidget 
            url="https://calendly.com/mystory-contact/intro-call" 
            styles={{
                height: '700px',
                width: '320px'
                }}
        />
    </div>
  )
}

export default CalendlyWidget





// import React, { useEffect } from 'react';


// const CalendlyWidget: React.FC = () => {

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center"
//     >
//       <div 
//         className="calendly-inline-widget"
//         data-url="https://calendly.com/mystory-contact/intro-call"
//         style={{ minWidth: '320px', height: '700px' }}
//       />
//     </div>
//   );
// }

// export default CalendlyWidget;
