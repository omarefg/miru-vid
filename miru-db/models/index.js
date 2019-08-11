'use strict'

const setupUserModel = require('./user')
const setupSectionModel = require('./section')
const setupCreatorModel = require('./creator')
const setupReadMovieModel = require('./read-movie')
const setupReadSerieModel = require('./read-serie')
const setupReadChapterModel = require('./read-chapter')
const setupStreamMovieModel = require('./stream-movie')
const setupStreamSerieModel = require('./stream-serie')
const setupStreamChapterModel = require('./stream-chapter')
const setupCreatorNotificationModel = require('./creator-notification')
const setupReadMoviesHasSectionsModel = require('./read-movies-has-sections')
const setupReadSeriesHasSectionsModel = require('./read-series-has-sections')
const setupStreamMoviesHasSectionsModel = require('./stream-movies-has-sections')
const setupStreamSeriesHasSectionsModel = require('./stream-series-has-sections')
const setupUserNotificationModel = require('./user-notification')
const setupUsersHasUserNotificationsModel = require('./users-has-user-notifications')
const setupUsersLikeReadMoviesModel = require('./users-like-read-movies')
const setupUsersLikeReadSeriesModel = require('./users-like-read-series')
const setupUsersLikeStreamMoviesModel = require('./users-like-stream-movies')
const setupUsersLikeStreamSeriesModel = require('./users-like-stream-series')
const setupUsersWatchReadChaptersModel = require('./users-watch-read-chapters')
const setupUsersWatchReadMoviesModel = require('./users-watch-read-movies')
const setupUsersWatchReadSeriesModel = require('./users-watch-read-series')
const setupUsersWatchStreamChaptersModel = require('./users-watch-stream-chapters')
const setupUsersWatchStreamMoviesModel = require('./users-watch-stream-movies')
const setupUsersWatchStreamSeriesModel = require('./users-watch-stream-series')

module.exports = {
    setupUserModel,
    setupSectionModel,
    setupReadMovieModel,
    setupReadSerieModel,
    setupCreatorModel,
    setupReadChapterModel,
    setupStreamMovieModel,
    setupStreamSerieModel,
    setupStreamChapterModel,
    setupCreatorNotificationModel,
    setupReadMoviesHasSectionsModel,
    setupReadSeriesHasSectionsModel,
    setupStreamMoviesHasSectionsModel,
    setupStreamSeriesHasSectionsModel,
    setupUserNotificationModel,
    setupUsersHasUserNotificationsModel,
    setupUsersLikeReadMoviesModel,
    setupUsersLikeReadSeriesModel,
    setupUsersLikeStreamMoviesModel,
    setupUsersLikeStreamSeriesModel,
    setupUsersWatchReadChaptersModel,
    setupUsersWatchReadMoviesModel,
    setupUsersWatchReadSeriesModel,
    setupUsersWatchStreamChaptersModel,
    setupUsersWatchStreamMoviesModel,
    setupUsersWatchStreamSeriesModel
}
