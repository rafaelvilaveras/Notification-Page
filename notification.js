const notifications = [
    {
        image: './assets/images/avatar-mark-webber.webp',
        userName: 'Mark Webber',
        action: 'reacted to your recent post',
        item: 'My first tounament today!',
        content: '',
        picture: '',
        timer: '1m ago',
        status: 1,
    },
    {
        image: './assets/images/avatar-angela-gray.webp',
        userName: ' Angela Gray ',
        action: 'followed you',
        item: '',
        content: '',
        picture: '',
        timer: '5m ago',
        status: 1,
    },
    {
        image: './assets/images/avatar-jacob-thompson.webp',
        userName: ' Jacob Thompson ',
        action: 'has joined your group',
        item: 'Chess Club',
        content: '',
        picture: '',
        timer: '1 day ago',
        status: 1,
    },
    {
        image: './assets/images/avatar-rizky-hasanuddin.webp',
        userName: ' Rizky Hasanuddin ',
        action: 'sent you a private message',
        item: '',
        content: "Hello, thanks for setting up the Chess Club. I've a member for a few weeks now and i'm already having lots of fun and improving my game.",
        picture: '',
        timer: '5 days ago',
        status: 0,
    },
    {
        image: './assets/images/avatar-kimberly-smith.webp',
        userName: ' Kimberly Smith ',
        action: 'commented on your picture',
        item: '',
        content: '',
        picture: './assets/images/image-chess.webp',
        timer: '1 week ago',
        status: 0,
    },
    {
        image: './assets/images/avatar-nathan-peterson.webp',
        userName: ' Nathan Peterson ',
        action: 'reacted to you recent post',
        item: '5 end-game strategies to increase your win rate',
        content: '',
        picture: '',
        timer: '2 weeks ago',
        status: 0,
    },
    {
        image: './assets/images/avatar-anna-kim.webp',
        userName: ' Anna Kim ',
        action: 'left the group',
        item: 'Chess Club',
        content: '',
        picture: '',
        timer: '2 weeks ago',
        status: 0,
    },
    ]

const items = document.querySelector(".content-list")

const showItems = notifications.map((val) => {
    return ` 
    <li class = "${val.status == 1 ? 'a' : 'n'}">
        <div class = "image-container">
            <img class = "image" alt = "${val.userName}" src = "${val.image}"></img>
        
        </div>
        <div class = "text-container">
            <div class = "inner-text">
                <p class = "text-input m">
                    <strong class = "interativo">${val.userName}</strong> <span class = "LG"> ${val.action} </span> <strong class = "prox">${val.item}</strong> 
                    <i class="fa-solid fa-circle" id = "${val.status == 1 ? 'a' : 'n'}"></i>
                </p>

            </div>
            <p class = "LG m">${val.timer}</p>

        </div>

        ${ val.picture !== '' ? `<img class="pic" src="${val.picture}"></img>` : ``}

            
    </li>

    ${val.content !== '' ? `
        <p class = "message">${val.content}</p>
    

    ` : ``}

    `

}).join(' ')

items.innerHTML = showItems


const active = notifications.reduce((prev, next) => {
    
    return prev + next.status
},0)

document.querySelector(".ntf-content").innerHTML = active

