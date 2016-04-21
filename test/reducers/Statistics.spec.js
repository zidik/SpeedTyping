import {calcAccuracy, calcWordsPerMinute} from "../../es6/reducers/Statistics";

describe('Statistics', () => {
    describe('calcAccuracy function', () => {
        it('should calculate accuracy correctly', () => {
            expect(calcAccuracy({words: ["a", "b"], playerWords: [""]})).to.eq(0);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["a", "b", ""]})).to.eq(100);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["a", "c", ""]})).to.eq(50);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["b", "c", ""]})).to.eq(0);
            expect(calcAccuracy({words: ["a", "b", "c"], playerWords: ["a", ""]})).to.eq(100)
        })
    });

    describe('calcWordsPerMinute function', () => {
        var clock = null;

        before(() => {
            clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
        });
        after(() => {
            clock.restore();
        });

        it('should calculate words per minute correctly', () => {
            let one_min_ago = Date.now() - 60 * 1000;
            expect(calcWordsPerMinute({playerWords: [""], startTime: one_min_ago})).to.eq(0);
            expect(calcWordsPerMinute({playerWords: ["a", ""], startTime: one_min_ago})).to.eq(1);
            expect(calcWordsPerMinute({playerWords: ["a", "b", ""], startTime: one_min_ago})).to.eq(2);
            expect(calcWordsPerMinute({playerWords: ["b", "b", "c", ""], startTime: one_min_ago})).to.eq(3);
            let one_sec_ago = Date.now() - 1000;
            expect(calcWordsPerMinute({playerWords: ["a", ""], startTime: one_sec_ago})).to.eq(60);
            expect(calcWordsPerMinute({playerWords: ["a", "b", ""], startTime: one_sec_ago})).to.eq(120);
            expect(calcWordsPerMinute({playerWords: ["b", "b", "c", ""], startTime: one_sec_ago})).to.eq(180)
        })
    });
});
