import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { CosmosSignRequestJSON, CosmosSignResponseJSON } from '../connector/CosmosTypes';
export declare const transformProtoToJSON: (object: any) => any;
export declare const transformJSONtoProto: (object: any) => any;
export declare const decodeToSignRequestJSON: (signerAddress: string, signDoc: SignDoc) => CosmosSignRequestJSON;
export declare const encodeJSONToSignResponse: (respJSON: CosmosSignResponseJSON) => DirectSignResponse;
