"use strict" ;

let title_list_str = `
Goto さん
はばたく Goto さん
Goto さん - ふたたび
go to なんとか
後藤さん本人
Mr. G
アルバム "THE GOTO"
後藤さん
GGG
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
G
`;

let title_array = title_list_str.split("\n");
title_array.pop();
title_array.shift();

const wrap = document.getElementById("wrap");

for(let i=0; i<title_array.length; i++){
  
  let record = document.createElement("div");
  let image_record = document.createElement("img");
  let title_record = document.createElement("span");
  
  record.classList.add("record");
  record.classList.add("c" + i % 8);
  image_record.classList.add("image");
  title_record.classList.add("title");
  
  image_record.src = "icon-512.png";
  title_record.textContent = title_array[i];
  
  record.appendChild(image_record);
  record.appendChild(title_record);
  wrap.appendChild(record);
}

console.log(title_array);