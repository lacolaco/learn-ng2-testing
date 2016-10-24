import { ReversePipe } from './reverse.pipe';

describe('Reverse Pipe', () => {

    it('works well', () => {
        const pipe = new ReversePipe();
        expect(pipe.transform('foo')).toBe('oof');
    });
});