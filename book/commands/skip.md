---
title: skip
categories: |
  filters
version: 0.73.1
filters: |
  Skip the first several rows of the input. Counterpart of 'drop'. Opposite of 'first'.
usage: |
  Skip the first several rows of the input. Counterpart of 'drop'. Opposite of 'first'.
---

# <code>{{ $frontmatter.title }}</code> for filters

<div class='command-title'>{{ $frontmatter.filters }}</div>

## Signature

```> skip (n)```

## Parameters

 -  `n`: the number of elements to skip

## Notes
```text
To skip specific numbered rows, try 'drop nth'. To skip specific named columns, try 'reject'.
```
## Examples

Skip the first value of a list
```shell
> [2 4 6 8] | skip 1
```

Skip two rows of a table
```shell
> [[editions]; [2015] [2018] [2021]] | skip 2
```
