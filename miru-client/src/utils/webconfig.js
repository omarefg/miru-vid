let url

if (window.location.host === 'https://miru-app.com') {
    url = ''
} else {
    url = 'http://127.0.0.1:3020/miru'
}
export const URL = url
