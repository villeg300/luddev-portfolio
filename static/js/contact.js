const form = document.getElementById('contact_form')

form.addEventListener('submit',
    async (e)=>{
        e.preventDefault()
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
    }

)