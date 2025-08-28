"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Download, Share2, X, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, Rewind, FastForward } from "lucide-react";

interface MediaItem {
    id: number;
    url: string;
    title: string;
}

interface ImageCardProps {
    item: MediaItem;
    onClick: (item: MediaItem) => void;
}

interface VideoCardProps {
    item: MediaItem;
    onClick: (item: MediaItem) => void;
}

interface InfiniteCarouselProps {
    items: MediaItem[];
    onItemClick: (item: MediaItem) => void;
    title: string;
}

interface VideoGridProps {
    videos: MediaItem[];
    onVideoClick: (video: MediaItem) => void;
}

interface ImageModalProps {
    selectedImage: MediaItem | null;
    imageZoom: number;
    zoomIn: () => void;
    zoomOut: () => void;
    closeImageModal: () => void;
    downloadMedia: (url: string, filename: string) => void;
    shareMedia: (url: string, title: string) => void;
}

interface VideoModalProps {
    selectedVideo: MediaItem | null;
    isPlaying: boolean;
    setIsPlaying: any;
    isMuted: boolean;
    volume: number;
    togglePlay: () => void;
    toggleMute: () => void;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    closeVideoModal: () => void;
    downloadMedia: (url: string, filename: string) => void;
    shareMedia: (url: string, title: string) => void;
}

const ImageCard = memo(({ item, onClick }: ImageCardProps) => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-80 mr-6" onClick={() => onClick(item)}>
        <div className="w-full h-[400px] relative">
            <img src={item.url} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-8 h-8 text-white" />
            </div>
        </div>
        <div className="p-4">
            <h4 className="font-semibold text-[#121212] truncate">{item.title}</h4>
        </div>
    </motion.div>
));

ImageCard.displayName = "ImageCard";

const VideoCard = memo(({ item, onClick }: VideoCardProps) => (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden" onClick={() => onClick(item)}>
        <div className="w-full h-[400px] relative">
            <video src={item.url} className="w-full h-full object-cover" muted autoPlay loop playsInline preload="metadata" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
            </div>
        </div>
        <div className="p-4">
            <h4 className="font-semibold text-[#121212] truncate">{item.title}</h4>
        </div>
    </motion.div>
));

VideoCard.displayName = "VideoCard";

const InfiniteCarousel = memo(({ items, onItemClick, title }: InfiniteCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const duplicatedItems = [...items, ...items, ...items];

    useEffect(() => {
        if (!isHovered && items.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, items.length]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }, [items.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const handleDotClick = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    if (items.length === 0) return null;

    return (
        <div className="mb-12 w-full items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold text-[#121212] mb-6 flex items-center gap-2">
                {title}
            </h3>
            <div className="relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <motion.div className="flex" animate={{ x: -(currentIndex * (320 + 24)) }} transition={{ duration: 0.8, ease: "easeInOut", }} >
                    {duplicatedItems.map((item, index) => (
                        <ImageCard key={`${item.id}-${Math.floor(index / items.length)}`} item={item} onClick={onItemClick} />
                    ))}
                </motion.div>
                <button onClick={handlePrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#121212] bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-colors z-10">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#121212] bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-colors z-10">
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex justify-center mt-4 space-x-2">
                    {items.map((_, index: number) => (
                        <button key={index} onClick={() => handleDotClick(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-[#9CAA7A]" : "bg-gray-300"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
);

InfiniteCarousel.displayName = "InfiniteCarousel";

const VideoGrid = memo(({ videos, onVideoClick }: VideoGridProps) => {
    if (videos.length === 0) return null;

    return (
        <div className="mb-12 flex-col items-center justify-center flex w-full">
            <h3 className="text-2xl font-semibold text-[#121212] mb-6 flex items-center gap-2">
                Promo Videos
            </h3>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-6">
                {videos.map((item: MediaItem) => (
                    <VideoCard key={item.id} item={item} onClick={onVideoClick} />
                ))}
            </div>
        </div>
    );
});

VideoGrid.displayName = "VideoGrid";

const ImageModal = memo(
    ({ selectedImage, imageZoom, zoomIn, zoomOut, closeImageModal, downloadMedia, shareMedia }: ImageModalProps) => (
        <AnimatePresence>
            {selectedImage && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeImageModal}>
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative w-auto h-full" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                            <button onClick={zoomOut} className="bg-[#121212] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                                <ZoomOut className="w-5 h-5" />
                            </button>
                            <button onClick={zoomIn} className="bg-[#121212] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                                <ZoomIn className="w-5 h-5" />
                            </button>
                            <button onClick={() => downloadMedia(selectedImage?.url, selectedImage?.title)} className="bg-[#121212] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                            <button onClick={() => shareMedia(selectedImage?.url, selectedImage?.title)} className="bg-[#121212] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button onClick={closeImageModal} className="bg-[#121212] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <img src={selectedImage?.url} alt={selectedImage?.title} className="max-w-full max-h-full object-contain transition-transform duration-200" style={{ transform: `scale(${imageZoom})` }} />
                        <div className="absolute bottom-4 left-4 bg-[#121212] bg-opacity-70 text-white px-4 py-2 rounded-lg">
                            <h3 className="font-semibold">{selectedImage?.title}</h3>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
);

ImageModal.displayName = "ImageModal";

const VideoModal = memo(
    ({ selectedVideo, isPlaying, setIsPlaying, isMuted, volume, togglePlay, toggleMute, handleVolumeChange, closeVideoModal, downloadMedia, shareMedia }: VideoModalProps) => {
        const videoRef = useRef<HTMLVideoElement>(null);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);

        const formatTime = useCallback((seconds: number): string => {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
        }, []);

        useEffect(() => {
            if (videoRef.current && selectedVideo) {
                if (isPlaying) {
                    videoRef.current.play().catch((error) => console.error("Video play failed:", error));
                } else {
                    videoRef.current.pause();
                }
            }
        }, [isPlaying, selectedVideo]);

        const handleVideoLoad = useCallback(() => {
            if (videoRef.current) {
                videoRef.current.volume = volume;
                videoRef.current.muted = isMuted;
                setDuration(videoRef.current.duration || 0);
            }
        }, [volume, isMuted]);

        const handleTimeUpdate = useCallback(() => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, []);

        const handleSeekChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            if (videoRef.current) {
                const newTime = parseFloat(e.target.value);
                videoRef.current.currentTime = newTime;
                setCurrentTime(newTime);
            }
        }, []);

        const seekBackward = useCallback(() => {
            if (videoRef.current) {
                const newTime = Math.max(0, videoRef.current.currentTime - 10);
                videoRef.current.currentTime = newTime;
                setCurrentTime(newTime);
            }
        }, []);

        const seekForward = useCallback(() => {
            if (videoRef.current) {
                const newTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
                videoRef.current.currentTime = newTime;
                setCurrentTime(newTime);
            }
        }, []);

        const handlePlay = useCallback(() => setIsPlaying(true), []);
        const handlePause = useCallback(() => setIsPlaying(false), []);

        return (
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeVideoModal}>
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative flex flex-col items-center justify-center w-full max-w-4xl" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                            <video ref={videoRef} src={selectedVideo.url} className="w-auto h-[500px] rounded-lg" controls={false} autoPlay onLoadedData={handleVideoLoad} onPlay={handlePlay} onPause={handlePause} onTimeUpdate={handleTimeUpdate} />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <div className="flex flex-wrap justify-center items-center gap-4 text-white">
                                    <button onClick={seekBackward} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        <Rewind className="w-6 h-6" />
                                    </button>

                                    <button onClick={togglePlay} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    </button>

                                    <button onClick={seekForward} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        <FastForward className="w-6 h-6" />
                                    </button>

                                    <div className="flex items-center gap-2 w-20">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>/</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>

                                    <input type="range" min="0" max={duration || 100} step="0.1" value={currentTime} onChange={handleSeekChange} className="flex-1 accent-[#9CAA7A]" />

                                    <button onClick={toggleMute} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                    </button>

                                    <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} className="w-20 accent-[#9CAA7A]" />

                                    <button onClick={() => downloadMedia(selectedVideo.url, selectedVideo.title)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>

                                    <button onClick={() => shareMedia(selectedVideo.url, selectedVideo.title)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>

                                    <button onClick={closeVideoModal} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4 bg-[#121212] bg-opacity-70 text-white px-4 py-2 rounded-lg">
                                <h3 className="font-semibold">{selectedVideo.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

VideoModal.displayName = "VideoModal";

const CaseStudies = () => {
    const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
    const [imageZoom, setImageZoom] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);

    const videoRef = useRef<HTMLVideoElement>(null);

    const clientsData: { id: number; name: string; audienceEngagement: MediaItem[]; analytics: MediaItem[]; videos: MediaItem[]; }[] = [
        {
            id: 1,
            name: "Morning Fresh Take a Pause Campaign",
            audienceEngagement: [
                {
                    id: 6,
                    url: "/works/morningfresh/engagement/01.jpg",
                    title: "Morning Fresh Instagram Profile Page"
                },
                {
                    id: 7,
                    url: "/works/morningfresh/engagement/02.jpg",
                    title: "Morning Fresh Instagram Post"
                },
                {
                    id: 8,
                    url: "/works/morningfresh/engagement/03.jpg",
                    title: "Morning Fresh Instagram Post Comment Section 01"
                },
                {
                    id: 9,
                    url: "/works/morningfresh/engagement/04.jpg",
                    title: "Morning Fresh Instagram Post Comment Section 02"
                },
                {
                    id: 10,
                    url: "/works/morningfresh/engagement/05.jpg",
                    title: "Morning Fresh Instagram Post Comment Section 04"
                },
                {
                    id: 11,
                    url: "/works/morningfresh/engagement/06.jpg",
                    title: "Morning Fresh Instagram Post Comment Section 04"
                }
            ],
            analytics: [],
            videos: []
        },
        {
            id: 2,
            name: "Kerry Gold",
            audienceEngagement: [
                {
                    id: 12,
                    url: "/works/kerrygold/engagement/01.jpg",
                    title: "Kerry Gold Instagram Post Slide 01"
                },
                {
                    id: 13,
                    url: "/works/kerrygold/engagement/02.jpg",
                    title: "Kerry Gold Instagram Post Slide 02"
                },
                {
                    id: 14,
                    url: "/works/kerrygold/engagement/03.jpg",
                    title: "Kerry Gold Instagram Post Comment Section 01"
                },
                {
                    id: 15,
                    url: "/works/kerrygold/engagement/04.jpg",
                    title: "Kerry Gold Instagram Post"
                },
                {
                    id: 48,
                    url: "/works/kerrygold/engagement/05.jpg",
                    title: "Kerry Gold Instagram Post Comment Section 02"
                },
                {
                    id: 16,
                    url: "/works/kerrygold/engagement/06.jpg",
                    title: "Kerry Gold Instagram Post Comment Section 03"
                }
            ],
            analytics: [],
            videos: []
        },
        {
            id: 3,
            name: "Premier Cool",
            audienceEngagement: [
                {
                    id: 17,
                    url: "/works/premiercool/engagement/01.jpg",
                    title: "Premier Cool Instagram Post"
                },
                {
                    id: 18,
                    url: "/works/premiercool/engagement/02.jpg",
                    title: "Premier Cool Instagram Post Comment Section 01"
                },
                {
                    id: 19,
                    url: "/works/premiercool/engagement/03.jpg",
                    title: "Premier Cool Instagram Post Comment Section 02"
                },
                {
                    id: 20,
                    url: "/works/premiercool/engagement/04.jpg",
                    title: "Premier Cool Instagram Post Comment Section 03"
                }
            ],
            analytics: [],
            videos: [
                {
                    id: 21,
                    url: "/works/premiercool/videos/01.mp4",
                    title: "Premier Cool Promo Video"
                },
                {
                    id: 22,
                    url: "/works/premiercool/videos/02.mp4",
                    title: "Premier Cool November Challenge Video"
                }
            ]
        },
        {
            id: 4,
            name: "Access Bank",
            audienceEngagement: [
                {
                    id: 23,
                    url: "/works/access/engagement/01.jpg",
                    title: "Access Bank Instagram Post 01"
                },
                {
                    id: 24,
                    url: "/works/access/engagement/02.jpg",
                    title: "Access Bank Instagram Post 02"
                },
                {
                    id: 25,
                    url: "/works/access/engagement/03.jpg",
                    title: "Access Bank Instagram Post 03"
                }
            ],
            analytics: [
                {
                    id: 27,
                    url: "/works/access/analytics/01.jpg",
                    title: "Access Bank Campaign KPI Performance"
                },
                {
                    id: 28,
                    url: "/works/access/analytics/02.jpg",
                    title: "Access Bank Google AD Performance"
                }
            ],
            videos: []
        },
        {
            id: 5,
            name: "The Shinguards",
            audienceEngagement: [
                {
                    id: 29,
                    url: "/works/shinguards/engagement/01.jpg",
                    title: "The Shinguards Instagram Profile Page"
                },
                {
                    id: 30,
                    url: "/works/shinguards/engagement/02.jpg",
                    title: "The Shinguards Content Post 02"
                },
                {
                    id: 31,
                    url: "/works/shinguards/engagement/03.jpg",
                    title: "The Shinguards Content Post 02"
                },
                {
                    id: 32,
                    url: "/works/shinguards/engagement/04.jpg",
                    title: "The Shinguards Content Post 03"
                }
            ],
            analytics: [
                {
                    id: 33,
                    url: "/works/shinguards/analytics/01.jpg",
                    title: "The Shinguards Instagram Reel Insights 01"
                },
                {
                    id: 34,
                    url: "/works/shinguards/analytics/02.jpg",
                    title: "The Shinguards Instagram Reel Insights 02"
                },
                {
                    id: 35,
                    url: "/works/shinguards/analytics/03.jpg",
                    title: "The Shinguards Instagram Post Insights 01"
                },
                {
                    id: 36,
                    url: "/works/shinguards/analytics/04.jpg",
                    title: "The Shinguards Instagram Post Insights 02"
                },
                {
                    id: 37,
                    url: "/works/shinguards/analytics/05.jpg",
                    title: "The Shinguards Instagram Reel and Post Views Insights"
                },
                {
                    id: 38,
                    url: "/works/shinguards/analytics/06.jpg",
                    title: "The Shinguards Facebook Views, Content Interations, Messaging Contacts and Follows Insights"
                },
                {
                    id: 39,
                    url: "/works/shinguards/analytics/07.jpg",
                    title: "The Shinguards Meta Instagram Top Post by Interactions Insights"
                },
                {
                    id: 40,
                    url: "/works/shinguards/analytics/08.jpg",
                    title: "The Shinguards Meta Instagram Stories Overview Insights"
                },
                {
                    id: 41,
                    url: "/works/shinguards/analytics/08.jpg",
                    title: "The Shinguards Instagram Reel Insights 01"
                },
                {
                    id: 42,
                    url: "/works/shinguards/analytics/09.jpg",
                    title: "The Shinguards Instagram Views, Content Interations, Messaging Contacts and Follows Insights"
                },
                {
                    id: 43,
                    url: "/works/shinguards/analytics/10.jpg",
                    title: "The Shinguards Meta Instagram Content Overview Insights"
                },
                {
                    id: 44,
                    url: "/works/shinguards/analytics/11.jpg",
                    title: "The Shinguards Meta Instagram Top Stories by View Insights"
                },
                {
                    id: 46,
                    url: "/works/shinguards/analytics/13.jpg",
                    title: "The Shinguards Meta Facebook Content Overview Insights"
                },
                {
                    id: 47,
                    url: "/works/shinguards/analytics/14.jpg",
                    title: "The Shinguards Meta Facebook Top Reels by View Insights"
                }
            ],
            videos: []
        },
        {
            id: 48,
            name: "KLEEN UP",
            audienceEngagement: [],

            analytics: [
                {
                    id: 51,
                    url: "/works/kleenup/analytics/01.jpg",
                    title: "KLEEN UP Instagram Reels, Stories, Post and Live Videos Insights"
                },
                {
                    id: 52,
                    url: "/works/kleenup/analytics/02.jpg",
                    title: "KLEEN UP Instagram AD Overview Insights 01"
                },
                {
                    id: 53,
                    url: "/works/kleenup/analytics/03.jpg",
                    title: "KLEEN UP Instagram AD Overview Insights 02"
                },
                {
                    id: 54,
                    url: "/works/kleenup/analytics/04.jpg",
                    title: "KLEEN UP Instagram Post Insights"
                },
                {
                    id: 55,
                    url: "/works/kleenup/analytics/05.jpg",
                    title: "KLEEN UP Instagram Professional Dashboard Insights"
                },
                {
                    id: 56,
                    url: "/works/kleenup/analytics/06.jpg",
                    title: "KLEEN UP Instagram Posts Views"
                },
                {
                    id: 58,
                    url: "/works/kleenup/analytics/08.jpg",
                    title: "KLEEN UP Instagram AD Overview 3 Apr - 1 Jul Insights"
                },
            ],
            videos: [
                {
                    id: 50,
                    url: "/works/kleenup/videos/01.mp4",
                    title: "KLEEN UP Product Showcasing Video"
                },
                {
                    id: 49,
                    url: "/works/kleenup/videos/02.mp4",
                    title: "KLEEN UP Product Promo Video"
                }
            ]
        }
    ];

    const handleImageModal = useCallback((image: MediaItem) => {
        setSelectedImage(image);
        setImageZoom(1);
    }, []);

    const handleVideoModal = useCallback((video: MediaItem) => {
        setSelectedVideo(video);
        setIsPlaying(true);
    }, []);

    const togglePlay = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    const toggleMute = useCallback(() => {
        setIsMuted((prev) => !prev);
    }, []);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    }, []);

    const downloadMedia = useCallback(async (url: string, filename: string) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = filename || "media";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Download failed:", error);
        }
    }, []);

    const shareMedia = useCallback(async (url: string, title: string) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url,
                });
            } catch (error) {
                console.error("Share failed:", error);
            }
        } else {
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
        }
    }, []);

    const closeImageModal = useCallback(() => setSelectedImage(null), []);
    const closeVideoModal = useCallback(() => {
        setSelectedVideo(null);
        setIsPlaying(false);
    }, []);

    const zoomIn = useCallback(() => setImageZoom((prev) => Math.min(3, prev + 0.25)), []);
    const zoomOut = useCallback(() => setImageZoom((prev) => Math.max(0.5, prev - 0.25)), []);

    const handleVideoLoad = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    useEffect(() => {
        if (selectedVideo && videoRef.current) {
            handleVideoLoad();
        }
    }, [selectedVideo, handleVideoLoad]);

    return (
        <>
            <div className="">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden mx-auto">
                    <div className="flex flex-col items-center justify-center gap-y-3 mb-12">
                        <motion.span className="text-xl text-center font-bold md:text-3xl bg-gradient-to-r from-[#A8B5A2] to-[#7A8A6F] bg-clip-text text-transparent" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
                            Qudus's Case Studies: Real Results, Real Impact
                        </motion.span>
                        <motion.p className="max-w-3xl mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
                            Showcasing success stories of transformative digital marketing strategies and innovative creative solutions
                        </motion.p>
                    </div>
                    {clientsData.map((client, clientIndex) => (
                        <motion.div key={client?.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: clientIndex * 0.1 }} className="pt-8 w-full flex flex-col items-center justify-center">
                            <h2 className="text-lg md:text-2xl font-bold border-b-4 border-b-[#9CAA7A] text-[#121212] mb-6 pb-1">
                                {client?.name}
                            </h2>
                            {client?.audienceEngagement &&
                                <InfiniteCarousel items={client?.audienceEngagement} onItemClick={handleImageModal} title="Audience Engagement" />
                            }
                            {client?.analytics &&
                                <InfiniteCarousel items={client?.analytics} onItemClick={handleImageModal} title="Analytics" />
                            }
                            {client?.videos &&
                                <VideoGrid videos={client?.videos} onVideoClick={handleVideoModal} />
                            }
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ImageModal selectedImage={selectedImage} imageZoom={imageZoom} zoomIn={zoomIn} zoomOut={zoomOut} closeImageModal={closeImageModal} downloadMedia={downloadMedia} shareMedia={shareMedia} />

            <VideoModal selectedVideo={selectedVideo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isMuted={isMuted} volume={volume} togglePlay={togglePlay} toggleMute={toggleMute} handleVolumeChange={handleVolumeChange} closeVideoModal={closeVideoModal} downloadMedia={downloadMedia} shareMedia={shareMedia} />
        </>
    );
};

export default CaseStudies;