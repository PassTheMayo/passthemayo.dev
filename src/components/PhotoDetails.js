import Image from 'next/image';
import CameraIcon from '@/assets/icons/camera.svg';
import MapIcon from '@/assets/icons/map.svg';
import SearchIcon from '@/assets/icons/search.svg';
import SlidersIcon from '@/assets/icons/sliders.svg';

export default function PhotoDetails({ image, className = '', location, cameraType, lensType, iso, focalLength, aperture, shutterSpeed }) {
    return (
        <div className={`relative [&:hover_>_.details]:opacity-100 [&:hover_>_img]:opacity-25 aspect-square overflow-hidden ${className}`}>
            <Image src={image} className="relative object-cover w-full h-full transition-opacity" />
            <div className="absolute top-0 left-0 p-4 z-10 details opacity-0 transition-opacity text-sm">
                <div className="flex items-center gap-2">
                    <MapIcon width="16" height="16" className="shrink-0" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <CameraIcon width="16" height="16" className="shrink-0" />
                    <span>{cameraType}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <SearchIcon width="16" height="16" className="shrink-0" />
                    <span>{lensType}</span>
                </div>
                <div className="flex gap-2 mt-2">
                    <SlidersIcon width="16" height="16" className="mt-[2px] shrink-0" />
                    <div>
                        <p>ISO {iso}</p>
                        <p>{focalLength}mm</p>
                        <p>f/{aperture}</p>
                        <p>{shutterSpeed}sec</p>
                    </div>
                </div>
            </div>
        </div>
    );
}