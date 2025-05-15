// Async await
// try
// catch
// finally

let isStoreOpen = true

//Async = await got it? They're friends.

async function kitchen() {
    try {
        //I run whenever tings work out
        await fakeFunction()
    } catch (error) {
        console.log('something exploded', error)
    }
    finally{
        console.log('I always run gg')
    }
}

kitchen()
    .then(()=>{
        console.log('working after as aw')
    })