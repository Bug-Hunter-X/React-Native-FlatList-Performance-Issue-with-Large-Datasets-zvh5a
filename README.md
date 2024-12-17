# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets.  The issue is caused by attempting to render a large number of items, leading to performance degradation, warnings, or even crashes.

## Problem

The provided `FlatListBug.js` file contains a `FlatList` component rendering a large array of data.  This can result in warnings such as `VirtualizedList` warnings or out-of-memory errors.

## Solution

The `FlatListBugSolution.js` file provides a solution by implementing pagination or windowing techniques to only render a subset of the data at a time.  This greatly improves performance, especially with very large datasets.

The solution utilizes `windowSize` to control how many items are rendered at once and `onEndReached` for fetching additional data.  Adjust `windowSize` for your specific needs and data size.