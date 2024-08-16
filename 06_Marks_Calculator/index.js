const calculateForm = document.getElementById("calculateForm");

const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();
    // console.log(event);

    const formData = new FormData(calculateForm);
    const data = {};

    formData.forEach((value,key) => {
        data[key] = +value; // +value it is convert to number
    });

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    const percentage = (totalMarks/4);
    const result = document.createElement("p");
    result.className = "result";

    result.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}`;
    calculateForm.after(result);
    // console.log({totalMarks , percentage});
};