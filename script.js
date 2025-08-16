let textfield = document.getElementById('inputfield')
let searchbtn = document.getElementById('searchbtn')
let contactlist = document.getElementById('contactlist')
let searchlist = document.getElementById('searchlist')
let addcontactbtn = document.getElementById('addcontactbtn')
let contactform = document.getElementById('contactform')
let savebtn = document.getElementById('savebtn')
let nameid = document.getElementById('nameid')
let numberid = document.getElementById('numberid')
let warningerr= document.getElementById('warningerr')
warningerr.style.display ="none"

let fieldtext = 0

async function getallcontacts() {
    const allcontresp = await fetch(`api.json`)
    const allcontdata = await allcontresp.json()
    allcontdata.forEach((data, index) => {


        let contact = document.createElement('div')
        contact.classList.add("contactelemnt")
        contact.innerHTML = `
              <div style="display: flex; flex-direction: column;" >
                   <h3>${data.Name}</h3>
                   <h4>${data.Phone}</h4>
              </div>
        
        `
        let removebtn = document.createElement('button')
        removebtn.innerHTML = "Remove"
        removebtn.classList.add("removebutton")
        contact.appendChild(removebtn)
        removebtn.addEventListener('click', () => {
            contact.style.display = "None"
        })
        console.log(index)
        contactlist.appendChild(contact)
    })


}

async function getdata() {
    
    const response = await fetch(`api.json`)
    const data = await response.json()
    console.log(data[0].Name);
    console.log(fieldtext)
    data.forEach((data) => {
        


        if (data.Name == fieldtext) {
            
            

            searchlist.style.display = "flex"
            let searchcontent = document.createElement('div')
            searchcontent.classList.add("contactelemnt")
            searchcontent.innerHTML = `
              <div style="display: flex; flex-direction: column;" >
                   <h3>${data.Name}</h3>
                   <h4>${data.Phone}</h4>
              </div>
            `

            let removelistbtn = document.createElement('button')
            removelistbtn.innerHTML = "Remove"
            removelistbtn.classList.add("removebutton")
            searchcontent.appendChild(removelistbtn)
            removelistbtn.addEventListener('click', () => {
                searchcontent.style.display = "None"
            })
            searchlist.appendChild(searchcontent)
            

            return;
        } else if (data.Phone == fieldtext) {
            warningerr.style.display ="None"
            searchlist.style.display = "flex"
            let searchcontent = document.createElement('div')
            searchcontent.classList.add("contactelemnt")
            searchcontent.innerHTML = `
              <div style="display: flex; flex-direction: column;" >
                   <h3>${data.Name}</h3>
                   <h4>${data.Phone}</h4>
              </div>
            `

            let removelistbtn = document.createElement('button')
            removelistbtn.innerHTML = "Remove"
            removelistbtn.classList.add("removebutton")
            searchcontent.appendChild(removelistbtn)
            removelistbtn.addEventListener('click', () => {
                searchcontent.style.display = "None"
            })
            searchlist.appendChild(searchcontent)
            
            return;
        }else{
            
            warningerr.style.display ="block"
            
        }


    });


}

async function removedata(i) {

    const allremovecontresp = await fetch(`api.json/${i}`, { method: 'DELETE' })
}

getallcontacts()

searchbtn.addEventListener('click', () => {
    warningerr.style.display ="None"
    fieldtext = textfield.value;
    getdata();
    textfield.value =""
})

addcontactbtn.addEventListener('click', () => {
    contactform.style.display = "block"
})

savebtn.addEventListener('click', () => {

    let newcontact = document.createElement('div')
    newcontact.classList.add("contactelemnt")
    newcontact.innerHTML = `
        <div style="display: flex; flex-direction: column;" >
            <h3>${nameid.value}</h3>
            <h4>${numberid.value}</h4>
        </div>
    
    
    
    `
    let removebtnnewcont = document.createElement('button')
    removebtnnewcont.innerHTML = "Remove"
    removebtnnewcont.classList.add("removebutton")
    newcontact.appendChild(removebtnnewcont)
    removebtnnewcont.addEventListener('click',()=>{
        newcontact.style.display="none"
    })

    contactlist.appendChild(newcontact)
    nameid.value = ""
    numberid.value = ""
    contactform.style.display = "None"
    alert("New Contact has been added")


})










