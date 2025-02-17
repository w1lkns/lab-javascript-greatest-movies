// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(element => element.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let steven = moviesArray.filter(function (element){
        return element.genre.includes('Drama') && element.director == 'Steven Spielberg'
    })
    return steven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;

    const initValue = moviesArray.reduce((sum, acc) => sum + (acc.score || 0),0);
    const result = Math.round((initValue / moviesArray.length) * 100) / 100

    return result
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama = moviesArray.filter(function (element){
        return element.genre.includes('Drama')
    })

    if (drama.length == 0) return 0;

    const initValue = drama.reduce((sum, acc) => sum + acc.score,0);
    const result = Math.round((initValue / drama.length) * 100) / 100

  return result

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderYear = moviesArray.map((item) => item)
    let sortedYearTitle = orderYear.sort(function (a,b){
        if (a.year === b.year){
            return a.title < b.title ? -1 : 1
        } else {
            return a.year < b.year ? -1 : 1
        }
    })

    return sortedYearTitle

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderAbc = moviesArray.map((item) => item.title)

    return orderAbc.sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let hoursToMinutes = moviesArray.map((item) => item)
    

    return hoursToMinutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
