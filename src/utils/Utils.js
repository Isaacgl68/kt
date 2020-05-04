export async function callServer(city){
    if (city === "NY") return 'Hi from New York USA'
    if (city === "LONDON") return 'Hi from London UK'
    return 'hi from far far away';
}