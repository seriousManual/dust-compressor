# dust-compressor

per default white spaces are compressed.
that leads to lost linebreaks which could lead to invalid and broken inline javascript/css

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
### optimized compressor:
```

 datapoint. anotherDataPoint.
 datapoint. anotherDataPoint.
 datapoint. anotherDataPoint.

```