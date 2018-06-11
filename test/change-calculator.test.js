test('calculateChange(215, 300) should return [50, 20, 10, 5]', function(t) {
  var result = calculateChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  t.deepEqual(result, expected);
  t.end();
});