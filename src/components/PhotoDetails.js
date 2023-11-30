import Image from 'next/image';
import CameraIcon from '@/assets/icons/camera.svg';
import MapIcon from '@/assets/icons/map.svg';
import SearchIcon from '@/assets/icons/search.svg';
import SlidersIcon from '@/assets/icons/sliders.svg';

export default function PhotoDetails({ image, className = 'col-span-1 row-span-1', location, cameraType, lensType, iso, focalLength, aperture, shutterSpeed }) {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden [&:hover_>_.details]:opacity-100 [&:hover_>_img]:opacity-25 ${className}`}>
            <Image src={image} className="object-cover h-full transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 details opacity-0 transition-opacity text-sm">
                <div className="flex items-center gap-2">
                    <MapIcon width="16" height="16" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <CameraIcon width="16" height="16" />
                    <span>{cameraType}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <SearchIcon width="16" height="16" />
                    <span>{lensType}</span>
                </div>
                <div className="flex gap-2 mt-2">
                    <SlidersIcon width="16" height="16" className="mt-[2px]" />
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