let textfield = document.getElementById('inputfield')
let addbtn = document.getElementById('addbtn')
let fieldtext = 0
async function getdata() {
    const response = await fetch(`api.json`)
    const data = await response.json()
    console.log(data[0].Name);
    console.log(fieldtext)
    data.forEach(data => {


        if (data.Name == fieldtext) {
            console.log("inputed value is there");
            return;
        } else if (data.Phone == fieldtext) {
            console.log("inputted no is there")
            return;
        }


    });


}

addbtn.addEventListener('click', () => {
    fieldtext = textfield.value;
    getdata();
})





