const scale = function (fromDomain, toDomain, value) {
  const fromRange = fromDomain.max - fromDomain.min;
  const toRange = toDomain.max - toDomain.min;
  const fromDomainPercentOfValue = (value - fromDomain.min) / fromRange;

  const toDomainPercentOfValue = fromDomainPercentOfValue * toRange;
  return toDomainPercentOfValue + toDomain.min;
};

exports.scale = scale;
