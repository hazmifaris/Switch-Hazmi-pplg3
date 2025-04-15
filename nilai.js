let grade = [
    {grade : "A", nilai : "100"}
    {grade : "B", nilai : "50"}
    {grade : "C", nilai : "0"}
]
grade.forEach(function(item) {
    let hasilgrade = "";

    switch (item.grade) {
        case "A"
        hasilgrade ="nilai sangat baik"
        break;
        case "B"
        hasilgrade ="nilai cukup baik"
        break;
        case "C"
        hasilgrade ="nilai sangat jelek"
        break;
        default:
    }
    console.log(`${item.grade} mendapat ${hasilgrade}`)
}
