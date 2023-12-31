fetch("./data.json")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    data.data.map(data=>{
        document.querySelector(".container").insertAdjacentHTML("beforeend",`
            <div>
                <a href="${data.path}" target="_blank">
                    <img src="../img/${data.img}">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </a>
            </div>
        `);
    });
});