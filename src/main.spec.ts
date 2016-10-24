import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/fake-async-test';

describe('test', () => {
    it('foo == foo', () => {
        expect('foo').toBe('foo');
    });
});

import { TestBed } from '@angular/core/testing';
import {
    platformBrowserDynamicTesting,
    BrowserDynamicTestingModule
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// ./**/*.spec.ts
const context = (require as any).context('./', true, /\.spec\.ts$/);
context.keys().map(context); // requireAll
