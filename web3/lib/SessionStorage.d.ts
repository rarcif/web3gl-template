import { ISessionStorage, IWalletConnectSession } from '@deficonnect/types';
interface DefaultSessionStorageParams {
    key?: string;
    supportedChainIds: string[];
}
export declare class DefaultSessionStorage implements ISessionStorage {
    key: string;
    supportedChainIds: string[];
    constructor({ key, supportedChainIds }: DefaultSessionStorageParams);
    getSession: () => IWalletConnectSession | null;
    setSession: (session: IWalletConnectSession) => IWalletConnectSession;
    removeSession: () => void;
}
export {};
