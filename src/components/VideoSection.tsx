import React, { useState } from 'react';
import { Play, X, ExternalLink, Instagram, Sparkles, CalendarCheck, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG, VideoItem } from '../data/portfolioData';

export const VideoSection: React.FC = () => {
  const { videos } = PORTFOLIO_CONFIG;
  const activeVideos = videos.filter((v) => v && v.reelUrl && v.reelUrl.trim().length > 0);

  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  if (activeVideos.length === 0) {
    return null;
  }

  const tags = ['All', 'Guided Breathwork', 'Mindful Living', 'Stress Relief'];

  const filteredVideos = selectedTag === 'All' 
    ? activeVideos 
    : activeVideos.filter(v => v.tag.toLowerCase().includes(selectedTag.toLowerCase()) || selectedTag.toLowerCase().includes(v.tag.toLowerCase()));

  const handlePlayVideo = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#contact');
    if (elem) {
      const headerOffset = 84;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="videos" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[1px] bg-[#0284C7]" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
                Practice Library & Micro-Meditations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
              Experience the Practice
            </h2>
            <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
              Step into Sneha's guided world with real micro-practices, breath anchors, and mindful observations. Tap any video to experience the calm.
            </p>
          </div>

          {/* Follow Instagram Button */}
          <a
            id="video-header-instagram-btn"
            href={PORTFOLIO_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E2DAD0] hover:border-[#BAE6FD] text-xs font-semibold tracking-wider uppercase text-[#24211D] hover:text-[#0284C7] transition-all shadow-2xs shrink-0 min-h-[46px]"
          >
            <Instagram className="w-4 h-4 text-[#0284C7]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all min-h-[38px] ${
                selectedTag === tag
                  ? 'bg-[#24211D] text-white shadow-xs'
                  : 'bg-white text-[#6B655B] hover:bg-[#F5EFEB] border border-[#E8E1D5]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              className="bg-white rounded-[26px] overflow-hidden border border-[#E5DFD5] shadow-[0_4px_20px_rgba(40,32,20,0.03)] hover:shadow-[0_16px_36px_rgba(40,32,20,0.07)] hover:border-[#BAE6FD] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div 
                  className="relative aspect-[9/13] bg-[#1A1816] overflow-hidden cursor-pointer group/thumb"
                  onClick={() => handlePlayVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gentle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-[#24211D]/30 pointer-events-none" />

                  {/* Top Meta Pill */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {video.tag}
                    </span>
                    <span className="text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full">
                      {video.duration || 'Reel'}
                    </span>
                  </div>

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 group-hover/thumb:bg-[#0284C7] text-[#24211D] group-hover/thumb:text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover/thumb:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                    <p className="font-serif text-base text-white font-medium line-clamp-2 leading-snug drop-shadow-sm">
                      {video.title}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-normal text-[#24211D] mb-2 leading-snug group-hover:text-[#0284C7] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655B] font-light leading-[1.6]">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#F0EAE0]">
                <button
                  onClick={() => handlePlayVideo(video)}
                  className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center gap-1.5 transition-colors py-1 min-h-[36px]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Practice</span>
                </button>

                <a
                  href={video.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-light text-[#8A8377] hover:text-[#24211D] inline-flex items-center gap-1 transition-colors py-1"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section Conversion Banner */}
        <div className="bg-[#F5EFEB] rounded-[26px] p-7 sm:p-10 border border-[#E2DAD0] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="max-w-xl text-left">
            <h4 className="font-serif text-2xl font-normal text-[#24211D] mb-2">
              Ready for a personalized practice?
            </h4>
            <p className="text-sm text-[#6B655B] font-light leading-relaxed">
              Experience the power of guided meditation and Reiki healing customized specifically to your body and mind.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm shrink-0 min-h-[46px] flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-[#BAE6FD]" />
            <span>Book a Wellness Session</span>
          </button>
        </div>

      </div>

      {/* Video Player Modal */}
      {activeModalVideo && (
        <div 
          id="video-player-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1A1816]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalVideo(null)}
        >
          <div 
            className="relative bg-[#FAF8F5] w-full max-w-md rounded-[28px] overflow-hidden shadow-2xl border border-[#E8E1D5] p-4 sm:p-6 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D5] mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D5CDBD] shadow-2xs shrink-0">
                  <img
                    src={PORTFOLIO_CONFIG.images.heroPortrait}
                    alt="Sneha Bhingare"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#24211D] leading-tight line-clamp-1">
                    {activeModalVideo.title}
                  </h3>
                  <p className="text-[10px] tracking-wider uppercase text-[#0284C7] font-semibold">
                    @{PORTFOLIO_CONFIG.contact.instagramHandle}
                  </p>
                </div>
              </div>

              <button
                id="close-video-player-btn"
                onClick={() => setActiveModalVideo(null)}
                className="p-2 rounded-full bg-[#EFE9DF] hover:bg-[#E2DAD0] text-[#24211D] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame with 9:14 Aspect Ratio */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/13] w-full max-h-[460px] mx-auto shadow-inner flex flex-col items-center justify-center">
              <iframe
                src={`https://www.instagram.com/reel/${activeModalVideo.embedId}/embed/`}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title={activeModalVideo.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-3.5 pt-3 border-t border-[#E8E1D5] flex items-center justify-between gap-3">
              <span className="text-xs text-[#767067] font-light truncate">
                {activeModalVideo.description}
              </span>
              <a
                href={activeModalVideo.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-[11px] font-semibold tracking-wider uppercase transition-all inline-flex items-center gap-1.5 min-h-[36px]"
              >
                <span>Open in IG</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
