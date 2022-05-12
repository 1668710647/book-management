// 获取图书列表
function getBookList() {
    $.get("http://www.liulongbin.top:3006/api/getbooks",function(res) {
        if (res.status == 200) {
            var rows = [];
            $.each(res.data, function(i, item) {
                rows.push("<tr><td>"+ item.id +"</td><td>"+ item.bookname +"</td><td>"+ item.author +"</td><td>"+ item.publisher +"</td><td><button class='deletebook' data-id='"+ item.id +"'>删除</button></td></tr>")
            })
            $("#tb").empty().append(rows.join(""))
        } else {
            return alert("获取图书失败");
        }
    })
}
//删除图书
function delBook(){
    var id = $(this).attr("data-id");
    $.get("http://www.liulongbin.top:3006/api/delbook",{id:id},function(res) {
        if (res.status == 200) {
            getBookList();
            //alert(res.msg);
        } else {
            return alert("删除图书失败");
        }
    })
}
//添加图书
function addBook(){
    
}





