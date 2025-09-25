const form = document.getElementById('contact_form')

form.addEventListener('submit',
    async (e)=>{
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
    }

)