var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var calculated = salesData.reduce((vendorFinances,vendor,i) => {
    console.log(vendor.name);
    if (!vendorFinances[vendor.name]) {
      vendorFinances[vendor.name] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }
    provincialSales = vendor.sales.reduce((a,b) => a + b, 0);
    vendorFinances[vendor.name]["totalSales"] += provincialSales;
    vendorFinances[vendor.name]["totalTaxes"] += provincialSales * taxRates[vendor.province];
    return vendorFinances;
  }, {});
  console.log(calculated)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/