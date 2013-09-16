# dust-compressor

[![Build Status](https://travis-ci.org/zaphod1984/dust-compressor.png)](https://travis-ci.org/zaphod1984/dust-compressor)
[![NPM version](https://badge.fury.io/js/dust-compressor.png)](http://badge.fury.io/js/dust-compressor)

per default white spaces are compressed by stripping out linebreaks.
that leads to lost linebreaks which could lead to invalid and broken inline javascript/css.
also multiple spaces are inside a block are ignored.

dust-compressor provides a improved and context sensitive compressor:

## installation
```
$ npm install dust-compressor`
```

## usage
```javascript
var dust = require('dust-compressor').install(require('dustjs-linkedin'));
```

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

feel free to list edge cases!
