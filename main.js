let li = JSON.parse(localStorage.getItem('liName'));
let url = JSON.parse(localStorage.getItem('urlName'));
let data = []; 
// console.log(li)
// console.log(url)

let bookmark_li_span;
let bookmark_li;
let bookmark_li_trash;
let count = li.length;


//'{{デコードする値　nofilter}}'
// if(localStorage.getItem('liName') !== null){
    // }
console.log(li === true);
for(let i = 0; i < li.length; i++){
    let bookmark_li = document.createElement("li");
    bookmark_li.setAttribute("id","li-"+(i+1));
    document.getElementById("bookmark-list").appendChild(bookmark_li);
    data = [li[i],url[i]];
    // console.log(data)
    // text & url: li
    let bookmark_li_span = document.createElement("a");
    bookmark_li_span.setAttribute("href",data[[i],1]);
    bookmark_li_span.innerText = data[[i],0];
    document.getElementById("li-"+(i+1)).appendChild(bookmark_li_span);
    // trash
    let bookmark_li_trash = document.createElement("i");
    bookmark_li_trash.setAttribute("class","ri-delete-bin-line");
    bookmark_li_trash.setAttribute("onclick","trash("+(i+1)+");");
    document.getElementById("li-"+(i+1)).appendChild(bookmark_li_trash);
}
if(li === true) {
} else {
    // li = ["FIRST LIST"];
    // url = ["#"]; 

}
// for (let j = 0; j < jsonLI.length; j++) {
//     let bookmark_li_trash = document.createElement("i");
//     bookmark_li_trash.setAttribute("class","ri-delete-bin-line");
//     bookmark_li_trash.setAttribute("onclick","trash("+(j+1)+");");
//     document.getElementById("li-"+(j+1)).appendChild(bookmark_li_trash);
// }
// for (let i = 0; i < jsonLI.length; i++) {
//     let bookmark_li = document.createElement("li");
//     bookmark_li.setAttribute("id","li-"+(i+1));
//     document.getElementById("bookmark-list").appendChild(bookmark_li);
//     let bookmark_li_span = document.createElement("a");
//     bookmark_li_span.setAttribute("href",jsonURL[i]);
//     bookmark_li_span.innerText = jsonLI[i];
//     document.getElementById("li-"+(i+1)).appendChild(bookmark_li_span);
//     document.getElementById("bookmark-input").value = "";
//     document.getElementById("bookmark-input-url").value = "";
//     let bookmark_li_trash = document.createElement("i");
//     bookmark_li_trash.setAttribute("class","ri-delete-bin-line");
//     bookmark_li_trash.setAttribute("onclick","trash("+(i+1)+");");
//     document.getElementById("li-"+(i+1)).appendChild(bookmark_li_trash);
// }

const radio_search = document.getElementById("search");
const radio_list = document.getElementById("list");
const radio_memo = document.getElementById("memo");
const radio_saves = document.getElementById("saves");

const tab_search = document.getElementById("tab-search");
const tab_list = document.getElementById("tab-list");
const tab_memo = document.getElementById("tab-memo");
const tab_saves = document.getElementById("tab-saves");

function tick() {
    tab_search.style.display="none";
    tab_list.style.display="none";
    tab_memo.style.display="none";
    tab_saves.style.display="none";
    if(radio_search.checked) {
        tab_search.style.display="block";
    } else if(radio_list.checked) {
        tab_list.style.display="block";
    } else if(radio_memo.checked) {
        tab_memo.style.display="block";
    } else if(radio_saves.checked) {
        tab_saves.style.display="block";
    }
}
setInterval(() => {
    tick();
    localStorage.setItem("liName",JSON.stringify(li));
    localStorage.setItem("urlName",JSON.stringify(url));
}, 0);

function trash(num) {
    document.getElementById("li-"+num).remove();
    li.splice(num-1,1);
    url.splice(num-1,1);
}

document.getElementById("bookmark-input").addEventListener("keydown", function (e) {
    if(e.key == "Enter" && document.getElementById("bookmark-input").value.trim() != ""){
        count++;
        bookmark_li = document.createElement("li");
        bookmark_li.setAttribute("id","li-"+count);
        document.getElementById("bookmark-list").appendChild(bookmark_li);
        // text & url: li
        bookmark_li_span = document.createElement("a");
        bookmark_li_span.setAttribute("href",document.getElementById("bookmark-input-url").value);
        bookmark_li_span.innerText = document.getElementById("bookmark-input").value;

        li.push(document.getElementById("bookmark-input").value);
        url.push(document.getElementById("bookmark-input-url").value);

        document.getElementById("li-"+count).appendChild(bookmark_li_span);
        document.getElementById("bookmark-input").value = "";
        document.getElementById("bookmark-input-url").value = "";
        // trash
        bookmark_li_trash = document.createElement("i");
        bookmark_li_trash.setAttribute("class","ri-delete-bin-line");
        bookmark_li_trash.setAttribute("onclick","trash("+count+");");
        document.getElementById("li-"+count).appendChild(bookmark_li_trash);

        localStorage.setItem("liName",JSON.stringify(li));
        localStorage.setItem("urlName",JSON.stringify(url));
    }
});

let settings_flag = 0;
function settings() {
    settings_flag++;
    document.getElementById("settings").classList.remove("setting_hide");
    if(1 < settings_flag) {
        settings_flag = 0;
        document.getElementById("settings").classList.add("setting_hide");
    }
}

// 改行コード
// テキストエリアの拡張処理
// function afeed(element){
//     if(element.tagName == 'TEXTAREA'){
  
//       // 行の高さとpadding値を取得する。IEやSafariなど、ブラウザによって必要な関数が異なるので、orで３パターン分取れるようにしてある。
//       var stylelists = window.getComputedStyle(element, null) || element.currentStyle || document.defaultView.getComputedStyle(element, '');
  
//       var line_height = stylelists.getPropertyValue('line-height').replace(/px/g , "");
//       var line_length;
  
//       var firstheight = Number(element.offsetHeight) - stylelists.getPropertyValue('padding-top').replace(/px/g , "") - stylelists.getPropertyValue('padding-top').replace(/px/g , "");
  
//       var result_height;
  
//       element.style.height = firstheight + 'px';
//       element.style.resize = 'none';
  
//       element.addEventListener('input', function(){
  
//         // 改行文字の個数を取得
//         if(element.value.match(/\n/g) === null){
//           line_length = 0;
//         }else{
//           line_length = element.value.match(/\n/g).length;
//         }
  
//         // 見栄えの関係上、１つ以上改行があるときは文字のすぐ下に枠が来るようにする
//         if(line_length === 0){
//           result_height = firstheight;
//         }else{
//           result_height = ((line_length - 1) * line_height) + firstheight;
//         }
//         element.style.height = result_height + 'px';
//       }, false);
//     }else{
//       console.log('Error: テキストエリアでないものに対して適用されています。');
//     }
//   }
//   var textarea = document.querySelector('#ha_wa_i textarea');
//   afeed(textarea);

let st_memo = 1;
document.querySelector("#ha_wa_i textarea").textContent = localStorage.getItem("memo");
document.getElementById("edit").classList.remove("none");
document.getElementById("save").classList.add("none");
document.querySelector("#ha_wa_i textarea").setAttribute("readonly","readonly");
function switch_memo() {
    document.getElementById("edit").classList.add("none");
    document.getElementById("save").classList.remove("none");
    document.querySelector("#ha_wa_i textarea").removeAttribute("readonly");
    if(1 < st_memo) {
        document.querySelector("#ha_wa_i textarea").setAttribute("readonly","readonly");
        st_memo = 0;
        document.getElementById("edit").classList.remove("none");
        document.getElementById("save").classList.add("none");
        localStorage.setItem("memo",document.querySelector("#ha_wa_i textarea").value);
    }
    st_memo++;
    console.log(st_memo)
}

function allclear() {
    li = [];
    url = [];
    localStorage.clear()
}