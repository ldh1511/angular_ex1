import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Task3Service {
    private stateModal: Subject<boolean> = new Subject();
    private infoModal: Subject<any> = new Subject();
    public get GetStateModal() {
        return this.stateModal;
    }
    public get GetInfoModal() {
        return this.infoModal;
    }
    public notifyStateModal(number) {
        this.stateModal.next(number);
    }
    public notifyInfoModal(data) {
        this.infoModal.next(data);
    }
}