import { IViewModelBinder } from "../IViewModelBinder";
import { IWidgetBinding } from "../../editing/IWidgetBinding";
import { PermalinkService } from "../../permalinks/permalinkService";
import { IModelBinder } from "../../editing/IModelBinder";
import { ButtonModel } from "./buttonModel";
import { Contract } from "../../contract";
import { IPermalinkResolver } from "../../permalinks/IPermalinkResolver";


export class ButtonModelBinder implements IModelBinder {
    private readonly permalinkResolver: IPermalinkResolver;

    constructor(permalinkResolver: IPermalinkResolver) {
        this.permalinkResolver = permalinkResolver;
    }

    public canHandleWidgetType(widgetType: string): boolean {
        return widgetType === "button";
    }

    public canHandleModel(model): boolean {
        return model instanceof ButtonModel;
    }

    public async nodeToModel(buttonContract: Contract): Promise<ButtonModel> {
        let model = new ButtonModel();
        model.label = buttonContract.label;
        model.style = buttonContract.style;
        model.size = buttonContract.size;

        if (buttonContract.hyperlink) {
            model.hyperlink = await this.permalinkResolver.getHyperlinkFromConfig(buttonContract.hyperlink);
        }

        return model;
    }

    public getConfig(buttonModel: ButtonModel): Contract {
        let buttonConfig: Contract = {
            kind: "block",
            type: "button",
            label: buttonModel.label,
            style: buttonModel.style,
            size: buttonModel.size
        }

        if (buttonModel.hyperlink) {
            buttonConfig.hyperlink = {
                target: buttonModel.hyperlink.target,
                permalinkKey: buttonModel.hyperlink.permalinkKey,
                href: buttonModel.hyperlink.href
            }
        }

        return buttonConfig;
    }
}
