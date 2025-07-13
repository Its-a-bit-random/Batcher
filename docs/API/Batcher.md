# Batcher

The batcher class is fully generic meaning that everthing is typed with `T` which is defined when you create a Batcher and passing in your own type in the `<>`.

::: warning
The docs refrence "Tasks" and "Items", these are both the same thing and can be used interchangeably.
:::

## new Batcher <badge type="tip" text="^1.0.0" />
```typescript
new Batcher<T>(callback: (items: T[]) => void): Batcher
```
Create a new `Batcher` instance.

The passed callback function is called at the end of every frame with all the added tasks. The callback is not called if no tasks were added so it is always guaranteed that the passed `items` array will have at least 1 thing in it.

## Batcher.Add <badge type="tip" text="^1.0.0" />
```typescript
Batcher.Add(item: T): Promise<void>
```
Adds a new item to the Batcher.

The returned promise resolves when the given item has been handled, technically it gets resolved after *all* tasks have been handled by the callback because they are all pased in by a single array.
