const circulationLogs = [{
        logId: "L001",
        studentCode: "SV001",
        bookIsbn: "978001",
        status: "BORROWING",
        fineAmount: 0
    },
    {
        logId: "L002",
        studentCode: "SV002",
        bookIsbn: "978002",
        status: "RETURNED",
        fineAmount: 10000
    },
    {
        logId: "L003",
        studentCode: "SV003",
        bookIsbn: "978003",
        status: "LOST",
        fineAmount: 200000
    }
];
console.log("===== TRẠNG THÁI BAN ĐẦU =====");
for (let i = 0; i < circulationLogs.length; i++) {
    console.log(
        circulationLogs[i].logId + " | " +
        circulationLogs[i].studentCode + " | " +
        circulationLogs[i].bookIsbn + " | " +
        circulationLogs[i].status + " | " +
        circulationLogs[i].fineAmount + " VNĐ"
    );
}
const studentCode = "SV004";
if (studentCode !== "") {
    const newLog = {
        logId: "L004",
        studentCode: studentCode,
        bookIsbn: "978004",
        status: "BORROWING",
        fineAmount: 0
    };
    circulationLogs.push(newLog);
}
console.log("===== SAU KHI MƯỢN SÁCH =====");
for (let i = 0; i < circulationLogs.length; i++) {
    console.log(
        circulationLogs[i].logId + " | " +
        circulationLogs[i].studentCode + " | " +
        circulationLogs[i].bookIsbn + " | " +
        circulationLogs[i].status + " | " +
        circulationLogs[i].fineAmount + " VNĐ"
    );
}
for (let i = 0; i < circulationLogs.length; i++) {
    if (circulationLogs[i].logId === "L004") {
        circulationLogs[i].status = "RETURNED";
        const lateDays = 3;
        circulationLogs[i].fineAmount = lateDays * 5000;
        break;
    }
}
for (let i = 0; i < circulationLogs.length; i++) {
    if (circulationLogs[i].logId === "L003") {
        circulationLogs[i].status = "LOST";
        circulationLogs[i].fineAmount = 200000;
        break;
    }
}
console.log("===== SAU KHI TRẢ SÁCH =====");
for (let i = 0; i < circulationLogs.length; i++) {
    console.log(
        circulationLogs[i].logId + " | " +
        circulationLogs[i].studentCode + " | " +
        circulationLogs[i].bookIsbn + " | " +
        circulationLogs[i].status + " | " +
        circulationLogs[i].fineAmount + " VNĐ"
    );
}
for (let i = circulationLogs.length - 1; i >= 0; i--) {
    if (
        circulationLogs[i].status === "RETURNED" &&
        circulationLogs[i].fineAmount >= 0
    ) {
        circulationLogs.splice(i, 1);
    }
}
console.log("===== SAU KHI XÓA NHẬT KÝ ĐÃ HOÀN TẤT =====");
for (let i = 0; i < circulationLogs.length; i++) {
    console.log(
        circulationLogs[i].logId + " | " +
        circulationLogs[i].studentCode + " | " +
        circulationLogs[i].bookIsbn + " | " +
        circulationLogs[i].status + " | " +
        circulationLogs[i].fineAmount + " VNĐ"
    );
}
let borrowingCount = 0;
let totalFine = 0;
for (let i = 0; i < circulationLogs.length; i++) {
    if (circulationLogs[i].status === "BORROWING") {
        borrowingCount++;
    }
    totalFine += circulationLogs[i].fineAmount;
}
console.log("===== BÁO CÁO CUỐI NGÀY =====");
console.log("Tổng số sách đang được mượn:", borrowingCount);
console.log("Tổng tiền phạt:", totalFine + " VNĐ");