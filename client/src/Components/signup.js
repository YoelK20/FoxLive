



export default function SignUpbutton(){ 
        const signUp = document.getElementById('signUp')
        const signIn = document.getElementById('signIn')
        const main = document.getElementById('main')

        signUp.addEventListener('click', ()=>{
            main.classList.add("right-panel-active")
        })

        signIn.addEventListener('click', ()=>{
            main.classList.remove("right-panel-active")
        })
}