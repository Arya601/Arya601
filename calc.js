function calc(event) {
    event.preventDefault(); // 阻止 submit 事件的預設行為
    const form = document.getElementById("quiz-form");

    // 檢查程度題是否作答
    const degreeUnanswered = [];
    for (let i = 1; i <= 20; i++) {
        const question = form.querySelector(`input[name="degree${i}"]:checked`);
        if (!question) {
            degreeUnanswered.push(i);
        }
    }

    // 檢查選擇題是否作答
    const choiceUnanswered = [];
    for (let i = 21; i <= 30; i++) {
        const question = form.elements[`degree${i}`];
        const isChecked = Array.from(question).some((input) => input.checked);
        if (!isChecked) {
            choiceUnanswered.push(i - 20);
        }
    }

    // 如果有未作答的題目，顯示提示訊息
    if (degreeUnanswered.length > 0 && choiceUnanswered.length > 0) {
        alert(`以下問題還沒有回答完整喔！\n\n第一大題程度題：${degreeUnanswered.join(", ")}\n第二大題選擇題：${choiceUnanswered.join(", ")}`);
    } else if (degreeUnanswered.length > 0) {
        alert(`以下問題還沒有回答完整喔！\n\n第一大題程度題：${degreeUnanswered.join(", ")}`);
    } else if (choiceUnanswered.length > 0) {
        alert(`以下問題還沒有回答完整喔！\n\n第二大題選擇題：${choiceUnanswered.join(", ")}`);
    } else {
        showResults(form);
    }
}

function showResults(form) {
    const degreeArray = [];
    for (let i = 1; i <= 30; i++) {
        const answer = form.querySelector(`input[name="degree${i}"]:checked`);
        if (answer) {
            degreeArray.push(answer.value.split("_"));
        }
    }

    const sum = degreeArray.reduce(
        (acc, val) => [
            acc[0] + Number(val[0]),
            acc[1] + Number(val[1]),
            acc[2] + Number(val[2]),
            acc[3] + Number(val[3]),
            acc[4] + Number(val[4])
        ],
        [0, 0, 0, 0, 0]
    );

    document.querySelector("#sred-text").innerText = sum[0];
    document.querySelector("#sgreen-text").innerText = sum[1];
    document.querySelector("#sblue-text").innerText = sum[2];
    document.querySelector("#sblack-text").innerText = sum[3];
    document.querySelector("#swhite-text").innerText = sum[4];
}
