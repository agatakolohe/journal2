import Entry from './../src/entry.js';

describe('Entry', () => {
  let reusableEntry;

  beforeEach(() => {
    reusableEntry = new Entry("title", "this is the body of the journal entry we submitted");
  });
  test('should correctly create an entry object with a title and body', () => {
    expect(reusableEntry.title).toBe("title");
    expect(reusableEntry.body).toBe("this is the body of the journal entry we submitted");
  });
  test('should correctly count the number of words in an entry in the body', () =>  {
    expect(reusableEntry.wordCount()).toEqual(10);
  });
  test('should correctly count the number of letters in the entry in the body', () => {
    expect(reusableEntry.letterCount()).toEqual(41);
  });
  test('should correctly return the first 8 words of the entry', () =>  {
    expect(reusableEntry.getTeaser()).toBe("this is the body of the journal entry...")
  });
});
