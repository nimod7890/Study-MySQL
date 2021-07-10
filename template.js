
module.exports={
<<<<<<< HEAD
    HTML:function(title,list,body,control){
=======
    html:function(title,list,body,control){
>>>>>>> 9443e13a5c24480ae32e451301d12692d1606663
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>`
    },
<<<<<<< HEAD
    list:function(topics){
      var list ='<ul>';
      var i=0;
      while(i<topics.length){
        list+=`<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`
=======
    List:function(fileList){
      var list ='<ul>';
      var i=0;
      while(i<fileList.length){
        list+=`<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
>>>>>>> 9443e13a5c24480ae32e451301d12692d1606663
        i+=1;
      }
      list+='</ul>';
      return list;
<<<<<<< HEAD
    },authorSelect:function(authors,author_id){
        var tag = '';
        var i = 0;
        while(i < authors.length){
            var selected = '';
            if(authors[i].id === author_id) {
                selected = ' selected';
            }
            tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
            i++;
        }
        return `
            <select name="author">
                ${tag}
            </select>
        `
=======
>>>>>>> 9443e13a5c24480ae32e451301d12692d1606663
    }
  }

  