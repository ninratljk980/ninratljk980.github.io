async function GetJSON(url) {
    const res = await fetch(url);
    return await res.json();
};