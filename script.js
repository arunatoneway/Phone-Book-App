let textfield = document.getElementById('inputfield')
let searchbtn = document.getElementById('searchbtn')
let contactlist = document.getElementById('contactlist')
let fieldtext = 0

async function getallcontacts() {
    const allcontresp = await fetch(`api.json`)
    const allcontdata = await allcontresp.json()
    allcontdata.forEach(data => {

        let contact = document.createElement('div')
        contact.style.display ="flex"
        contact.style.width ="400px"
        contact.innerHTML = `
              <div style="display: flex; flex-direction: column; ">
                   <h3>${data.Name}</h3>
                   <h4>${data.Phone}</h4>
              </div>
              <button type="button" style ="background-color : red; justify-self: end;">delete</button>
        
        `
        contactlist.appendChild(contact)
    })


}

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

getallcontacts()

searchbtn.addEventListener('click', () => {
    fieldtext = textfield.value;
    getdata();
})





