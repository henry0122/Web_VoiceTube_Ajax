// Setting var and new ajax request
var pageNum = 1;
var ajaxRequest1 = new XMLHttpRequest();

ajaxRequest1.onreadystatechange = function() {
    if(ajaxRequest1.readyState == 4 && ajaxRequest1.status == "200") {
       // get the ajax response successfully
       var videoData1 = ajaxRequest1.responseText;

       // parse JSON string 
       videoData1 = JSON.parse(videoData1);

       // use renderThumbHTML() to add the data into HTML
       renderThumbHTML(videoData1);
    }
}



// Send request to server
var queryString  = "?page=";
ajaxRequest1.open('GET', 'ajax_response_thumb.php' + queryString + String(pageNum), true);
ajaxRequest1.send(null);
// End of loading first page

// Function for adding response JSON into HTML
function renderThumbHTML(jcontent){

  var thum = document.getElementById("thumb");

  for(var i = 0; i < jcontent.length; i++)
  {
    // first line is rwd
    var newdiv = document.createElement("div");
    newdiv.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-3';

    // thumbnail's div
    var newDiv1 = document.createElement("div");
    newDiv1.className = 'thumbnail';
    var att = document.createAttribute("data-video-id");
    att.value = jcontent[i].data_video_id;
    newDiv1.setAttributeNode(att);
    newdiv.appendChild(newDiv1);

    // thumnail's photo
    var newDiv2 = document.createElement("div");
    newDiv2.className = 'photo';
    var att2 = document.createAttribute("video_id");
    att2.value = jcontent[i].data_video_id;
    newDiv2.setAttributeNode(att2);

    // photo's a
    var newA = document.createElement("a");
    newA.href = jcontent[i].a_href;
    newDiv2.appendChild(newA);

    // a's img
    var newImg = document.createElement("img");
    newImg.className = 'lazy';
    newImg.src = jcontent[i].img_src;
    var att3 = document.createAttribute("data-original");
    att3.value = jcontent[i].img_src;
    newImg.setAttributeNode(att3);
    newImg.alt = jcontent[i].img_alt;
    newA.appendChild(newImg);

    // photo's span-readed label
    var newSpan = document.createElement("span");
    newSpan.className = 'readed-label';
    var att4 = document.createAttribute("data-video-id");
    att4.value = jcontent[i].data_video_id;
    newSpan.setAttributeNode(att4);
    newDiv2.appendChild(newSpan);

    // span-readed label's img
    var newImg2 = document.createElement("img");
    newImg2.src = jcontent[i].img_readed;
    newImg2.alt = jcontent[i].img_readed_alt;
    var att6 = document.createAttribute("rel");
    att6.value = jcontent[i].img_readed_rel;
    newImg2.setAttributeNode(att6);
    var att5 = document.createAttribute("data-original-title");
    att5.value = jcontent[i].img_readed_data_original_title;
    newImg2.setAttributeNode(att5);
    newSpan.appendChild(newImg2);

    // photo's span-photo label
    var newSpan2 = document.createElement("span");
    newSpan2.className = 'label label-inverse photo-label';
    newDiv2.appendChild(newSpan2);

    // span-photo label's span
    var newSpan3 = document.createElement("span");
    newSpan3.className = 'video-time';
    newSpan3.innerHTML = jcontent[i].video_time;
    newSpan2.appendChild(newSpan3);

    // thumbnail's caption
    var newDiv3 = document.createElement("div");
    newDiv3.className = 'caption';

    // caption's h5
    var newh5 = document.createElement("h5");
    newh5.className = 'index-thumbnail-title';
    newh5.rel = 'tooltip';
    var att7 = document.createAttribute("rel");
    att7.value = 'tooltip';
    newh5.setAttributeNode(att7);
    var att8 = document.createAttribute("data-original-title");
    att8.value = jcontent[i].data_original_title;
    newh5.setAttributeNode(att8);

    // h5's a
    var newA2 = document.createElement("a");
    newA2.href = jcontent[i].a_href;
    newA2.innerHTML = jcontent[i].h5_a_href;
    newh5.appendChild(newA2);
    newDiv3.appendChild(newh5);

    // caption-pull left div
    var newDiv4 = document.createElement("div");
    newDiv4.className = 'pull-left';
    var newDiv5 = document.createElement("div");
    newDiv4.appendChild(newDiv5);

    // pull-left's i
    // var newi = document.createElement("i");
    // newi.className = 'icon-headphones';
    // newDiv5.appendChild(newi);
    newDiv5.innerHTML = jcontent[i].view;
    newDiv3.appendChild(newDiv4);

    // caption's clearfix
    var newDiv6 = document.createElement("div");
    newDiv6.className = 'clearfix';
    newDiv3.appendChild(newDiv6);

    // caption's thumbnail tags
    var newDiv7 = document.createElement("div");
    newDiv7.className = 'thumbnail-tags';
    newDiv3.appendChild(newDiv7);

    // thumbnail tags's a
    // first a
    var newA3 = document.createElement("a");
    newA3.href = jcontent[i].level_href;
    newDiv7.appendChild(newA3);

    var newSpan4 = document.createElement("span");
    newSpan4.className = 'label label-info';
    newSpan4.innerHTML = jcontent[i].level;
    newA3.appendChild(newSpan4);

    // second a
    var newA4 = document.createElement("a");
    newA4.href = jcontent[i].chinese_href;
    newDiv7.appendChild(newA4);

    var newSpan5 = document.createElement("span");
    newSpan5.className = 'label';
    var att9 = document.createAttribute("rel");
    att9.value = 'tooltip';
    newSpan5.setAttributeNode(att9);
    var att10 = document.createAttribute("data-original-title");
    att10.value = jcontent[i].chinese_tag;
    newSpan5.setAttributeNode(att10);
    newSpan5.innerHTML = jcontent[i].chinese_caption;
    newA4.appendChild(newSpan5);

    // third a
    var newA5 = document.createElement("a");
    newA5.href = jcontent[i].pronounciation_href;
    newDiv7.appendChild(newA5);

    var newSpan6 = document.createElement("span");
    newSpan6.className = 'label label-warning';
    var att11 = document.createAttribute("rel");
    att11.value = 'tooltip';
    newSpan6.setAttributeNode(att11);
    var att12 = document.createAttribute("data-original-title");
    att12.value = jcontent[i].pronounciation_tag;
    newSpan6.setAttributeNode(att12);
    newSpan6.innerHTML = jcontent[i].pronounciation;
    newA5.appendChild(newSpan6);

    // append photo and caption to thumbnail
    newDiv1.appendChild(newDiv2);
    newDiv1.appendChild(newDiv3);

    thum.insertBefore(newdiv,null);
  }
}