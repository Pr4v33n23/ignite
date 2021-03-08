function getMonth() {
    var month = new Date().getMonth() + 1;
    return month < 10 ? '0' + month : '' + month; // ('' + month) for string result
  }

  function getDate() {
    var date = new Date().getDate() + 1;
    return date < 10 ? '0' + date : '' + date; // ('' + month) for string result
  }

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const baseUrl = "https://api.rawg.io/api/";
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;


export const getGameDetails = (gameId: number) => `${baseUrl}games/${gameId}`;
export const getGameScreenShot = (gameId: number) => `${baseUrl}games/${gameId}/screenshots`;
export const searchGameUrl = (gameName: string) => `${baseUrl}games?search=${gameName}&page_size=9`;