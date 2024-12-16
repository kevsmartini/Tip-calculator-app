const peopleNumberInput = document.querySelector("#people-number");
const bill = document.querySelector("#bill");
const percentageBtn = document.querySelectorAll(".percentage-btn");
const customTip = document.querySelector(".custom-tip");
const inputWarning = document.querySelector(".input-warning");
const tipNumber = document.querySelector(".tip-number");
const totalPersonNumber = document.querySelector(".total-number");
const resetBtn = document.querySelector(".reset-button");

const tipcalculator = (bill, tip, people) => {
  percentageOfBill = bill * (tip / 100);
  tipNumber.textContent = '$'+Math.round((percentageOfBill / people) * 100) / 100;
  totalPersonNumber.textContent =
    '$'+Math.round(((bill + percentageOfBill) / people) * 100) / 100;
};

percentageBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const peopleNumber = Number(peopleNumberInput.value);
    const billValue = Number(bill.value);
    const btnpercentageAmount = Number(btn.id);

    if (peopleNumber === 0 || peopleNumber === "") {
      inputWarning.style.display = "block";
    } else {
      percentageBtn.forEach(
        (btn) => (btn.style.backgroundColor = "var(--Very-dark-cyan)")
      );
      btn.style.backgroundColor = "var(--Strong-cyan)";
      tipcalculator(billValue, btnpercentageAmount, peopleNumber);
    }
  });
});

customTip.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    customTip.value != "" &&
    bill.value != "" &&
    peopleNumberInput.value != ""
  ) {
    customTip.id = customTip.value;
    customPercentageAmount = customTip.id;
    const peopleNumber = Number(peopleNumberInput.value);
    const billValue = Number(bill.value);
    tipcalculator(billValue, customPercentageAmount, peopleNumber);
  }
});

peopleNumberInput.addEventListener("focus", (e) => {
  e.target.value = "";
  inputWarning.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  percentageBtn.forEach((btn) => {
    btn.style.backgroundColor = "var(--Very-dark-cyan)";
  });

  peopleNumberInput.value = "";
  bill.value = "";
  tipNumber.textContent = "$0.00";
  totalPersonNumber.textContent = "$0.00";
  customTip.value = "";
});
