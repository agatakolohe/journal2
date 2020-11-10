import Entry from './../src/entry.js';

describe('Entry', () => {
  test('should correctly create an entry object with a title and body', () => {
    const entry = new Entry("title", "this is the body");
    expect(entry.title).toBe("title");
    expect(entry.body).toBe("this is the body");
  });
  test('should correctly count the number of words in an entry in the body', () =>  {
    let words = new Entry("title", "this is the body");
    expect(words.wordCount()).toEqual(4);
  });
  test('should correctly count the number of letters in the entry in the body', () => {
    let letters = new Entry("title", "this is the body");
    expect(letters.letterCount()).toEqual(13);
  });
  test('should correctly return the first 8 words of the entry', () =>  {
    let firstEight = new Entry("title", "this is the body of the journal entry we submitted");
    expect(firstEight.getTeaser()).toBe("this is the body of the journal entry...")
  });
});