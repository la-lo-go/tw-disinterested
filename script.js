const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cbxChecked = Array.from(checkboxes).filter((e) => e.checked);
const checkedLength = cbxChecked.length;

let i = 0;

const processCheckbox = () => {
    if (i >= checkedLength) {
        console.log("Finished! 🚀");
        return;
    }
  
    cbxChecked[i].click();
    console.log(`${i} / ${checkedLength}`);
    i++;
    setTimeout(processCheckbox, 200);
};

processCheckbox();
