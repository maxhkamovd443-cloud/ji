    let count = 0;

    const numberEl = document.getElementById("number");
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");

    plusBtn.addEventListener("click", () => {
      count++;              
      numberEl.textContent = count;
    });

    minusBtn.addEventListener("click", () => {
      count--;               
      numberEl.textContent = count;
    });
        const showBtn = document.getElementById("show");
    const hideBtn = document.getElementById("hide");
    const box = document.getElementById("box");

    showBtn.addEventListener("click", () => {
      box.style.display = "block";   
    });

    hideBtn.addEventListener("click", () => {
      box.style.display = "none";   
    });































  const input = document.getElementById("myInput");
  const div = document.getElementById("result");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      div.style.display = "block";
      div.textContent = input.value;
    } else {
      div.style.display = "none";
    }
  });


   


    



