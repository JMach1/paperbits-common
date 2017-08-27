import { HyperlinkModel } from "../../permalinks/hyperlinkModel";

export class ButtonModel {
    public label: string;
    public style: string;
    public size: string;
    public hyperlink: HyperlinkModel;

    constructor() {
        this.label = "Button";
        this.style = "default";
        this.size = "default";
    }
}
