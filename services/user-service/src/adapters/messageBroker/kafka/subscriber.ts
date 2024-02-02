
import companyDetailSave from "./cosnumers/companyDetailSave";
export interface ISubscriber {
    companyDetailSave: (data: any) => Promise<void>;
    // Add other methods as needed
}

export interface IUserSubscriber extends Pick<ISubscriber,'companyDetailSave'>{ }

export const createSubscriber = (): IUserSubscriber => {
    return {
        companyDetailSave: companyDetailSave
    };
};
