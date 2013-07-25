# dust-compressor

per default white spaces are compressed by stripping out linebreaks.
that leads to lost linebreaks which could lead to invalid and broken inline javascript/css.
also multiple spaces are inside a block are ignored.

dust-compressor provides a improved and context sensitive compressor:

## examples
(see the examples folder)

### default behaviour:
```
datapoint.         anotherDataPoint.datapoint.         anotherDataPoint.datapoint.         anotherDataPoint.
```

### no whitespace compression:
```







       datapoint.         anotherDataPoint.

       datapoint.         anotherDataPoint.

       datapoint.         anotherDataPoint.


```
### optimized compressor (per dust-compressor):
```

datapoint. anotherDataPoint.
datapoint. anotherDataPoint.
datapoint. anotherDataPoint.

```

## note
this is work in progress, so there's no guarantee it wouldn't break your code!

feel free to list edge cases where