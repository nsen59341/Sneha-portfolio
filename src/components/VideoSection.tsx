import React from 'react';
import videoOne from '../assets/videos/VID-20260822-WA0002.mp4';
import videoTwo from '../assets/videos/VID-20260822-WA0003.mp4';

const videos = [
  {
    id: 'video-1',
    src: videoOne,
    title: 'Meditation Practice 01',
  },
  {
    id: 'video-2',
    src: videoTwo,
    title: 'Meditation Practice 02',
  },
];

export const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Video Section
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            Watch the Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-[26px] overflow-hidden border border-[#E5DFD5] shadow-[0_4px_20px_rgba(40,32,20,0.03)]"
            >
              <div className="aspect-[9/16] bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="px-5 py-4">
                <h3 className="font-serif text-xl text-[#24211D]">{video.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
