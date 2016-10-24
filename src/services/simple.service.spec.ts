import {
    TestBed,
    inject
} from '@angular/core/testing';
import {
    XHRBackend,
    HttpModule,
    Response,
    ResponseOptions
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                SimpleService,
                MockBackend,
                {
                    provide: XHRBackend,
                    useExisting: MockBackend
                }
            ]
        });
    });

    let srv: SimpleService;
    let backend: MockBackend;
    beforeEach(inject(
        [SimpleService, MockBackend],
        (_srv: SimpleService, _backend) => {
            srv = _srv;
            backend = _backend;
        }))

    afterEach(() => {
        backend.verifyNoPendingRequests();
        backend.resolveAllConnections();
    });

    // constructor(srv: SimpleService)
    it('can be inject', () => {
        expect(srv).toBeDefined();
    });

    it('.echo("foo") => /echo?data=foo ', () => {
        backend.connections.subscribe((conn: MockConnection) => {
            console.info('FFFFFFFFFFFFFFF');
            const url = conn.request.url;
            expect(url).toBe('/echo?data=foo');
            conn.response.next(
                new Response(new ResponseOptions({
                    status: 200,
                    body: 'foo'
                }))
            );
        });
        srv.echo('foo').subscribe(data => {
            console.info(1202185192851205);
            expect(data).toBe('foo');
        });
    });
})