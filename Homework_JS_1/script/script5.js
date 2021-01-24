let SMortage = 2000000,
    pYearPerRate = 10,
    years = 5,
    MortageTermMonth= years * 12;
    pMonthRate = (pYearPerRate /100) / 12,
    i = Math.pow((1 + pMonthRate), MortageTermMonth),
    monthlyPay = SMortage * ((pMonthRate * i) / ( i -1)),
    Pereplata = (MortageTermMonth * monthlyPay) - SMortage,

    console.log(Pereplata);
    

