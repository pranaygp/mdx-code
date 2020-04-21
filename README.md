# mdx-code

A MDX Deck [Layout](https://github.com/jxnblk/mdx-deck#layouts) that renders code blocks on a slide as a Runnable [RunKit](https://runkit.com) playground. _Only for JavaScript (Node)_

## Install

`yarn add --exact mdx-code`

## Use

````mdx
import Code from 'mdx-code';

# Regular Slide

---

<Code>

```js A playground slide!
console.log('Hello world');
```

</Code>

````

![1](https://user-images.githubusercontent.com/1797812/48085109-03968780-e1bf-11e8-8943-3eb821dfde1b.gif)

### Preambles

A slide can have two code blocks. The first code block is run before the second, but the playground only displays the second.

````mdx
<Code>

```js
const x = [1, 2, 3];
```
```js x is already defined
x.map(i => i*2);
```

</Code>
````

![2](https://user-images.githubusercontent.com/1797812/48085110-042f1e00-e1bf-11e8-9a49-9fd7535fe290.gif)

### Configurable nodeVersion

You can configure the `nodeVersion` to use by passing it as a prop to the `Code` component.

````mdx
import Code from 'mdx-code';

# Regular Slide

---

<Code nodeVersion="13">

```js A playground slide!
console.log('Hello world');
```

</Code>

````

# Authors

* Pranay Prakash ([@pranaygp](https://twitter.com/pranaygp))
