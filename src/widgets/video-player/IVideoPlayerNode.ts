import { Contract } from "../../editing/contentNode";

export interface IVideoPlayerNode extends Contract {
    /**
     * Key of the permalink pointing to an actual resource.
     */
    sourceKey?: string;

    /**
     * External UR which is used when sourceKey isn't specified.
     */
    sourceUrl?: string;

    controls?: boolean;
    
    autoplay?: boolean;
}