import React from 'react';
import data from '../../data/cloudNex.json';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.4-3.6-8-8-8v2c3.3 0 6 2.7 6 6zm-4 0h2c0-2.2-1.8-4-4-4v2c1.1 0 2 .9 2 2z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.2-8.3L3 2h6.3l4.3 5.7L18.9 2zM17.6 20h1.7L7.5 3.9H5.7L17.6 20z" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4-.1-.8-.1-2.1 0-3l.9-3.8s-.2-.5-.2-1.2c0-1.1.6-2 1.4-2 .7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.7-.2.8.4 1.5 1.2 1.5 1.4 0 2.5-1.5 2.5-3.6 0-1.8-1.3-3.1-3.2-3.1-2.2 0-3.5 1.7-3.5 3.4 0 .7.3 1.4.6 1.8.1.1.1.2 0 .3l-.2 1c0 .1-.1.2-.2.1-1-.5-1.6-1.9-1.6-3.1 0-2.5 1.8-4.8 5.3-4.8 2.8 0 5 2 5 4.5 0 2.8-1.8 5.1-4.2 5.1-.8 0-1.6-.4-1.9-1l.5-2s-.3 1.3-.4 1.5c-.1.5-.4 1.1-.6 1.5 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'facebook': return <FacebookIcon />;
    case 'x': return <XIcon />;
    case 'pinterest': return <PinterestIcon />;
    case 'linkedin': return <LinkedInIcon />;
    default: return null;
  }
};

export default function Topbar() {
  return (
    <div className="bg-[#052136] w-full hidden md:flex">
      <div className="text-white py-3.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[15px] font-sans w-full max-w-7xl mx-auto">
      <div className="flex gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-[#639818] w-7 h-7 rounded-full flex items-center justify-center">
            <PhoneIcon />
          </div>
          <span>{data.topbar.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#639818] w-7 h-7 rounded-full flex items-center justify-center">
            <EmailIcon />
          </div>
          <span>{data.topbar.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#639818] w-7 h-7 rounded-full flex items-center justify-center">
            <LocationIcon />
          </div>
          <span>{data.topbar.address}</span>
        </div>
      </div>
      <div className="flex gap-4">
        {data.topbar.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="border border-white/30 w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#639818] hover:border-[#639818]"
            aria-label={social.platform}
          >
            {getSocialIcon(social.icon)}
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}
