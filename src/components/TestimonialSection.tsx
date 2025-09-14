import { Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const testimonial = {
  name: "Deep Kurmi",
  role: "Founder",
  company: "Deeu Production Agency",
  content: "Working with Trinayan was a game-changer for our agency. From the very first conversation, he took the time to truly understand our business, our audience, and the challenges we were facing. What impressed us most was how he translated our ideas into a website that not only looks professional but also communicates our brand's story perfectly.",
  videoUrl: "/lv_0_20250907184853.mp4"
};

const TestimonialSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set first frame as thumbnail and handle video events
  useEffect(() => {
    const video = videoRef.current;
    const handleVideoEnd = () => setIsPlaying(false);
    
    const captureThumbnail = () => {
      if (video && video.videoWidth > 0) {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Draw the current video frame to canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          // Convert canvas to data URL and set as thumbnail
          const thumbnailUrl = canvas.toDataURL('image/jpeg');
          setThumbnail(thumbnailUrl);
          // Also set as poster for fallback
          if (video) video.poster = thumbnailUrl;
        }
      }
    };

    const handleLoadedMetadata = () => {
      // Seek to 0.1 seconds to ensure we have a valid frame
      if (video) {
        video.currentTime = 0.1;
      }
    };

    const handleTimeUpdate = () => {
      // Once we have a valid time, capture the frame
      if (video && video.currentTime > 0 && !thumbnail) {
        captureThumbnail();
        // Remove the timeupdate listener after capturing the thumbnail
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
      
      // If metadata is already loaded, trigger the process
      if (video.readyState >= 1) { // HAVE_METADATA
        handleLoadedMetadata();
      }
    }
    
    return () => {
      if (video) {
        video.pause();
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [thumbnail]);
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-5 relative">
        {/* Heading Area */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-foreground">Customer</span>{' '}
            <span className="text-muted-foreground">testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            See what our clients say about our work
          </p>
        </div>

        {/* Two-column Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video Testimonial */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative" style={{ paddingBottom: '177.78%' /* 16:9 aspect ratio */ }}>
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg bg-gray-200">
                {/* Thumbnail overlay when not playing */}
                {!isPlaying && thumbnail && (
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover ${!isPlaying ? 'invisible absolute' : ''}`}
                  preload="metadata"
                  onClick={togglePlay}
                  playsInline
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:opacity-100"
                    onClick={togglePlay}
                  >
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Pause Button (shown when video is playing) */}
                {isPlaying && (
                  <div 
                    className="absolute inset-0 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                      <Pause className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Text Testimonial */}
          <div className="bg-card p-8 rounded-xl shadow-md border border-border/50">
            <div className="relative">
              <svg 
                className="w-12 h-12 text-primary/20 mb-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                <p className="text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
              
              <div className="absolute -bottom-6 right-0 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground max-w-xl mx-auto mt-8 text-center text-sm">
          Real results from clients who transformed their online presence with us
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;