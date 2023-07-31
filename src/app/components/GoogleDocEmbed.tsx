import React from 'react';

interface GoogleDocEmbedProps {
  url: string;
}

const GoogleDocEmbed: React.FC<GoogleDocEmbedProps> = ({ url }) => {
  return (
    <div className="flex h-screen w-full">
      <iframe 
        className="w-full h-full" 
        src={url}
        title="Google Doc"
      />
    </div>
  );
}

export default GoogleDocEmbed;

