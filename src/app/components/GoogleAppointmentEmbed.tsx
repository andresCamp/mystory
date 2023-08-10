import React from 'react';

interface GoogleAppointmentEmbedProps {
  url: string;
}

const GoogleAppointmentEmbed: React.FC<GoogleAppointmentEmbedProps> = ({ url }) => {
  return (
    <div className="flex h-screen w-full bg-white">
      {/* <iframe 
        className="w-full h-full" 
        src={url}
        title="Google Appointment"
      /> */}
        <iframe src={url} 
          // style="border: 0"   
          width="100%" 
          height="100%" 
          // frameborder="0"
        >
        </iframe>
    </div>
  );
}

export default GoogleAppointmentEmbed;

