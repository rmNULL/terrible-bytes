# Terrible-Bytes 🍰
[![NPM](https://nodei.co/npm/terrible-bytes.png?downloads=true)](https://nodei.co/npm/terrible-bytes/)

Convey size information in human friendly format to your js runtime.  
Bid adieu to those numbers without units 🥳.

# Simple to use, Easy to Understand
```javascript
import {b} from 'terrible-bytes';

const uploadLimitBytes = b`8MB`
const xInBytes = b`5G` + b`640M` // approx. 5.64Gigabytes
const yInBytes = b`5.64G`       // approximately similar to above

```
## Interpolation Support
```javascript
const filesize = 256;
const unit = 'MiB';

const lol = b`${filesize}${unit}`;
const xox = b`468 ${unit}`;
```

Let's get rid of those KB, MB, GB constants.
And stop doing `size=8*MB`


# Installation
```shell
npm install terrible-bytes
```


# Supported Units
Only **S.I** and **ISO/IEC** standard unit prefixes are allowed.  
In the case of **K** we make an exception and treat it as kilobyte.  
However, a warning is consoled when K is provided as the unit.

The ISO and IEC table are given below for the sake of convenience,

| Value            |  SI Unit|  |
|------------------|:---:|-------|
| 1000             | k | kilo  |
| 1000<sup>2</sup> | M | mega  |
| 1000<sup>3</sup> | G | giga  |
| 1000<sup>4</sup> | T | tera  |
| 1000<sup>5</sup> | P | peta  |
| 1000<sup>6</sup> | E | exa   |
| 1000<sup>7</sup> | Z | zetta |
| 1000<sup>8</sup> | Y | yotta |


| Value            | IEC| Unit   |
|------------------|----|-------|
| 1000             | Ki | kibi  |
| 1000<sup>2</sup> | Mi | mebi  |
| 1000<sup>3</sup> | Gi | gibi  |
| 1000<sup>4</sup> | Ti | tebi  |
| 1000<sup>5</sup> | Pi | pebi  |
| 1000<sup>6</sup> | Ei | exbi  |
| 1000<sup>7</sup> | Zi | zebi  |
| 1000<sup>8</sup> | Yi | yobi  |

Apart from the values in the table, 'B' can be used to mean byte.
Here are some valid strings
```javascript
[ 
  b`4`, 
  b`4B`,
  b`4M`,
  b`4MB`,
  b`4Mi`, 
  b`4MiB`,
]
```
You can read more about [unit prefixes in wikipedia](https://en.wikipedia.org/wiki/Binary_prefix)


# What Does this have that other libs don't?
1) I haven't seen the use of tagged template for specifying
sizes before(its probably because i haven't looked hard enough)
2) Does this question have to be strawmaned every time someone reinvents
the wheel :|
3) Idk, go use the other lib if you like that better, no one has the
authority to stop you from doing that champ. May the 🪄 help in
your journey.



# License
Libre [Expat(MIT)](https://github.com/rmNULL/terrible-bytes/blob/dev/LICENSE) License
