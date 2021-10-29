const linksSocialMedia = {
    github: 'jakeliny2',
    youtube: 'jakelinygracielly',
    facebook: 'maykbrito',
    instagram: 'jakeliny.gracielly',
    twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}/`
    }        
}

changeSocialMediaLinks()

function changeGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userBio.textContent = data.bio
        userLogin.textContent = data.login
    })
}

changeGithubProfileInfos()
