// 获取图书列表
function getBookList() {
    $.get("http://www.liulongbin.top:3006/api/getbooks",function(res) {
        if (res.status == 200) {
            var rows = [];
            $.each(res.data, function(i, item) {
                rows.push("<tr><td>"+ item.id +"</td><td>"+ item.bookname +"</td><td>"+ item.author +"</td><td>"+ item.publisher +"</td><td><button class='deletebook' data-id='"+ item.id +"'>删除</button></td></tr>")
            })
            $("#tb").empty().append(rows.join(""))
            //alert(res.msg);
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
    var bookname = $("#iptBookname").val();
    var author = $("#iptAuthor").val();
    var publisher = $("#iptPublisher").val();
    if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) {
        return alert("请补全图书信息");
    } else {
        $.post("http://www.liulongbin.top:3006/api/addbook",{bookname:bookname,author:author,publisher:publisher},function(res) {
            console.log(res.status);
            if (res.status == 201) {
                getBookList();
                //alert(res.msg);
            } else {
                return alert("添加图书失败");
            }
        })
    }
    
}





