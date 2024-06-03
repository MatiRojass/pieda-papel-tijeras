window.onload = ()=>{
    const OPTIONS = ["👊", "✋", "✌️"]
    let user = null
    let userPoints = 0
    let ia = null
    let iaPoints = 0

    const userPointsSpan = document.getElementById("userPoints")
    const iaPointsSpan = document.getElementById("iaPoints")

    const updateCounter = ()=>{
        userPointsSpan.textContent = userPoints
        iaPointsSpan.textContent = iaPoints
    }

    const setWinner = (user, ia)=>{
        switch (user) {
            case "👊":
                if(ia === "✋"){
                    iaPoints++
                } else if(ia === "✌️"){
                    userPoints++
                }
                updateCounter()
                break;

            case "✋":
                if(ia === "✌️"){
                    iaPoints++
                } else if(ia === "👊"){
                    userPoints++
                }
                updateCounter()
                break;

            case "✌️":
                if(ia === "👊"){
                    iaPoints++
                } else if(ia === "✋"){
                    userPoints++
                }
                updateCounter()
                break;
        }
    } 
    
    const setCompare = (player, option) => {
        if(player == "user"){
            let span = document.getElementById("userSelect")
            span.textContent = option
            user = option
        }else{
            let span = document.getElementById("iaSelect")
            span.textContent = option
            ia = option
        }
    }
    
    const iaOption = ()=>{
        let index = Math.floor(Math.random() * OPTIONS.length)
        setCompare("ia", OPTIONS[index])
    }

    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")

    rock.addEventListener("click", ()=>{
        setCompare("user", rock.textContent)
        iaOption()
        setWinner(user, ia)
    })
    paper.addEventListener("click", ()=>{
        setCompare("user", paper.textContent)
        iaOption()
        setWinner(user, ia)
    })
    scissors.addEventListener("click", ()=>{
        setCompare("user", scissors.textContent)
        iaOption()
        setWinner(user, ia)
    })
}

