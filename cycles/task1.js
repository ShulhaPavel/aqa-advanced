const averageGrade = 46;

if (averageGrade > 1 && averageGrade < 60){
    console.log("Незадовільно")
}else if (averageGrade >= 60 && averageGrade <= 70){
    console.log("Задовільно")
}else if (averageGrade >= 71 && averageGrade <= 80){
    console.log("Добре")
}else if (averageGrade >= 81 && averageGrade <= 90){
    console.log("Дуже добр")
}else if (averageGrade >= 91 && averageGrade <= 100){
    console.log("Відмінно")
}else{
    console.log("Вибачте, сталася помилка")
}