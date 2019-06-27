import { IRecord } from '../external/models';
import { areRecordsEqual } from './areRecordsEqual';

describe('areRecordsEqual', () => {
    const commonRecord: IRecord = {
        codename: 'codename',
        content: 'content',
        heading: 'heading',
        id: '12445',
        objectID: '3',
        order: 'order',
        platforms: ['net'],
        section: 'section',
        title: 'title',
    };

    it.each([
        [
            'hello content',
            'hello content',
            true,
        ],
        [
            'hello content',
            'hello content2',
            false,
        ],
    ])('returns correct result for content', (content1, content2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                content: content1 as string,
            },
            {
                ...commonRecord,
                content: content2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'heading',
            'heading',
            true,
        ],
        [
            'heading2',
            'heading',
            false,
        ],
    ])('returns correct result for heading', (heading1, heading2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                heading: heading1 as string,
            },
            {
                ...commonRecord,
                heading: heading2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'codename',
            'codename',
            true,
        ],
        [
            'codename2',
            'codename',
            false,
        ],
    ])('returns correct result for codename', (codename1, codename2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                codename: codename1 as string,
            },
            {
                ...commonRecord,
                codename: codename2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            ['js', 'net'],
            ['net', 'js'],
            true,
        ],
        [
            ['js', 'net', 'java'],
            ['js', 'java'],
            false,
        ],
    ])('returns correct result for platforms', (platforms1, platforms2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                platforms: platforms1 as string[],
            },
            {
                ...commonRecord,
                platforms: platforms2 as string[],
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'section',
            'section',
            true,
        ],
        [
            'section2',
            'section',
            false,
        ],
    ])('returns correct result for section', (section1, section2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                section: section1 as string,
            },
            {
                ...commonRecord,
                section: section2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'e41b8ce8-364f-4f0a-b91a-dce44a189e10',
            'e41b8ce8-364f-4f0a-b91a-dce44a189e10',
            true,
        ],
        [
            'e41b8ce8-364f-4f0a-b91a-dce44a189e10',
            'e41b8ce8-364f-4f0a-b91a-dce44a189e11',
            false,
        ],
    ])('returns correct result for id', (id1, id2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                id: id1 as string,
            },
            {
                ...commonRecord,
                id: id2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'title',
            'title',
            true,
        ],
        [
            'title',
            'title2',
            false,
        ],
    ])('returns correct result for title', (title1, title2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                title: title1 as string,
            },
            {
                ...commonRecord,
                title: title2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
    it.each([
        [
            'order',
            'order',
            true,
        ],
        [
            'order',
            'order2',
            false,
        ],
    ])('returns correct result for order', (order1, order2, truthy) => {
        const areEqual = areRecordsEqual(
            {
                ...commonRecord,
                order: order1 as string,
            },
            {
                ...commonRecord,
                order: order2 as string,
            },
        );

        expect(areEqual).toBe(truthy);
    });
});
