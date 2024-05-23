import { describe, it, expect } from 'vitest';
import { formatText } from './formatText';

const text = 'Lorem Ipsum';
const textWithBold = 'Lorem **ipsum** dolor **sit** amet';

describe('Core/Atom/Text', () => {
  it('should keep the text as is when there are no formatting characters', () => {
    expect(formatText(text)).toEqual([text]);
  });

  it('should add "strong" tags when there are "**" in the text', () => {
    expect(formatText(textWithBold)).toMatchInlineSnapshot(`
        [
          "Lorem ",
          <strong>
            ipsum
          </strong>,
          " dolor ",
          <strong>
            sit
          </strong>,
          " amet",
        ]
      `);
  });
});
