import {
  parseCourseCover,
  parseDate,
  parseLessonPoster,
  parseTime,
  sortLessons,
} from '@/utils/index';

import '@testing-library/jest-dom';

describe('parseDate', () => {
  it('should parse date correctly', () => {
    const testCases = [
      {
        input: '2023-03-06T16:50:06.000Z',
        output: '6/3/2023',
      },
      {
        input: '2023-02-20T13:19:00.000Z',
        output: '20/2/2023',
      },
      {
        input: '2023-02-12T13:04:20.000Z',
        output: '12/2/2023',
      },
    ];

    testCases.forEach(testCase => {
      const outputValue = parseDate(testCase.input);
      expect(outputValue).toEqual(testCase.output);
    });
  });
});

describe('parseLessonPoster', () => {
  it('should parse lesson poster link correctly', () => {
    const testCase = {
      input: {
        id: '12sd-asd123dxf-as12f',
        title: 'test title',
        duration: 600,
        order: 3,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
      output: 'http://localhost:3000/preview/lesson-3.webp',
    };

    const outputValue = parseLessonPoster(testCase.input);
    expect(outputValue).toEqual(testCase.output);
  });
});

describe('parseCourseCover', () => {
  it('should parse course cover link correctly', () => {
    const testCase = {
      input: 'http://localhost:3000',
      output: 'http://localhost:3000/cover.webp',
    };

    const outputValue = parseCourseCover(testCase.input);
    expect(outputValue).toEqual(testCase.output);
  });
});

describe('parseTime', () => {
  it('should parse time correctly', () => {
    const testCases = [
      {
        input: 600,
        output: '10 minutes 0 seconds',
      },
      {
        input: 80,
        output: '1 minutes 20 seconds',
      },
      {
        input: 0,
        output: '0 minutes 0 seconds',
      },
      {
        input: 50,
        output: '0 minutes 50 seconds',
      },
    ];

    testCases.forEach(testCase => {
      const outputValue = parseTime(testCase.input);
      expect(outputValue).toEqual(testCase.output);
    });
  });
});

describe('sortLessons', () => {
  const testCase = {
    input: [
      {
        id: '12sd-asd123dxf-as12f3',
        title: 'test title',
        duration: 600,
        order: 3,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
      {
        id: '12sd-asd123dxf-as12f1',
        title: 'test title',
        duration: 600,
        order: 1,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
      {
        id: '12sd-asd123dxf-as12f2',
        title: 'test title',
        duration: 600,
        order: 2,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
    ],
    output: [
      {
        id: '12sd-asd123dxf-as12f1',
        title: 'test title',
        duration: 600,
        order: 1,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
      {
        id: '12sd-asd123dxf-as12f2',
        title: 'test title',
        duration: 600,
        order: 2,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
      {
        id: '12sd-asd123dxf-as12f3',
        title: 'test title',
        duration: 600,
        order: 3,
        type: 'video',
        status: 'unlocked',
        link: 'http://localhost:3000',
        previewImageLink: 'http://localhost:3000/preview',
        meta: null,
      },
    ],
  };

  it('should sort lessons correctly', () => {
    const outputValue = sortLessons(testCase.input);
    expect(outputValue).toEqual(testCase.output);
  });

  it('should not sort lessons in-place', () => {
    const outputValue = sortLessons(testCase.input);
    expect(outputValue).not.toEqual(testCase.input);
  });
});
