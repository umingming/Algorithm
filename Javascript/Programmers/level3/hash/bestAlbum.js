/*
    베스트 앨범
    1. songConfigs 정의; genre, play, index를 요소로 하는 배열, 그리고 이를 내림차순 정렬함.
    2. genrePlayConfig 정의; 장르별 play 수 카운팅
    3. config를 장르, play를 요소로 하는 배열로 만든 후, play 순으로 정렬
    4. genrePlays 반복하며, 해당 genre의 곡을 필터링 후, 앞의 2개만 가져옴.
    5. album 반환
*/
function solution(genres, plays) {
    const songConfigs = genres.map((genre, index) => [genre, plays[index], index]).sort((a, b) => b[1] - a[1]);
    const genrePlayConfig = songConfigs.reduce((acc, [genre, play]) => {
        if (!acc[genre]) {
            acc[genre] = 0;
        }
        acc[genre] += play;
        return acc;
    }, {})
    const genrePlays = Object.entries(genrePlayConfig).sort((a, b) => b[1] - a[1]);
    const album = [];
    
    for (const [genre] of genrePlays) {
        const songs = songConfigs.filter(config => config[0] === genre).map(config => config[2]);
        if (songs.length > 2) {
            album.push(songs[0], songs[1]);
        } else {
            album.push(...songs);
        }
    }
    return album;
}