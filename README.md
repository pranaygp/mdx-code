# mdx-code

A MDX Deck [Layout](https://github.com/jxnblk/mdx-deck#layouts) that renders code blocks on a slide as a Runnable [RunKit](https://runkit.com) playground. _Only for JavaScript (Node)_

## Install

`yarn add --exact mdx-code`

## Use

````mdx
import Code from 'mdx-code';

# Regular Slide

---
export default Code

```javascript A playground slide!
console.log('Hello world');
```
````

### Preambles

A slide can have two code blocks. The first code block is run before the second, but the playground only displays the second.

````mdx
---
export default Code

```
const x = [1, 2, 3];
```
```javascript x is already defined
x.map(i => i*2);
```
````

# Authors

* Pranay Prakash ([@pranaygp](https://twitter.com/pranaygp))