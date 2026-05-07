function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function () {
  return this.value;
};

Money.prototype.getCurrency = function () {
  return this.currency;
};

Money.prototype.exchangeTo = function (currency) {
  const rates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 },
  };

  if (this.currency === currency) {
    return new Money(this.value, this.currency);
  }

  const convertedValue = this.value * rates[this.currency][currency];
  return new Money(convertedValue, currency);
};

Money.prototype.add = function (money) {
  let other = money;

  if (money.getCurrency() !== this.currency) {
    other = money.exchangeTo(this.currency);
  }

  return new Money(this.value + other.getValue(), this.currency);
};

Money.prototype.format = function () {
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: this.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};


const wallet1 = new Money(100, 'usd');
const wallet2 = new Money(200, 'eur');
const wallet3 = new Money(50, 'usd');

const wallet2InUsd = wallet2.exchangeTo('usd');
const sum = wallet1.add(wallet2InUsd).add(wallet3);

console.log('Сумма:', sum.getValue());
console.log('Формат:', sum.format());
