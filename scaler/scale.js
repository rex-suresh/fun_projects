const scale = function (fromDomain, toDomain, value) {
  const fromRange = fromDomain.max - fromDomain.min;
  const toRange = toDomain.max - toDomain.min;
  const fromDomainPercentOfValue = (value - fromDomain.min) / fromRange;

  const toDomainPercentOfValue = fromDomainPercentOfValue * toRange;
  return toDomainPercentOfValue + toDomain.min;
};

// const initialRange = {
//   min: 0,
//   max: 100
// };

// const finalRange = {
//   min: 0,
//   max: 10
// };

// scale(initialRange, finalRange, 20);
exports.scale = scale;
