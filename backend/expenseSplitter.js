const expenseSplitter = async (req, res) => {
  try {
    const inputObj = req.body;

    // total expenses 
    let totalExpense = inputObj.expenses
      .map((el) => el.amount)
      .reduce((el, sum = 0) => el + sum);

    let userArr = [...new Set(inputObj.expenses.map((el) => el.name))];
    
    // user wise expenses 
    const expenses = userArr.map((el) => {
      let re = 0;
      inputObj.expenses.forEach((item) => {
        if (item.name === el) {
          re += item.amount;
        }
      });
      return { name: el, amount: re };
    });
    let obj = {
      expenses: expenses,
    };
    let avg = totalExpense / obj.expenses.length;
    const output = [];

    obj.expenses.forEach((item) => {
      let amount = avg - item.amount;
      obj.expenses.forEach((subItem) => {
        if (amount > 0 && subItem.amount > avg) {
          const temp = subItem.amount - item.amount - amount;
          output.push({
            owes: item.name,
            owed: subItem.name,
            amount: amount < temp ? amount : temp,
          });
          obj = {
            expenses: obj.expenses.map((el) => {
              if (el.name === subItem.name) {
                return { ...el, amount: subItem.amount - amount };
              }
              return el;
            }),
          };
          amount = amount - (amount < temp ? amount : temp);
        }
      });
    });

    const data = {
      total: totalExpense,
      equalShare: avg,
      payouts: output,
    };

    return res.status(200).json({
      data: data,
    });
  } catch (err) {
    throw err;
  }
};
export default expenseSplitter;