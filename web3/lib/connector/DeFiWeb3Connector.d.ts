import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { IRPCMap } from '@deficonnect/types';
import { DeFiConnector } from './DeFiConnector';
export declare const URI_AVAILABLE = "URI_AVAILABLE";
export interface DeFiWeb3ConnectorArguments {
    supportedChainIds: number[];
    rpc: IRPCMap;
    pollingInterval?: number;
    bridge?: string;
}
export declare class UserRejectedRequestError extends Error {
    constructor();
}
export declare class DeFiWeb3Connector extends AbstractConnector {
    defiConnector: DeFiConnector;
    private _injectConnect?;
    constructor(config: DeFiWeb3ConnectorArguments);
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<any>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null | string>;
    close(): Promise<void>;
    deactivate(): void;
}
