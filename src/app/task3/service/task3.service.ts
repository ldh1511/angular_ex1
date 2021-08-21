import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Task3Service {

    private stateModal: Subject<boolean> = new Subject();
    private infoModal: Subject<any> = new Subject();
    public get StateFromChild() {
        return this.stateModal;
    }
    public get InfoFromChild() {
        return this.stateModal;
    }
    public notifyStateModal(number) {
        this.stateModal.next(number);
    }
    public notifyInfoModal(number) {
        this.stateModal.next(number);
    }
}