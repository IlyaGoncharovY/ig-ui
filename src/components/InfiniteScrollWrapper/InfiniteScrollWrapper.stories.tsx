import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { InfiniteScrollWrapper, InfiniteScrollWrapperProps } from './InfiniteScrollWrapper';

export default {
  title: 'components/InfiniteScrollWrapper',
  component: InfiniteScrollWrapper,
  args: {
    hasMore: true,
    loader: <div style={{ textAlign: 'center', color: '#6d6d6d' }}>Loading...</div>,
  },
  parameters: {
    controls: {
      exclude: [],
    },
  },
} as Meta<InfiniteScrollWrapperProps<any>>;

/**
 * Шаблон для Storybook.
 */
const Template: StoryFn<InfiniteScrollWrapperProps<any>> = (args) => {
  const MOCK_DATA = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const PAGE_SIZE = 10;

  const [data, setData] = useState<string[]>(MOCK_DATA.slice(0, PAGE_SIZE));
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMore = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nextPageData = MOCK_DATA.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
        setData((prevData) => [...prevData, ...nextPageData]);
        setPage((prevPage) => prevPage + 1);
        if ((page + 1) * PAGE_SIZE >= MOCK_DATA.length) {
          setHasMore(false);
        }
        resolve();
      }, 1000);
    });
  };

  return (
    <InfiniteScrollWrapper {...args} loadMore={loadMore} hasMore={hasMore}>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '8px',
              backgroundColor: '#efdf71',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </InfiniteScrollWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
