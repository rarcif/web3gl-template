import { IWalletConnectOptions, ISessionStorage, IConnector } from '@deficonnect/types';
import { ITransportLib } from '@deficonnect/types';
interface DeFiExistsConnectorClientParams {
    connector: IConnector;
    transport: DeFiTransportLib;
}
export interface DeFiConnectorClientParams {
    connectorOpts?: IWalletConnectOptions;
    sessionStorage?: ISessionStorage;
    exists?: DeFiExistsConnectorClientParams;
}
export interface DeFiTransportLib extends ITransportLib {
    connected: boolean;
}
export declare class DeFiConnectorClient {
    connector: IConnector;
    transport: DeFiTransportLib;
    sessionStorage?: ISessionStorage;
    constructor(params: DeFiConnectorClientParams);
    clearSessionStorage(): void;
}
export {};
