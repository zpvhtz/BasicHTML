function DangKyThanhVien()
{
    //Gán
    var kq = true;
    hoten = document.getElementById("hoten");
    datepicker = document.getElementById("datepicker");
    nnghiep = document.getElementById("nnghiep");
    email = document.getElementById("email");
    dthoai = document.getElementById("dthoai");
    dnhap = document.getElementById("dnhap");
    mkhau = document.getElementById("mkhau");
    lmkhau = document.getElementById("lmkhau");

    lblhoten = document.getElementById("lblhoten").innerHTML = "";
    lbldatepicker = document.getElementById("lbldatepicker").innerHTML = "";
    lblnnghiep = document.getElementById("lblnnghiep").innerHTML = "";
    lblemail = document.getElementById("lblemail").innerHTML = "";
    lbldthoai = document.getElementById("lbldthoai").innerHTML = "";
    lbldnhap = document.getElementById("lbldnhap").innerHTML = "";
    lblmkhau = document.getElementById("lblmkhau").innerHTML = "";
    lbllmkhau = document.getElementById("lbllmkhau").innerHTML = "";

    //Kiểm tra
    if(hoten.value=="")
    {
        document.getElementById("lblhoten").innerHTML = "*";
        kq=false;
    }
    if(datepicker.value=="")
    {
        document.getElementById("lbldatepicker").innerHTML = "*";
        kq=false;
    }
    if(nnghiep.value=="0")
    {
        document.getElementById("lblnnghiep").innerHTML = "*";
        kq=false;
    }
    if(email.value=="")
    {
        document.getElementById("lblemail").innerHTML = "*";
        kq=false;
    }
    if(dnhap.value=="")
    {
        document.getElementById("lbldnhap").innerHTML = "*";
        kq=false;
    }
    if(dthoai.value=="")
    {
        document.getElementById("lbldthoai").innerHTML = "*";
        kq=false;
    }
    if(mkhau.value=="")
    {
        document.getElementById("lblmkhau").innerHTML = "*";
        kq=false;
    }
    if(lmkhau.value=="")
    {
        document.getElementById("lbllmkhau").innerHTML = "*";
        kq=false;
    }
    if(lmkhau.value != mkhau.value)
    {
        document.getElementById("lbllmkhau").innerHTML = "*";
        kq=false;
    }
    // Kết quả
    if(kq == true)
        document.getElementById("ketqua").innerHTML = "Đã xác nhận thông tin của bạn";
    else
        document.getElementById("ketqua").innerHTML = "Vui lòng nhập đầy đủ thông tin";
    return kq;
}