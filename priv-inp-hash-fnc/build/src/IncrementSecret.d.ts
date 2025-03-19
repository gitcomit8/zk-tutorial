import { Field, SmartContract, State } from 'o1js';
export declare class IncrementSecret extends SmartContract {
    x: State<import("o1js/dist/node/lib/provable/field").Field>;
    initState(salt: Field, firstSecret: Field): Promise<void>;
    incrementSecret(salt: Field, secret: Field): Promise<void>;
}
