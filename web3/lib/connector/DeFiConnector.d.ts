import 'regenerator-runtime/runtime';
import Web3Provider from '@deficonnect/web3-provider';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { DeFiConnectorClient } from '../DeFiConnectorClient';
import { DeFiWeb3ConnectorArguments } from './DeFiWeb3Connector';
import { DeFiCosmosProvider } from './DeFiCosmosProvider';
export interface DeFiConnectorArguments {
    name: string;
    supprtedChainTypes: DeFiConnectorChainType[];
    bridge?: string;
    eth?: DeFiWeb3ConnectorArguments;
    cosmos?: DeFiCosmosConnectorArguments;
}
export interface DeFiCosmosConnectorArguments {
    supportedChainIds: string[];
}
export interface DeFiConnectorProviderGenerateArguments {
    chainId: string;
    chainType: string;
    config: DeFiConnectorArguments;
    connectorClient: DeFiConnectorClient;
}
export declare type DeFiConnectorEventCallback = (param?: DeFiConnectorUpdate, error?: Error) => void;
export declare type DeFiConnectorEventUnsubscribe = () => void;
export declare enum DeFiConnectorUpdateEvent {
    Update = "DeFiConnectorUpdate",
    Error = "DeFiConnectorError",
    Deactivate = "DeFiConnectorDeactivate"
}
interface EventEmitter {
    event: DeFiConnectorUpdateEvent;
    callback: DeFiConnectorEventCallback;
}
export declare type DeFiConnectorChainType = 'eth' | 'cosmos';
export interface DeFiConnectorUpdate {
    chainType?: DeFiConnectorChainType;
    chainId?: string;
    account?: string;
    provider?: DeFiConnectorProvider;
}
/**
 * the type value is like = 'eth' | 'cro' | 'tcro'
 */
export interface DeFiAddressTuple {
    type: string;
    address: string;
}
export declare type DeFiConnectorProvider = DeFiCosmosProvider | Web3Provider;
export declare class DeFiConnector extends AbstractConnector {
    config: DeFiConnectorArguments;
    eventEmitters: EventEmitter[];
    connectorClient?: DeFiConnectorClient;
    private _provider?;
    constructor(config: DeFiConnectorArguments);
    chainId: string;
    chainType: DeFiConnectorChainType;
    accounts: string[];
    getProvider(): Promise<any>;
    getChainId(): Promise<string | number>;
    getAccount(): Promise<string | null>;
    get _supportedChainIds(): string[];
    generateClient(): Promise<DeFiConnectorClient>;
    generateProvider(params: DeFiConnectorProviderGenerateArguments): Promise<DeFiConnectorProvider>;
    activate(): Promise<DeFiConnectorUpdate>;
    getAddressList(addressTypes: string[]): DeFiAddressTuple[];
    close(): Promise<void>;
    deactivate(): Promise<void>;
    get provider(): DeFiConnectorProvider | undefined;
    set provider(value: DeFiConnectorProvider | undefined);
    onEvent(event: DeFiConnectorUpdateEvent, callback: DeFiConnectorEventCallback): DeFiConnectorEventUnsubscribe;
    protected emitUpdate(update: DeFiConnectorUpdate): void;
    protected emitError(error: Error): void;
    protected emitDeactivate(): void;
}
export {};
