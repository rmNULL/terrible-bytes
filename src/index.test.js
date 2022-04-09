import b from '.';

test('empty', () => {
  expect(_ => b``).toThrow(TypeError);
});

test('only interpolated size', () => {
  const size = 420;
  expect(b`${size}`).toBe(size);
});

test('only interpolated unit', () => {
  const unit = 'M';
  expect(_ => b`${unit}`).toThrow(TypeError);
});

test('size is literal, unit is interpolated', () => {
  const unit = 'M';
  expect(b`420 ${unit}`).toBe(420 * 1e6);
  expect(_ => b` ${unit} 420`).toThrow(TypeError);
});

test('size is interpolated, unit is literal', () => {
  const size = 420;
  expect(b`${size}M`).toBe(420 * 1e6);
  expect(_ => b`M${size}`).toThrow(TypeError);
});

test('size,unit both are interpolated', () => {
  const size = 420;
  const unit = 'M';
  expect(b`${size}${unit}`).toBe(420 * 1e6);
  expect(b`${size} ${unit}`).toBe(420 * 1e6);
  expect(_ => b`${unit}${size}`).toThrow(TypeError);
});

test('empty interpolations with valid literal', () => {
  const size = '', unit = '';
  // not sure why anyone would want to do this, for the lolz?
  expect(b`${size}1${unit}KiB`).toBe(1024);
  expect(b`1${size}${unit}KiB`).toBe(1024);
  expect(b`1${size}KiB${unit}`).toBe(1024);
  expect(b`${size}1KiB${unit}`).toBe(1024);
});

test('kilobyte', () => {
  expect(b`1K`).toBe(1000);

  expect(b`1K`).toBe(1000);
  expect(b`1KB`).toBe(1000);
  expect(b`1 K`).toBe(1000);
  expect(b`1 KB`).toBe(1000);

  expect(b`1.2K`).toBe(1200);
  expect(b`1.2KB`).toBe(1200);
  expect(b`1.2 K`).toBe(1200);
});

test('kibibyte', () => {
  expect(b`1Ki`).toBe(1024);

  expect(b`1Ki`).toBe(1024);
  expect(b`1KiB`).toBe(1024);
  expect(b`1 Ki`).toBe(1024);
  expect(b`1 KiB`).toBe(1024);

  expect(b`9.2Ki`).toBe(9420.8);
  expect(b`9.2KiB`).toBe(9420.8);
  expect(b`9.2 Ki`).toBe(9420.8);
});

test('megabyte', () => {
  expect(b`1M`).toBe(1e6);

  const v = 15 * 1e6;
  expect(b`15M`).toBe(v);
  expect(b`15MB`).toBe(v);
  expect(b`15 M`).toBe(v);
  expect(b`15 MB`).toBe(v);

  expect(b`9.2M`).toBe(9.2 * 1e6);
  expect(b`9.2MB`).toBe(9.2 * 1e6);
  expect(b`9.2 M`).toBe(9.2 * 1e6);
});

test('mebibyte', () => {
  expect(b`1Mi`).toBe(1024 ** 2);

  const v = 15 * (1024**2);
  expect(b`15Mi`).toBe(v);
  expect(b`15MiB`).toBe(v);
  expect(b`15 Mi`).toBe(v);
  expect(b`15 MiB`).toBe(v);

  expect(b`9.2Mi`).toBe( 9.2 * (1024**2));
  expect(b`9.2MiB`).toBe(9.2 * (1024**2));
  expect(b`9.2 Mi`).toBe(9.2 * (1024**2));
});

test('gigabyte', () => {
  expect(b`1G`).toBe(1e9);

  const v = 19 * 1e9;
  expect(b`19G`).toBe(v);
  expect(b`19GB`).toBe(v);
  expect(b`19 G`).toBe(v);
  expect(b`19 GB`).toBe(v);

  expect(b`9.2G`).toBe(9.2 * 1e9);
  expect(b`9.2GB`).toBe(9.2 * 1e9);
  expect(b`9.2 G`).toBe(9.2 * 1e9);
});

test('gibibyte', () => {
  expect(b`1Gi`).toBe((1024**3));

  const v = 19 * (1024**3);
  expect(b`19Gi`).toBe(v);
  expect(b`19GiB`).toBe(v);
  expect(b`19 Gi`).toBe(v);
  expect(b`19 GiB`).toBe(v);

  expect(b`9.2Gi`).toBe(9.2 * (1024**3));
  expect(b`9.2GiB`).toBe(9.2 * (1024**3));
  expect(b`9.2 Gi`).toBe(9.2 * (1024**3));
});

test("tera", () => {
  expect(b`1T`).toBe((1e12));

  const v = 24 * (1e12);
  expect(b`24T`).toBe(v);
  expect(b`24TB`).toBe(v);
  expect(b`24 T`).toBe(v);
  expect(b`24 TB`).toBe(v);

  expect(b`9.2T`).toBe(9.2 * (1e12));
  expect(b`9.2TB`).toBe(9.2 * (1e12));
  expect(b`9.2 T`).toBe(9.2 * (1e12));
});

test('tebi', () => {
  expect(b`1Ti`).toBe((1024 ** 4));

  const v = 24 * (1024 ** 4);
  expect(b`24Ti`).toBe(v);
  expect(b`24TiB`).toBe(v);
  expect(b`24 Ti`).toBe(v);
  expect(b`24 TiB`).toBe(v);

  expect(b`9.2Ti`).toBe(9.2 * (1024 ** 4));
  expect(b`9.2TiB`).toBe(9.2 * (1024 ** 4));
  expect(b`9.2 Ti`).toBe(9.2 * (1024 ** 4));
});

test("peta", () => {
  expect(b`1P`).toBe((1e15));

  const v = 29 * (1e15);
  expect(b`29P`).toBe(v);
  expect(b`29PB`).toBe(v);
  expect(b`29 P`).toBe(v);
  expect(b`29 PB`).toBe(v);

  expect(b`9.2P`).toBe(9.2 * (1e15));
  expect(b`9.2PB`).toBe(9.2 * (1e15));
  expect(b`9.2 P`).toBe(9.2 * (1e15));
});

test('pebi', () => {
  expect(b`1Pi`).toBe((1024 ** 5));

  const v = 29 * (1024 ** 5);
  expect(b`29Pi`).toBe(v);
  expect(b`29PiB`).toBe(v);
  expect(b`29 Pi`).toBe(v);
  expect(b`29 PiB`).toBe(v);

  expect(b`9.2Pi`).toBe(9.2 * (1024 ** 5));
  expect(b`9.2PiB`).toBe(9.2 * (1024 ** 5));
  expect(b`9.2 Pi`).toBe(9.2 * (1024 ** 5));
});

test('exa', () => {
  expect(b`1E`).toBe((1e18));

  const v = 41 * (1e18);
  expect(b`41E`).toBe(v);
  expect(b`41EB`).toBe(v);
  expect(b`41 E`).toBe(v);
  expect(b`41 EB`).toBe(v);

  expect(b`9.2E`).toBe(9.2 * (1e18));
  expect(b`9.2EB`).toBe(9.2 * (1e18));
  expect(b`9.2 E`).toBe(9.2 * (1e18));
});

test('exbi', () => {
  expect(b`1Ei`).toBe((1024 ** 6));

  const v = 41 * (1024 ** 6);
  expect(b`41Ei`).toBe(v);
  expect(b`41EiB`).toBe(v);
  expect(b`41 Ei`).toBe(v);
  expect(b`41 EiB`).toBe(v);

  expect(b`9.2Ei`).toBe(9.2 * (1024 ** 6));
  expect(b`9.2EiB`).toBe(9.2 * (1024 ** 6));
  expect(b`9.2 Ei`).toBe(9.2 * (1024 ** 6));
});


test('zetta', () => {
  expect(b`1Z`).toBe((1e21));

  const v = 368 * (1e21);
  expect(b`368Z`).toBe(v);
  expect(b`368ZB`).toBe(v);
  expect(b`368 Z`).toBe(v);
  expect(b`368 ZB`).toBe(v);

  expect(b`9.2Z`).toBe(9.2 * (1e21));
  expect(b`9.2ZB`).toBe(9.2 * (1e21));
  expect(b`9.2 Z`).toBe(9.2 * (1e21));
});

test('zebi', () => {
  expect(b`1Zi`).toBe((1024 ** 7));

  const v = 368 * (1024 ** 7);
  expect(b`368Zi`).toBe(v);
  expect(b`368ZiB`).toBe(v);
  expect(b`368 Zi`).toBe(v);
  expect(b`368 ZiB`).toBe(v);

  expect(b`9.2Zi`).toBe(9.2 * (1024 ** 7));
  expect(b`9.2ZiB`).toBe(9.2 * (1024 ** 7));
  expect(b`9.2 Zi`).toBe(9.2 * (1024 ** 7));
});

test('yotta', () => {
  expect(b`1Y`).toBe((1e24));

  const v = 833 * (1e24);
  expect(b`833Y`).toBe(v);
  expect(b`833YB`).toBe(v);
  expect(b`833 Y`).toBe(v);
  expect(b`833 YB`).toBe(v);

  expect(b`9.2Y`).toBe(9.2 * (1e24));
  expect(b`9.2YB`).toBe(9.2 * (1e24));
  expect(b`9.2 Y`).toBe(9.2 * (1e24));
});

test('yobi', () => {
  expect(b`1Yi`).toBe((1024 ** 8));

  const v = 833 * (1024 ** 8);
  expect(b`833Yi`).toBe(v);
  expect(b`833YiB`).toBe(v);
  expect(b`833 Yi`).toBe(v);
  expect(b`833 YiB`).toBe(v);

  expect(b`9.2Yi`).toBe(9.2 * (1024 ** 8));
  expect(b`9.2YiB`).toBe(9.2 * (1024 ** 8));
  expect(b`9.2 Yi`).toBe(9.2 * (1024 ** 8));
});


test('byte', () => {
  expect(b`1582`).toBe(1582);
  expect(b`1582B`).toBe(1582);
  expect(b`1582 B`).toBe(1582);
  expect(_ => b`1582Byte`).toThrow();
});
