function showInfo(place) {
    let message = "";

    if (place === "Cầu Rồng") {
        message = "Cầu Rồng là một trong những biểu tượng nổi tiếng nhất của Đà Nẵng.";
    }

    if (place === "Bà Nà Hills") {
        message = "Bà Nà Hills nổi tiếng với Cầu Vàng và khung cảnh thiên nhiên tuyệt đẹp.";
    }

    if (place === "Biển Mỹ Khê") {
        message = "Biển Mỹ Khê nổi tiếng với bãi cát đẹp và nước biển trong xanh.";
    }

    if (place === "Ngũ Hành Sơn") {
        message = "Ngũ Hành Sơn là địa điểm nổi tiếng với núi đá, hang động và chùa chiền.";
    }

    alert(message);
}

function welcome() {
    alert(
        "Chào mừng bạn đến với Đà Nẵng! 🌊\n\n" +
        "Hãy chuẩn bị hành lý và bắt đầu chuyến khám phá nhé!"
    );
}
