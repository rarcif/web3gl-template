import { OfflineDirectSigner } from '@cosmjs/proto-signing';
import { IWalletConnectSessionWalletAdress } from '@deficonnect/types';
import { DeFiConnectorClient } from '../DeFiConnectorClient';
import { DeFiCosmosConnectorArguments } from './DeFiConnector';
export interface DeFiCosmosProviderArguments extends DeFiCosmosConnectorArguments {
    client: DeFiConnectorClient;
}
export declare function isDeFiCosmosProvider(object: any): object is DeFiCosmosProvider;
export declare class DeFiCosmosProvider {
    protected isDeFiCosmosProvider: boolean;
    client: DeFiConnectorClient;
    config: DeFiCosmosProviderArguments;
    constructor(config: DeFiCosmosProviderArguments);
    get account(): string;
    get currentAccountInfo(): IWalletConnectSessionWalletAdress | undefined;
    get signer(): OfflineDirectSigner;
    enable(): Promise<string[]>;
    sendTransaction: (payload: any) => Promise<any>;
    request: (payload: any) => Promise<any>;
    send: (payload: any, callback?: any) => Promise<any>;
    stop: () => Promise<void>;
    close: () => Promise<void>;
}
