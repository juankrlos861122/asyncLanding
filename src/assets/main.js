const API = 'https://youtube-v31.p.rapidapi.com/search?q=metallica%20live&part=snippet%2Cid&regionCode=ES&maxResults=50&order=date';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaa0bf9e49mshc7e96eba76acd2fp1dc72bjsnbb3a059f02e4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fecthData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fecthData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
                <p>${video.snippet.publishTime}</p>
            </div>
        `).slice(0,12).join('')}
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();

// fetch(``, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));