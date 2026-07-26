const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "./votre_image_hier.png";

image.onload = () => {
drawCanvas("");
};

function drawCanvas(text){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.drawImage(image,0,0,canvas.width,canvas.height);

if(text){

ctx.font="30px Arial";

ctx.fillStyle="white";

ctx.strokeStyle="black";

ctx.lineWidth=3;

ctx.textAlign="center";

ctx.strokeText(text,canvas.width/2,canvas.height/2);

ctx.fillText(text,canvas.width/2,canvas.height/2);

}

}

document.getElementById("btnAfficher").onclick=()=>{

drawCanvas(document.getElementById("text-editor").value);

};

document.getElementById("btnExporter").onclick=()=>{

const lien=document.createElement("a");

lien.download="obedi_editor_plus.png";

lien.href=canvas.toDataURL();

lien.click();

};