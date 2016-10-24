import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import {SimpleService} from '../services/simple.service';

@Component({
    selector: 'app-name',
    templateUrl: 'name.component.html'
})
export class NameComponent implements OnInit {
    @Input() name: string;

    constructor(private simple: SimpleService) {}

    echo() {
        return this.simple.echo(this.name);
    }

    ngOnInit() {
    }
}