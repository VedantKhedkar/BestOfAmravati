"use client";
import { useState, useRef } from 'react'; 
import { MdVerified } from 'react-icons/md';// Removed useEffect
import Footer from '@/components/Footer';
import { 
  FaCheckCircle, 
  FaPhone, 
  FaTelegramPlane,
  FaMapMarkerAlt, 
  FaClock,
  FaGlobe, 
  FaPlay, 
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaStar, 
  FaRegStar, 
  FaCamera,
  FaShoppingBag,
  FaVideo,
  FaInfoCircle,
  FaConciergeBell,
  FaWhatsapp,
  FaUtensils,
  FaWifi,
  FaParking,
  FaMusic,
  FaAward,
  FaBolt,
  FaCrown,
  // Social Media Icons
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTripadvisor,
  FaGoogle,
  FaPinterest
} from 'react-icons/fa';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlinePicture } from 'react-icons/ai';

// Black Bold Dot Component
function BlackDot() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-3 h-3 bg-black rounded-full"></div>
    </div>
  );
}

export default function BusinessProfile() {
  const [activeTab, setActiveTab] = useState('about');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  // Initialize with 9 elements (index 0-8) to match video ids 1-8
  const [muted, setMuted] = useState<boolean[]>(Array(9).fill(true));
  const [volume, setVolume] = useState<number[]>(Array(9).fill(0.5));
  const [progress, setProgress] = useState<number[]>(Array(9).fill(0));
  const [fullscreen, setFullscreen] = useState<number | null>(null);
  
  // Changed to Record type for better key-value mapping
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Social Media Links Configuration
  const socialMediaLinks = [
    {
      id: 'facebook',
      icon: <FaFacebookF className="w-4 h-4" />,
      label: 'Facebook',
      url: 'https://facebook.com/spiceroutecafe',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      id: 'instagram',
      icon: <FaInstagram className="w-4 h-4" />,
      label: 'Instagram',
      url: 'https://instagram.com/spiceroutecafe',
      color: 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700',
      textColor: 'text-white'
    },
    {
      id: 'twitter',
      icon: <FaTwitter className="w-4 h-4" />,
      label: 'Twitter',
      url: 'https://twitter.com/spiceroutecafe',
      color: 'bg-blue-400 hover:bg-blue-500',
      textColor: 'text-white'
    },
    {
      id: 'youtube',
      icon: <FaYoutube className="w-4 h-4" />,
      label: 'YouTube',
      url: 'https://youtube.com/c/spiceroutecafe',
      color: 'bg-red-600 hover:bg-red-700',
      textColor: 'text-white'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedinIn className="w-4 h-4" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/company/spiceroutecafe',
      color: 'bg-blue-700 hover:bg-blue-800',
      textColor: 'text-white'
    },
    {
      id: 'tripadvisor',
      icon: <FaTripadvisor className="w-4 h-4" />,
      label: 'TripAdvisor',
      url: 'https://tripadvisor.com/spiceroutecafe',
      color: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-white'
    },
    {
      id: 'google',
      icon: <FaGoogle className="w-4 h-4" />,
      label: 'Google Reviews',
      url: 'https://g.page/r/CSpiceroutecafe/review',
      color: 'bg-gray-800 hover:bg-black',
      textColor: 'text-white'
    },
    {
      id: 'pinterest',
      icon: <FaPinterest className="w-4 h-4" />,
      label: 'Pinterest',
      url: 'https://pinterest.com/spiceroutecafe',
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-white'
    }
  ];

  // Tabs configuration
  const tabs = [
    { id: 'about', label: 'About Us', icon: <FaInfoCircle /> },
    { id: 'services', label: 'Services', icon: <FaConciergeBell/> },
    { id: 'products', label: 'Products', icon: <FaShoppingBag /> },
    { id: 'photos', label: 'Photos', icon: <AiOutlinePicture /> },
    { id: 'videos', label: 'Videos', icon: <FaVideo /> },
    { id: 'awards', label: 'Awards', icon: <FaAward /> }
  ];

  // Services Data with descriptions
  const services = [
    {
      title: "Catering Services",
      description: "Customized catering for corporate events, weddings, and private parties with diverse menu options."
    },
    {
      title: "Event Hosting",
      description: "Perfect venue for celebrations, meetings, and social gatherings with full setup and support."
    },
    {
      title: "Coffee Workshops",
      description: "Learn the art of perfect coffee brewing with our expert barista-led training sessions."
    },
    {
      title: "Home Delivery Service",
      description: "Freshly prepared meals delivered to your doorstep with quick and reliable service."
    },
    {
      title: "Private Dining Experience",
      description: "Exclusive private dining setup for intimate gatherings and special occasions."
    },
    {
      title: "Corporate Catering",
      description: "Tailored catering solutions for office meetings, conferences, and corporate events."
    },
    {
      title: "Specialty Coffee Brewing",
      description: "Master the techniques of specialty coffee preparation with hands-on training."
    },
    {
      title: "Traditional Cooking Classes",
      description: "Learn authentic Maharashtrian recipes from our experienced local chefs."
    }
  ];

  // Products Data with descriptions
  const products = [
    {
      title: "Signature Coffee Beans",
      description: "Premium Arabica beans, freshly roasted in small batches for rich flavor and aroma."
    },
    {
      title: "Spice Route Tea Blends",
      description: "Unique tea blends combining traditional spices with high-quality tea leaves."
    },
    {
      title: "Cookie Gift Box",
      description: "Artisanal cookies in elegant packaging, perfect for gifting and special occasions."
    },
    {
      title: "Spice Mixes Collection",
      description: "Authentic Maharashtrian spice blends for traditional home cooking."
    },
    {
      title: "Artisan Bread Selection",
      description: "Freshly baked artisan breads using traditional methods and quality ingredients."
    },
    {
      title: "Gourmet Chocolate Collection",
      description: "Handcrafted chocolates with unique flavor combinations and premium ingredients."
    },
    {
      title: "Premium Tea Infusions",
      description: "Specialty tea infusions with natural herbs and flowers for health benefits."
    },
    {
      title: "Local Honey & Preserves",
      description: "Locally sourced honey and fruit preserves made with traditional recipes."
    }
  ];

  const photos = [
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  // Updated Video URLs with working sample videos
  const videos = [
    {
      id: 1,
      title: "Cafe Tour & Ambience",
      description: "Experience the warm and cozy atmosphere",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Coffee Brewing Process",
      description: "Watch how we brew signature coffee blends",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "2:15"
    },
    {
      id: 3,
      title: "Live Kitchen Experience",
      description: "See chefs prepare traditional dishes",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4:20"
    },
    {
      id: 4,
      title: "Customer Testimonials",
      description: "Hear what customers love about our cafe",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "5:10"
    },
    // Added more dummy videos
    {
      id: 5,
      title: "Barista Training Session",
      description: "Learn the art of perfect coffee making",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "3:30"
    },
    {
      id: 6,
      title: "Weekend Live Music",
      description: "Enjoy our live music sessions every weekend",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4:15"
    },
    {
      id: 7,
      title: "Traditional Food Making",
      description: "Watch how we prepare authentic dishes",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      thumbnail: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "6:20"
    },
    {
      id: 8,
      title: "Catering Service Preview",
      description: "See our professional catering setup",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "5:45"
    }
  ];

  // Dummy Awards Data
  const awards = [
    {
      id: 1,
      title: "Best Cafe in Maharashtra 2024",
      description: "Awarded by Maharashtra Tourism Board for exceptional service and authentic Maharashtrian cuisine.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2024"
    },
    {
      id: 2,
      title: "Golden Coffee Bean Award",
      description: "Recognized for serving the best filter coffee in Western Maharashtra region.",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2023"
    },
    {
      id: 3,
      title: "Sustainable Business Award",
      description: "Honored for eco-friendly practices and sustainable sourcing of ingredients.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2023"
    },
    {
      id: 4,
      title: "Customer Choice Award",
      description: "Voted #1 Cafe in Amravati by customers for 3 consecutive years.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2022-2024"
    },
    {
      id: 5,
      title: "Traditional Cuisine Preservation",
      description: "Recognized for preserving and promoting authentic Maharashtrian recipes.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2022"
    },
    {
      id: 6,
      title: "Hospitality Excellence Award",
      description: "Awarded for exceptional customer service and warm hospitality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2021"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          i < Math.floor(rating) ? 
            <BsStarFill key={i} className="text-yellow-400" /> :
          i < rating ? 
            <BsStarHalf key={i} className="text-yellow-400" /> :
            <FaRegStar key={i} className="text-gray-300" />
        ))}
      </div>
    );
  };

  // Video player controls
  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play().catch(err => {
          console.error("Error playing video:", err);
          // Fallback to showing thumbnail if video can't play
          setPlayingVideo(null);
        });
        setPlayingVideo(id);
      } else {
        video.pause();
        setPlayingVideo(null);
      }
    }
  };

  const toggleMute = (id: number) => {
    const newMuted = [...muted];
    newMuted[id] = !newMuted[id];
    setMuted(newMuted);
    
    const video = videoRefs.current[id];
    if (video) {
      video.muted = newMuted[id];
    }
  };

  const handleProgress = (id: number) => {
    const video = videoRefs.current[id];
    if (video && !isNaN(video.duration) && video.duration > 0) {
      const newProgress = [...progress];
      newProgress[id] = (video.currentTime / video.duration) * 100;
      setProgress(newProgress);
    }
  };

  const handleSeek = (id: number, value: number) => {
    const video = videoRefs.current[id];
    if (video && !isNaN(video.duration)) {
      video.currentTime = (value / 100) * video.duration;
      const newProgress = [...progress];
      newProgress[id] = value;
      setProgress(newProgress);
    }
  };

  const toggleFullscreen = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen().then(() => {
          setFullscreen(id);
        }).catch(err => {
          console.error("Error entering fullscreen:", err);
        });
      } else {
        document.exitFullscreen().then(() => {
          setFullscreen(null);
        }).catch(err => {
          console.error("Error exiting fullscreen:", err);
        });
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Established in 2018, Spice Route Cafe has become Amravati's favorite destination for coffee lovers 
                  and food enthusiasts. Located in the heart of the city, we blend traditional Maharashtrian flavors 
                  with modern cafe culture to create a unique dining experience.
                </p>
                <p className="text-gray-700 mb-4">
                  Our philosophy is simple: serve authentic food with a contemporary twist, using locally sourced 
                  ingredients while maintaining traditional cooking methods. We take pride in being more than just 
                  a cafe - we're a community space where people connect, work, and create memories.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-amber-900 mb-2">Our Mission</h4>
                <p className="text-gray-700">
                  To preserve and promote Maharashtrian culinary heritage while creating a welcoming space for 
                  community gatherings and meaningful conversations.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-900 mb-2">Our Vision</h4>
                <p className="text-gray-700">
                  To become the most loved cafe in Amravati, known for authentic flavors, warm hospitality, 
                  and sustainable practices.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-900 mb-2">Our Values</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Authenticity in every dish</li>
                  <li>Warm hospitality</li>
                  <li>Local sourcing</li>
                  <li>Community focus</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Cafe Features</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <FaWifi className="text-3xl text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Free WiFi</div>
                  <div className="text-gray-600">High-speed internet</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <FaParking className="text-3xl text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Parking</div>
                  <div className="text-gray-600">Ample space available</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <FaMusic className="text-3xl text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Live Music</div>
                  <div className="text-gray-600">Weekends 7-9 PM</div>
                </div>
                
            <div className="text-center p-4 bg-white rounded-lg shadow">
                  <FaUtensils className="text-3xl text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Outdoor</div>
                  <div className="text-gray-600">Garden seating</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Achievements</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-amber-600">5+</div>
                  <div className="text-gray-600">Years Serving</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-amber-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600">Menu Items</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-amber-600">4.8</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Our Services</h3>
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
                Professional Services
              </div>
            </div>
            
            {/* Simple vertical list with themed left border */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <BlackDot />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-red-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <FaShoppingBag className="text-2xl text-amber-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Products</h3>
                  <p className="text-gray-600">Premium quality products available for purchase</p>
                </div>
              </div>
            </div>
            
            {/* Simple vertical list with themed left border */}
            <div className="space-y-6">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 border-l-4 border-purple-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <BlackDot />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h4>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'photos':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cafe Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src={photo} 
                    alt={`Cafe Gallery ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <FaCamera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'videos':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cafe Experience Videos</h3>
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
                Play & Explore
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {/* Video Container */}
                    <div className="relative h-48 overflow-hidden bg-black">
                      {/* Fixed video element with conditional ref assignment */}
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[video.id] = el;
                          }
                        }}
                        src={video.videoUrl}
                        poster={video.thumbnail}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        loop
                        muted={muted[video.id]}
                        onTimeUpdate={() => handleProgress(video.id)}
                        onClick={() => togglePlay(video.id)}
                        onError={(e) => {
                          console.error(`Error loading video ${video.id}:`, e);
                          // Hide video player on error
                          const videoElement = e.target as HTMLVideoElement;
                          videoElement.style.display = 'none';
                        }}
                        onLoadedData={() => {
                          console.log(`Video ${video.id} loaded successfully`);
                        }}
                      />
                      
                      {/* Fallback Thumbnail */}
                      {playingVideo !== video.id && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-cover bg-center"
                          style={{ backgroundImage: `url(${video.thumbnail})` }}
                          onClick={() => togglePlay(video.id)}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-40" />
                          <div className="relative w-16 h-16 bg-amber-600 bg-opacity-80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <FaPlay className="text-white text-xl ml-1" />
                          </div>
                        </div>
                      )}
                      
                      {/* Video Overlay Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePlay(video.id);
                            }}
                            className="text-white hover:text-amber-300 transition-colors"
                          >
                            {playingVideo === video.id ? (
                              <FaPause className="w-5 h-5" />
                            ) : (
                              <FaPlay className="w-5 h-5" />
                            )}
                          </button>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMute(video.id);
                              }}
                              className="text-white hover:text-amber-300 transition-colors"
                            >
                              {muted[video.id] ? (
                                <FaVolumeMute className="w-5 h-5" />
                              ) : (
                                <FaVolumeUp className="w-5 h-5" />
                              )}
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFullscreen(video.id);
                              }}
                              className="text-white hover:text-amber-300 transition-colors"
                            >
                              <FaExpand className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-2">
                          <div className="h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 const rect = e.currentTarget.getBoundingClientRect();
                                 const clickPosition = (e.clientX - rect.left) / rect.width;
                                 handleSeek(video.id, clickPosition * 100);
                               }}
                          >
                            <div 
                              className="h-full bg-amber-500 transition-all duration-100"
                              style={{ width: `${progress[video.id] || 0}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Time Display */}
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{video.title}</h4>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                    
                    {/* Current Time Display */}
                    {playingVideo === video.id && videoRefs.current[video.id] && (
                      <div className="mt-2 text-xs text-gray-500">
                        {formatTime(videoRefs.current[video.id]!.currentTime)} / {video.duration}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'awards':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <FaAward className="text-4xl text-yellow-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Awards & Recognition</h3>
                  <p className="text-gray-600">Celebrating excellence in food, service, and sustainability</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award) => (
                <div key={award.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {award.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <FaAward className="text-yellow-500 mt-1 flex-shrink-0" />
                      <h4 className="text-lg font-bold text-gray-900">{award.title}</h4>
                    </div>
                    <p className="text-gray-600">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Action handlers
  const handleCallNow = () => {
    window.open('tel:+917212567890', '_blank');
  };

  const handleGetDirections = () => {
    const address = "Shop No. 12, Sai Nagar, Near D-Mart, Amravati, Maharashtra 444601";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-[#faf5ff] to-[#fff1f2]">
      {/* 🔮 Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-2xl shadow-xl p-6 md:p-8 mb-8 backdrop-blur-sm bg-opacity-90">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Profile Photo */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto lg:mx-0">
                  <img 
                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Spice Route Cafe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cafe Info */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-4 animate-shine">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Spice Route Cafe
                  </h1>
                  {/* Instagram Verified Badge (Blue Tick) */}
                 <MdVerified className="text-blue-600 h-6 w-6 md:w-7 md:h-7 translate-y-[2.5px] text-lg animate-shine" />
                </div>
              </div>

              <div className="flex items-center gap-1 mb-6 ">
                <div className="flex items-center gap-2">
                  <BsStarFill className="text-yellow-400 text-xl" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="text-gray-600">(892 reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  <FaCheckCircle className="text-green-600" />
                  <span>Trusted Listing</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium flex items-center gap-2">
                  <FaCrown className="text-purple-600" />
                  Premium Service
                </span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium flex items-center gap-2">
                  <FaBolt className="text-orange-600" />
                  Fast Service
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium flex items-center gap-2">
                  <FaAward className="text-yellow-600" />
                  Award Winning 
                </span>
              </div>

              <div className="flex items-start gap-1 mb-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <div>
                  <p className="text-gray-700">Shop No. 12, Sai Nagar, Near D-Mart</p>
                  <p className="text-gray-700">Amravati, Maharashtra 444601</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium py-1">
                <FaClock />
                <span>Open Now • 7:00 AM - 11:00 PM</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 py-2 mb-6">
                <button 
                  onClick={handleCallNow}
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="font-semibold">Call Now</span>
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/917212567890', '_blank')}
                  className="flex items-center gap-1 border-2 border-green-600 bg-green-600 text-white px-2 py-2 rounded-xl hover:bg-green-700 transition duration-300"
                >
                  <FaWhatsapp />
                  <span className="font-semibold">WhatsApp </span>
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const subject = `Enquiry for Spice Route Cafe`;
                    const body = `Hello, I'm interested in your services. Please contact me regarding Spice Route Cafe.\n\nMy contact details:\nName: \nPhone: \nEmail: \n\nMessage: `;
                    window.location.href = `mailto:info@spiceroutecafe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                  className="flex items-center gap-1 bg-black border-2 border-black text-white px-2 py-2 rounded-xl hover:bg-slate-800 transition duration-300"
                >
                  <FaTelegramPlane className="w-5 h-5" />
                  <span className="font-semibold">Enquiry</span>
                </button>
                <button 
                  onClick={() => window.open('https://www.spiceroutecafe.com', '_blank')}
                  className="flex items-center gap-1 bg-blue-600 border-2 border-blue-600 text-white px-2 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                >
                  <FaGlobe className="w-5 h-5" />
                  <span className="font-semibold">Visit Website</span>
                </button>
                <button 
                  onClick={handleGetDirections}
                  className="flex items-center gap-1 bg-amber-600 border-2 border-amber-600 text-white px-2 py-2 rounded-xl hover:bg-amber-700 transition duration-300"
                >
                  <FaMapMarkerAlt />
                  <span className="font-semibold">Directions</span>
                </button>
              </div>

              {/* Social Media Icons Section - ONLY CIRCULAR ICONS */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-semibold">Follow us:</span>
                  <div className="flex flex-wrap gap-2">
                    {socialMediaLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${social.color} ${social.textColor} transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95`}
                        aria-label={`Follow us on ${social.label}`}
                        title={`Follow us on ${social.label}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 backdrop-blur-sm bg-opacity-90">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium text-lg transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6 md:p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Simplified Footer with same theme as header */}
      <Footer/>
    </div>
  );
}