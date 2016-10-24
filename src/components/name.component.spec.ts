import {
    TestBed,
    async
} from '@angular/core/testing';
import {Observable} from 'rxjs';

import { NameComponent } from './name.component'
import { SimpleService } from '../services/simple.service'

class MockSimpleService extends SimpleService {

    echo(data: string) {
        return Observable.of(data);
    }
}

describe('NameComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NameComponent],
            providers: [
                {
                    provide: SimpleService,
                    useClass: MockSimpleService
                },
            ]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('shows its own name', async(() => {
        const cmp = TestBed.createComponent(NameComponent);

        let p = cmp.debugElement.nativeElement.querySelector('p');
        expect(p.textContent).toBe('');

        cmp.componentInstance.name = 'Laco';
        cmp.componentInstance.echo();
        cmp.detectChanges(); // ngOnInit

        p = cmp.debugElement.nativeElement.querySelector('p');
        expect(p.textContent).toBe('Laco');
    }));
});