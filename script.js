function get(){
    var name = document.getElementById("name").value;
    var lahir = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name ="jeniskelamin"]:checked').value;
    var agama = document.getElementById("agama").value;
    var pesan = document.getElementById("pesan").value;

    var hobi = [];
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    for(let i=0; i<checkbox.length; i++)
    {
        hobi.push(checkbox[i].value);
    }

    var table = document.getElementsByTagName('table')[0];

    var newrow = table.insertRow(0);
    var cel1 = newrow.insertCell(0);
    var cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Label".bold();
    cel2.innerHTML = "Value".bold();

    var newrow = table.insertRow(1);
    var cel1 = newrow.insertCell(0);
    var cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Nama".bold();
    cel2.innerHTML = name;

    var newrow = table.insertRow(2);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Tanggal Lahir".bold();
    cel2.innerHTML = lahir;

    var newrow = table.insertRow(3);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Jenis Kelamin".bold();
    cel2.innerHTML = gender;

 
    var newrow = table.insertRow(4);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Hobi".bold();
    for(i=0; i< hobi.length; i++){
        if(i < hobi.length-1){
            cel2.innerHTML += `${hobi[i]}, `;
        }
        else{
            cel2.innerHTML += `${hobi[i]}`;
        }
    }

    var newrow = table.insertRow(5);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Agama".bold();
    cel2.innerHTML = agama;

    var newrow = table.insertRow(6);
    cel1 = newrow.insertCell(0);
    cel2 = newrow.insertCell(1);
    cel1.innerHTML = "Pesan".bold();
    cel2.innerHTML = pesan;



}
