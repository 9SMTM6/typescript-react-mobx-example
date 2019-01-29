import {observable, action, computed} from 'mobx';
import {persist} from 'mobx-persist';

// All types inferred: name: string, setName: (name: string) => void etc...
export class MobxStore {
    @persist @observable name = "World";

    @computed 
    public get greeting() {
        return `Hello ${this.name}`;
    }

    @action.bound
    public setName(name:string) {
        this.name = name;
    }
}
