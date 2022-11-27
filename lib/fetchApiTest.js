export async function getStaticProps() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://random-data-api.com/api/v2/users')
    const users = await res.json()
    // console.log(users)
    return users
}

let variable2 = await getStaticProps();
console.log("here: ", variable2);