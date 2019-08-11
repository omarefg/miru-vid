'use strict'

const setupUser = require('./user')
const setupSection = require('./section')
const setupCreator = require('./creator')
const setupDatabase = require('./db')
const setupReadMovie = require('./read-movie')
const setupReadSerie = require('./read-serie')
const setupReadChapter = require('./read-chapter')
const setupStreamMovie = require('./stream-movie')
const setupStreamSerie = require('./stream-serie')
const setupStreamChapter = require('./stream-chapter')
const setupCreatorNotification = require('./creator-notification')
const setupReadMoviesHasSections = require('./read-movies-has-sections')
const setupReadSeriesHasSections = require('./read-series-has-sections')
const setupStreamMoviesHasSections = require('./stream-movies-has-sections')
const setupStreamSeriesHasSections = require('./stream-series-has-sections')
const setupUserNotification = require('./user-notification')
const setupUsersHasUserNotifications = require('./users-has-user-notifications')
const setupUsersLikeReadMovies = require('./users-like-read-movies')
const setupUsersLikeReadSeries = require('./users-like-read-series')
const setupUsersLikeStreamMovies = require('./users-like-stream-movies')
const setupUsersLikeStreamSeries = require('./users-like-stream-series')
const setupUsersWatchReadChapters = require('./users-watch-read-chapters')
const setupUsersWatchReadMovies = require('./users-watch-read-movies')
const setupUsersWatchReadSeries = require('./users-watch-read-series')
const setupUsersWatchStreamChapters = require('./users-watch-stream-chapters')
const setupUsersWatchStreamMovies = require('./users-watch-stream-movies')
const setupUsersWatchStreamSeries = require('./users-watch-stream-series')

module.exports = {
    setupUser,
    setupSection,
    setupCreator,
    setupReadMovie,
    setupDatabase,
    setupReadSerie,
    setupReadChapter,
    setupStreamMovie,
    setupStreamSerie,
    setupStreamChapter,
    setupCreatorNotification,
    setupReadMoviesHasSections,
    setupReadSeriesHasSections,
    setupStreamMoviesHasSections,
    setupStreamSeriesHasSections,
    setupUserNotification,
    setupUsersHasUserNotifications,
    setupUsersLikeReadMovies,
    setupUsersLikeReadSeries,
    setupUsersLikeStreamMovies,
    setupUsersLikeStreamSeries,
    setupUsersWatchReadChapters,
    setupUsersWatchReadMovies,
    setupUsersWatchReadSeries,
    setupUsersWatchStreamChapters,
    setupUsersWatchStreamMovies,
    setupUsersWatchStreamSeries
}
