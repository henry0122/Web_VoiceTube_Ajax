//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url = location.href;

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url.indexOf('?')!=-1)
{
    var id = "";
    var file = ""
    //在此直接將各自的參數資料切割放進ary中
    var ary = url.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary[i].split('=')[0] == 'id'){
            id = ary[i].split('=')[1];
        }
            
        if(ary[i].split('=')[0] == 'file'){
            file = ary[i].split('=')[1];
        }
            
    }
    
}

console.log("id: "+id);
console.log("file: "+file);

/* Set  videoId for player.js */
var videoId = id;

// Setting var and new ajax request
var ajaxRequest3 = new XMLHttpRequest();

ajaxRequest3.onreadystatechange = function() {
    if(ajaxRequest3.readyState == 4 && ajaxRequest3.status == "200") {
       // get the ajax response successfully
       var captionData = ajaxRequest3.responseText;

       // parse JSON string 
       captionData = JSON.parse(captionData);

       // use renderCapHTML() to add the data into HTML
       renderCapHTML(captionData); 
    }
}

// Send request to server
var queryString3  = "?cap=";
ajaxRequest3.open('GET', 'ajax_response_caption.php' + queryString3 + file, true);
ajaxRequest3.send(null);
// End of loading caption

// Function for adding response JSON into HTML
function renderCapHTML(jcontent){

  var wrapper = $('#caption_detail');

  for(var key in jcontent.en)
  {
    //var end = Number(jcontent.en[key].start) + Number(jcontent.en[key].dur);
    container = $('<div id=show-caption-table"><'+'/'+'div>');
    wrapper.append(container);
    container.append(
      '<td class="align-top" width="25">'+
        '<a href="javascript:;" onclick="playCaptions('+Number(jcontent.en[key].start)+', '+Number(jcontent.en[key].dur)+');">' +
          '<span class="glyphicon glyphicon-play"></span>'+
        '</a>'+
        //'<div id="seq-' + key + '" start="'+jcontent.en[key].start+'" end="'+ Number(jcontent.en[key].dur) +'">' +jcontent.en[key].text + '</div>'+
      '</td>');
    
    container.append('<td id="seq-' + key + '" start="'+jcontent.en[key].start+'" end="'+ Number(jcontent.en[key].dur) +'">' +jcontent.en[key].text + '</td>');
  }
}