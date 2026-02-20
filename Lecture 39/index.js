const link = "https://api.github.com/users/humayunsaghir"

const xhr = new XMLHttpRequest();
xhr.open("GET", link)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const str = this.responseText
        const data = JSON.parse(str)
        console.log(data.bio)
    }


}
xhr.send()