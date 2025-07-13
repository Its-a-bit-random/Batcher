# Why batcher?

## What is batching

Batching is when you take many tasks and combine them together and handle them all at once. A great example is networking, would you rather invoke a remote event 100 times per frame or once per frame. The answer should self explanitory.

## Why Batcher?

You may now be asking what makes Batcher better than something like TaskQueue?

Batcher offers a promise-based API which lets you add a task to the queue and then execute something once the task has been handled. Take a look at this example:

```typescript
// Create a new batcher which prints out all added numbers
const batcher = new Batcher<number>((nums) => nums.forEach((num) => print(num)))

// Add the number 5 to it
batcher.Add(5).andThen(() => {
    // Once the number 5 is printed this will run
    print("5 handled")
})
```
