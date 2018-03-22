// Bài 6.2
function changeImage(key)
{
    document.getElementById("imglarge").src ="public/images/galaxy s8/" + document.getElementById(key).name;
}
// Bài 6.3
function changeColor(key)
{
    // Đổi hình
    document.getElementById("imgSmall1").src = "public/images/galaxy s8/" + key + "_1.jpg";
    document.getElementById("imgSmall2").src = "public/images/galaxy s8/" + key + "_2.jpg";
    document.getElementById("imgSmall3").src = "public/images/galaxy s8/" + key + "_3.jpg";
    document.getElementById("imgSmall4").src = "public/images/galaxy s8/" + key + "_4.jpg";
    document.getElementById("imgSmall5").src = "public/images/galaxy s8/" + key + "_5.jpg";
    // Đổi name
    document.getElementById("imgSmall1").name = key + "_1.jpg";
    document.getElementById("imgSmall2").name = key + "_2.jpg";
    document.getElementById("imgSmall3").name = key + "_3.jpg";
    document.getElementById("imgSmall4").name = key + "_4.jpg";
    document.getElementById("imgSmall5").name = key + "_5.jpg";
    // Hình chính
    document.getElementById("imglarge").src ="public/images/galaxy s8/" + key + "_1.jpg";
}