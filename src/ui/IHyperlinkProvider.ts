import { IPermalink } from "./../permalinks/IPermalink";
import { IComponent } from "./IComponent";
import { HyperlinkModel } from "../permalinks/hyperlinkModel";

/**
 * Provider that helps to create hyperlinks.
 */
export interface IHyperlinkProvider {
    /**
     * Display name of the provider, e.g. Pages.
     */
    name: string;

    /**
     * Name of the component that is used for hyperlink selection.
     */
    componentName: string;

    /**
     * Determines if this provider is suitable for a resource the permalink points to.
     */
    canHandleHyperlink?(permalink: IPermalink): boolean;

    /**
     * Creates hyperlinkg from specified URL.
     */
    getHyperlinkFromUrl?(url: string, target?: string): HyperlinkModel;

    /**
     * Creates hyperlink from specified permalink.
     */
    getHyperlinkFromPermalink?(permalink: IPermalink, target?: string): Promise<HyperlinkModel>;

    /**
     * Creates hyperlink from specified resource, i.e. Page or Media.
     */
    getHyperlinkFromResource(resource: any);
}