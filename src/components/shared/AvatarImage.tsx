import {ImageInHex} from './ImageInHex';

export function AvatarImage({src, size}: { src: string, size?: number }) {
    return <ImageInHex src={src} size={size}/>;
}