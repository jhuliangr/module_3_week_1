import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useGetMemes } from './useGetMemes';

describe('useGetMemes hook', () => {
  it("Does't explodes", async () => {
    const { result } = renderHook(() => useGetMemes());

    await waitFor(() => {
      expect(result.current.memes).not.toBe([]);
    });
  });
});
