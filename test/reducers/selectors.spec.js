import {calcAccuracy, calcWordsPerMinute} from "../../es6/reducers/selectors";

describe('selectors', () => {
    describe('calcAccuracy()', () => {
        it('should calculate accuracy correctly', () => {
            expect(calcAccuracy({words: ["a", "b"], playerWords: [""]})).to.eq(0);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["a", "b", ""]})).to.eq(100);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["a", "c", ""]})).to.eq(50);
            expect(calcAccuracy({words: ["a", "b"], playerWords: ["b", "c", ""]})).to.eq(0);
            expect(calcAccuracy({words: ["a", "b", "c"], playerWords: ["a", ""]})).to.eq(100)
        })
    });

    describe('calcWordsPerMinute()', () => {
        it('should calculate words per minute correctly', () => {
            let now = 20391248;
            let one_min_ago = now - 60 * 1000;
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: now,
                words: ["a", "b", "c"],
                playerWords: [""]
            })).to.eq(0);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_min_ago,
                words: ["a", "b", "c"],
                playerWords: [""]
            })).to.eq(0);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_min_ago,
                words: ["a", "b", "c"],
                playerWords: ["a", ""]
            })).to.eq(1);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_min_ago,
                words: ["a", "b", "c"],
                playerWords: ["a", "b", ""]
            })).to.eq(2);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_min_ago,
                words: ["a", "b", "c"],
                playerWords: ["b", "b", "c", ""]
            })).to.eq(2);
            let one_sec_ago = now - 1000;
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_sec_ago,
                words: ["a", "b", "c"],
                playerWords: ["a", ""]
            })).to.eq(60);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_sec_ago,
                words: ["a", "b", "c"],
                playerWords: ["a", "b", ""]
            })).to.eq(120);
            expect(calcWordsPerMinute({
                currentTime: now,
                startTime: one_sec_ago,
                words: ["a", "b", "c"],
                playerWords: ["b", "b", "c", ""]
            })).to.eq(120)
        })
    });
});
